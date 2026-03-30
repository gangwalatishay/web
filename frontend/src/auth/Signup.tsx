import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Signup() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    if (!formData.fullName || !formData.email || !formData.password) {
      return "All fields are required";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      return "Invalid email format";
    }

    if (formData.password.length < 6) {
      return "Password must be at least 6 characters";
    }

    return null;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    const validationError = validate();
    if (validationError) {
      setError(validationError);
      return;
    }

    // Simulate success
    setSuccess("Account created successfully!");
  };

  const handleSocialAuth = (provider: string) => {
    alert(`${provider} signup coming soon!`);
  };

  return (
    <div className="min-h-screen bg-[#0F1115] flex items-center justify-center px-6">

      <div className="w-full max-w-md">

        {/* Heading */}
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-white">
            Start Your Journey 🚀
          </h1>
          <p className="text-gray-400 mt-3 text-sm">
            Learn in-demand skills. Build real-world projects.
          </p>
        </div>

        {/* Card */}
        <div className="bg-[#18181B] p-8 rounded-3xl shadow-2xl border border-[#2A2A2E]">

          {/* ✅ KEEPING YOUR ORIGINAL GOOGLE BUTTON */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            <button
              onClick={() => handleSocialAuth("Google")}
              className="flex items-center justify-center gap-2 py-3 px-4 bg-white border border-zinc-200 rounded-2xl hover:bg-zinc-50 transition-all shadow-sm font-bold text-zinc-700"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" />
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
              </svg>
              Google
            </button>

            <button
              onClick={() => handleSocialAuth("Apple")}
              className="flex items-center justify-center gap-2 py-3 px-4 bg-white border border-zinc-200 rounded-2xl hover:bg-zinc-50 transition-all shadow-sm font-bold text-zinc-700"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.05 20.28c-.98.95-2.05 1.79-3.21 1.79-1.14 0-1.53-.71-2.84-.71-1.33 0-1.78.71-2.84.71-1.16 0-2.13-.76-3.21-1.79C2.73 18.15 1.5 14.53 1.5 11.23c0-3.32 2.15-5.07 4.2-5.07 1.1 0 2.11.41 2.82.41.68 0 1.91-.48 3.22-.48 1.38 0 2.62.53 3.4 1.55-2.85 1.71-2.39 5.56.51 6.84-1.01 2.45-2.48 4.71-3.6 5.8z" />
              </svg>
              Apple
            </button>
          </div>

          {/* Divider */}
          <div className="flex items-center my-6">
            <div className="flex-1 border-t border-gray-700" />
            <span className="px-3 text-gray-500 text-sm">OR</span>
            <div className="flex-1 border-t border-gray-700" />
          </div>

          {/* Alerts */}
          {error && (
            <div className="bg-red-100 text-red-700 px-4 py-2 rounded-xl text-sm mb-4 text-center">
              {error}
            </div>
          )}
          {success && (
            <div className="bg-green-100 text-green-700 px-4 py-2 rounded-xl text-sm mb-4 text-center">
              {success}
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4 flex flex-col">

            <input
              name="fullName"
              placeholder="Full Name"
              onChange={handleChange}
              className="input-dark  border-2 border-[#2A2A2E] p-2 rounded-2xl"
            />

            <input
              name="email"
              placeholder="Email Address"
              onChange={handleChange}
              className="input-dark border-2 border-[#2A2A2E] p-2 rounded-2xl"
            />

            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={handleChange}
              className="input-dark border-2 border-[#2A2A2E] p-2 rounded-2xl"
            />

            <button
              type="submit"
              className="w-full mt-4 bg-[#3B82F6] py-3.5 rounded-xl font-bold hover:scale-105 transition shadow-lg shadow-[#3B82F6]/30"
            >
              Create Account
            </button>
          </form>

          {/* Footer */}
          <p className="text-xs text-gray-500 mt-4 text-center">
            No spam. No unnecessary steps.
          </p>

          <p className="text-sm text-gray-400 mt-6 text-center">
            Already have an account?{" "}
            <Link to="/login" className="text-white font-semibold hover:underline">
              Log in
            </Link>
          </p>

        </div>
      </div>
    </div>
  );
}