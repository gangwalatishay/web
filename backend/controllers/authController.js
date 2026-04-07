const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const User = require('../models/User');

// Helper function to generate JWT token
const generateJWTToken = (user) => {
  return jwt.sign(
    { id: user._id, email: user.email, role: user.role },
    process.env.JWT_SECRET || 'secret',
    { expiresIn: '24h' }
  );
};

// Allowed roles
const allowedRoles = ['student', 'professional'];

// Signup
async function signup(req, res) {
  try {
    const { name, email, password, mobile, role, institution, batchYear, companyName } = req.body;

    // Validation
    if (!name || !email || !password) {
      return res.status(400).json({ error: 'Name, email, and password are required' });
    }

    // FIX: secure role handling
    const finalRole = allowedRoles.includes(role) ? role : 'student';

    // FIX: safe duplicate check
    const query = [{ email }];
    if (mobile) query.push({ mobile });

    const existingUser = await User.findOne({ $or: query });

    if (existingUser) {
      return res.status(400).json({ error: 'User with this email or mobile already exists' });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create user
    const newUser = new User({
      name,
      email,
      password: hashedPassword,
      mobile,
      role: finalRole,
      institution: institution || '',
      batchYear: batchYear || '',
      companyName: companyName || '',
      isPhoneVerified: true
    });

    await newUser.save();

    // Generate token
    const token = generateJWTToken(newUser);

    res.status(201).json({
      message: 'User created successfully',
      token,
      user: {
        id: newUser._id,
        name: newUser.name,
        email: newUser.email,
        mobile: newUser.mobile,
        role: newUser.role
      }
    });

  } catch (error) {
    console.error('Signup error:', error);
    res.status(500).json({ error: 'Error creating user' });
  }
}

// Login
async function login(req, res) {
  try {
    const { email, mobile, password } = req.body;

    if ((!email && !mobile) || !password) {
      return res.status(400).json({ error: 'Email/mobile and password are required' });
    }

    const query = email ? { email } : { mobile };
    console.log('Login attempt with query:', JSON.stringify(query));

    const user = await User.findOne(query);

    if (!user) {
      console.log('User not found for query:', JSON.stringify(query));
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    console.log('Password match result:', isMatch);

    if (!isMatch) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    const token = generateJWTToken(user);

    res.json({
      message: 'Login successful',
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        mobile: user.mobile,
        role: user.role
      }
    });

  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ error: 'Error during login' });
  }
}

// Forgot Password
async function forgotPassword(req, res) {
  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({ error: 'Email is required' });
    }

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    const resetToken = crypto.randomBytes(32).toString('hex');
    const resetPasswordToken = crypto.createHash('sha256').update(resetToken).digest('hex');
    const resetPasswordExpires = Date.now() + 3600000;

    user.resetPasswordToken = resetPasswordToken;
    user.resetPasswordExpires = resetPasswordExpires;

    await user.save();

    res.json({
      message: 'Password reset link sent',
      resetToken // ⚠️ REMOVE IN PRODUCTION
    });

  } catch (error) {
    console.error('Forgot password error:', error);
    res.status(500).json({ error: 'Error processing request' });
  }
}

// Reset Password
async function resetPassword(req, res) {
  try {
    const { token, newPassword } = req.body;

    if (!token || !newPassword) {
      return res.status(400).json({ error: 'Token and new password are required' });
    }

    const resetPasswordToken = crypto.createHash('sha256').update(token).digest('hex');

    const user = await User.findOne({
      resetPasswordToken,
      resetPasswordExpires: { $gt: Date.now() }
    });

    if (!user) {
      return res.status(400).json({ error: 'Invalid or expired token' });
    }

    const hashedPassword = await bcrypt.hash(newPassword, 10);

    user.password = hashedPassword;
    user.resetPasswordToken = null;
    user.resetPasswordExpires = null;

    await user.save();

    res.json({ message: 'Password reset successful' });

  } catch (error) {
    console.error('Reset password error:', error);
    res.status(500).json({ error: 'Error resetting password' });
  }
}

// Get current user
async function getMe(req, res) {
  try {
    const user = await User.findById(req.user.id)
      .select('-password -resetPasswordToken -resetPasswordExpires');

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    res.json({ user });

  } catch (error) {
    console.error('Get user error:', error);
    res.status(500).json({ error: 'Error fetching user' });
  }
}

// Legacy functions (UNCHANGED)
async function hashPassword(req, res) {
  try {
    const { password } = req.body;
    if (!password) {
      return res.status(400).json({ error: 'Password required' });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    res.json({ hashedPassword });
  } catch (error) {
    res.status(500).json({ error: 'Error hashing password' });
  }
}

async function comparePassword(req, res) {
  try {
    const { password, hashedPassword } = req.body;
    if (!password || !hashedPassword) {
      return res.status(400).json({ error: 'Data missing' });
    }
    const isMatch = await bcrypt.compare(password, hashedPassword);
    res.json({ isMatch });
  } catch (error) {
    res.status(500).json({ error: 'Error comparing password' });
  }
}

function generateToken(req, res) {
  try {
    const user = req.body;
    if (!user) {
      return res.status(400).json({ error: 'User data required' });
    }
    const token = jwt.sign(user, process.env.JWT_SECRET || 'secret', {
      expiresIn: '24h',
    });
    res.json({ token });
  } catch (error) {
    res.status(500).json({ error: 'Error generating token' });
  }
}

module.exports = {
  signup,
  login,
  forgotPassword,
  resetPassword,
  getMe,
  hashPassword,
  comparePassword,
  generateToken
};