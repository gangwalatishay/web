import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

import signupIllustration from '@/assets/signup-illustration.png';

import { Logo } from '@/components/logo';

type Role = "student" | "professional";

export default function Signup() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    role: 'student' as Role
  });

  const [error, setError] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRoleChange = (role: Role) => {
    setFormData({ ...formData, role });
  };

  const validate = () => {
    if (!formData.fullName || !formData.email || !formData.password) {
      return 'All fields are required';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      return 'Invalid email format';
    }

    if (formData.password.length < 6) {
      return 'Password must be at least 6 characters';
    }

    return null;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    const validationError = validate();
    if (validationError) {
      setError(validationError);
      setLoading(false);
      return;
    }

    try {
      const response = await axios.post(
        'http://127.0.0.1:5000/api/auth/signup',
        {
          name: formData.fullName,
          email: formData.email,
          password: formData.password,
          role: formData.role
        }
      );

<<<<<<< HEAD
      const { token } = response.data;
=======
      const { token, user } = response.data;

>>>>>>> 7351d488c3a591a381239f8af663e40da8b20392
      localStorage.setItem('token', token);

      navigate('/profile');

    } catch (err: unknown) {
      if (axios.isAxiosError(err)) {
        setError(err.response?.data?.error || 'Signup failed');
      } else {
        setError('Something went wrong');
      }
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleAuth = () => {
    window.location.href = 'http://127.0.0.1:5000/api/auth/google';
  };

  const handleAppleAuth = () => {
    window.location.href = 'http://127.0.0.1:5000/api/auth/apple';
  };

  return (
    <div className="min-h-screen bg-[#0F1115] flex flex-col">

      <nav className="flex items-center justify-between px-8 py-4">
        <Link to="/"><Logo /></Link>
      </nav>

      <div className="flex-1 flex">

        {/* LEFT */}
        <div className="hidden lg:flex flex-1 flex-col justify-center px-16">
          <h1 className="text-5xl font-bold text-white leading-tight">
            Start your journey<br />
            <span className="text-blue-500">— AlgoAscend</span>
          </h1>
          <img src={signupIllustration} className="mt-10 rounded-3xl" />
        </div>

        {/* RIGHT */}
        <div className="flex-1 flex items-center justify-center px-8">
          <div className="w-full max-w-md bg-[#18181B] rounded-3xl p-8 border border-gray-800">

            <h2 className="text-3xl font-bold text-white text-center">
              Create Account
            </h2>

            {/* ROLE SWITCH */}
            <div className="flex bg-[#0f0f1a] p-1 rounded-xl mt-6">
              <button
                onClick={() => handleRoleChange("student")}
                className={`flex-1 py-2 rounded-lg text-sm font-semibold ${
                  formData.role === "student"
                    ? "bg-blue-600 text-white"
                    : "text-gray-400"
                }`}
              >
                Student
              </button>

              <button
                onClick={() => handleRoleChange("professional")}
                className={`flex-1 py-2 rounded-lg text-sm font-semibold ${
                  formData.role === "professional"
                    ? "bg-blue-600 text-white"
                    : "text-gray-400"
                }`}
              >
                Professor
              </button>
            </div>

            {error && (
              <div className="bg-red-500/20 text-red-300 p-3 rounded-xl mt-4 text-sm text-center">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4 mt-6">

              <input
                name="fullName"
                placeholder="Full Name"
                value={formData.fullName}
                onChange={handleChange}
                className="input-dark"
              />

              <input
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="input-dark"
              />

              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                className="input-dark"
              />

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-blue-600 py-3 rounded-xl text-white font-bold"
              >
                {loading ? 'Creating...' : 'Sign Up'}
              </button>
            </form>

            {/* SOCIAL */}
            <div className="flex flex-col gap-3 mt-3">
              <button
                onClick={handleGoogleAuth}
                className="w-full flex items-center justify-center gap-3 py-3 bg-[#0f0f1a] border border-gray-700 rounded-xl hover:bg-gray-800 transition-all text-white text-sm"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" />
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                </svg>
                Continue with Google
              </button>

              <button
                onClick={handleAppleAuth}
                className="w-full flex items-center justify-center gap-3 py-3 bg-[#0f0f1a] border border-gray-700 rounded-xl hover:bg-gray-800 transition-all text-white text-sm"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.05 20.28c-.98.95-2.05 1.79-3.32 1.79-1.24 0-1.63-.78-3.13-.78-1.5 0-1.95.76-3.13.78-1.24.02-2.25-.8-3.32-1.79C1.96 18.25 1 14.8 1 12.06c0-4.32 2.83-6.61 5.58-6.61 1.45 0 2.65.92 3.53.92.85 0 2.2-.95 3.8-.95 1.1 0 2.3.43 3.05 1.1-3.13 1.83-2.6 6.38.75 8.16-.7 1.83-1.63 3.65-3.05 5.6M12.03 5.07c.83-1.04 1.39-2.48 1.39-3.92 0-.2-.02-.41-.05-.62-1.3.05-2.88.87-3.82 1.97-.84.97-1.58 2.44-1.58 3.86 0 .23.03.45.08.64 1.45-.11 2.9-.89 3.98-1.93z" />
                </svg>
                Continue with Apple
              </button>
            </div>
            <p className="text-center text-gray-400 mt-4">
              Already have an account? <Link to="/login" className="text-[#3B82F6] hover:text-blue-300">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}