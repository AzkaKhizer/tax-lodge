"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const LoginPage = () => {
  return (
    <div className="min-h-screen bg-[#f2f2f2] flex items-center justify-center px-4 py-8">
      <div className="bg-white shadow-xl rounded-2xl w-full max-w-5xl grid md:grid-cols-2 overflow-hidden">
        {/* Left Side - Image or welcome message */}
        <div className="hidden md:flex items-center justify-center bg-[#FE5722] p-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-white text-center"
          >
            <h2 className="text-3xl font-bold mb-2">Welcome Back!</h2>
            <p className="text-lg">Login to manage your finances with ease.</p>
            <Image
              src="/tlo.png"
              alt="Tax Lodge Logo"
              width={300}
              height={200}
              className="mt-6 mx-auto"
            />
          </motion.div>
        </div>

        {/* Right Side - Login Form */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col justify-center p-8"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-[#FE5722] mb-6 text-center">
            Login to Your Account
          </h2>

          <form className="space-y-5">
            <div>
              <label className="block text-gray-700 font-medium mb-1">Email</label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FE5722]"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-1">Password</label>
              <input
                type="password"
                placeholder="••••••••"
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FE5722]"
              />
            </div>

            <div className="text-right text-sm">
              <a href="#" className="text-[#FE5722] hover:underline">
                Forgot Password?
              </a>
            </div>

            <button
              type="submit"
              className="w-full bg-[#FE5722] hover:bg-orange-400 text-white font-semibold py-3 rounded-lg transition duration-300"
            >
              Login
            </button>
          </form>

          <p className="text-sm text-center mt-6">
            Don’t have an account?{" "}
            <a href="/signup" className="text-[#FE5722] hover:underline">
              Sign up
            </a>
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default LoginPage;
