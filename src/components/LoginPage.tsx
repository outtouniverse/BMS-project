import React, { useState } from 'react';
import { Eye, EyeOff, Mail, Lock, ArrowRight, Shield } from 'lucide-react';

interface LoginPageProps {
  onLogin: () => void;
}

export default function LoginPage({ onLogin }: LoginPageProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      onLogin();
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gray-50 relative overflow-hidden">
      {/* Background geometric elements */}
      <div className="absolute inset-0">
        {/* Large circles */}
        <div className="absolute top-20 right-20 w-64 h-64 border-2 border-gray-200 rounded-full opacity-30"></div>
        <div className="absolute bottom-32 left-16 w-48 h-48 border-2 border-gray-300 rounded-full opacity-20"></div>
        
        {/* Small geometric shapes */}
        <div className="absolute top-40 left-1/4 w-4 h-4 bg-black rounded-full"></div>
        <div className="absolute top-60 right-1/3 w-3 h-3 bg-gray-400 rounded-full"></div>
        <div className="absolute bottom-40 right-1/4 w-6 h-6 bg-gray-600 rotate-45"></div>
        <div className="absolute bottom-60 left-1/3 w-2 h-2 bg-black rounded-full"></div>
        
        {/* Connecting lines */}
        <div className="absolute top-1/3 left-1/4 w-32 h-px bg-gray-300 rotate-45"></div>
        <div className="absolute bottom-1/3 right-1/4 w-24 h-px bg-gray-400 -rotate-12"></div>
      </div>

      <div className="flex min-h-screen relative z-10">
        {/* Left side - Login Form */}
        <div className="flex-1 flex items-center justify-center p-8 lg:p-16">
          <div className="w-full max-w-md">
            {/* Header */}
            <div className="mb-12">
              <div className="flex items-center mb-8">
                <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center mr-4">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-black">GST Portal</h1>
                  <p className="text-gray-600 text-sm">Customer Interface</p>
                </div>
              </div>
              
              <h2 className="text-3xl font-bold text-black mb-2">Welcome back</h2>
              <p className="text-gray-600">Sign in to access your GST dashboard</p>
            </div>

            {/* Login Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Email Field */}
              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email Address
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Mail className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 bg-white border-2 border-gray-200 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-0 focus:border-black transition-all duration-200"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              {/* Password Field */}
              <div className="space-y-2">
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Lock className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? 'text' : 'password'}
                    autoComplete="current-password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full pl-12 pr-12 py-4 bg-white border-2 border-gray-200 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-0 focus:border-black transition-all duration-200"
                    placeholder="Enter your password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-gray-600 transition-colors duration-200"
                  >
                    {showPassword ? (
                      <EyeOff className="h-5 w-5" />
                    ) : (
                      <Eye className="h-5 w-5" />
                    )}
                  </button>
                </div>
              </div>

              {/* Remember me and Forgot password */}
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 text-black focus:ring-black border-gray-300 rounded"
                  />
                  <label htmlFor="remember-me" className="ml-3 text-sm text-gray-600">
                    Remember me
                  </label>
                </div>
                <button
                  type="button"
                  className="text-sm text-black hover:text-gray-700 transition-colors duration-200 font-medium"
                >
                  Forgot password?
                </button>
              </div>

              {/* Login Button */}
              <button
                type="submit"
                disabled={isLoading}
                className="group w-full flex items-center justify-center px-6 py-4 bg-black text-white font-medium rounded-xl hover:bg-gray-800 focus:outline-none focus:ring-4 focus:ring-gray-300 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <div className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                ) : (
                  <>
                    Sign In
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
                  </>
                )}
              </button>
            </form>

            {/* Divider */}
            <div className="mt-8 mb-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-200" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-4 bg-gray-50 text-gray-500">New to GST Portal?</span>
                </div>
              </div>
            </div>

            {/* Sign up Button */}
            <button
              type="button"
              className="w-full flex items-center justify-center px-6 py-4 border-2 border-gray-200 text-gray-700 font-medium rounded-xl hover:border-gray-300 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 transition-all duration-200"
            >
              Create Account
            </button>
          </div>
        </div>

        {/* Right side - Feature showcase */}
        <div className="hidden lg:flex flex-1 bg-white items-center justify-center p-16 relative">
          <div className="max-w-lg">
            {/* Main content */}
            <div className="mb-12">
              <h3 className="text-4xl font-bold text-black mb-6 leading-tight">
                Navigating the digital landscape for success
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Our comprehensive GST management platform helps businesses streamline their tax compliance and reporting processes with ease.
              </p>
              <button className="bg-black text-white px-8 py-4 rounded-xl font-medium hover:bg-gray-800 transition-colors duration-200">
                Learn More
              </button>
            </div>

            {/* Feature cards */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200">
                <div className="w-8 h-8 bg-black rounded-lg mb-4"></div>
                <h4 className="font-semibold text-black mb-2">Automated Filing</h4>
                <p className="text-gray-600 text-sm">Streamline your GST returns with our automated filing system.</p>
              </div>
              
              <div className="bg-black p-6 rounded-2xl text-white">
                <div className="w-8 h-8 bg-white rounded-lg mb-4"></div>
                <h4 className="font-semibold mb-2">Real-time Analytics</h4>
                <p className="text-gray-300 text-sm">Get insights into your tax obligations and compliance status.</p>
              </div>
              
              <div className="bg-gray-100 p-6 rounded-2xl border border-gray-200">
                <div className="w-8 h-8 bg-gray-600 rounded-lg mb-4"></div>
                <h4 className="font-semibold text-black mb-2">Secure Storage</h4>
                <p className="text-gray-600 text-sm">Your data is protected with enterprise-grade security.</p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200 relative">
                <div className="absolute top-4 right-4 w-3 h-3 bg-green-500 rounded-full"></div>
                <div className="w-8 h-8 bg-green-500 rounded-lg mb-4"></div>
                <h4 className="font-semibold text-black mb-2">24/7 Support</h4>
                <p className="text-gray-600 text-sm">Expert assistance whenever you need it.</p>
              </div>
            </div>

            {/* Trust indicators */}
            <div className="flex items-center space-x-6 text-gray-400 text-sm">
              <div className="flex items-center">
                <div className="w-4 h-4 mr-2 bg-green-500 rounded-full"></div>
                <span>256-bit SSL</span>
              </div>
              <div className="flex items-center">
                <div className="w-4 h-4 mr-2 bg-green-500 rounded-full"></div>
                <span>GDPR Compliant</span>
              </div>
              <div className="flex items-center">
                <div className="w-4 h-4 mr-2 bg-green-500 rounded-full"></div>
                <span>ISO 27001</span>
              </div>
            </div>
          </div>

          {/* Decorative elements */}
          <div className="absolute top-20 right-20 w-32 h-32 border border-gray-200 rounded-full opacity-20"></div>
          <div className="absolute bottom-32 right-32 w-6 h-6 bg-gray-300 rotate-45"></div>
          <div className="absolute top-1/2 right-10 w-2 h-2 bg-black rounded-full"></div>
        </div>
      </div>
    </div>
  );
}