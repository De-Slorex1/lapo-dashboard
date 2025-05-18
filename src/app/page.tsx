"use client";

import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import {User, Lock, Eye, EyeOff} from 'lucide-react'

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();


  const togglePassword = () => {
    setShowPassword((prev) => !prev);
  };


  return (
    <main className="relative w-full h-screen overflow-hidden">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundColor: "#ffffff", 
          backgroundImage: "url(/images/noise.png)",
          backgroundRepeat: "repeat",
          backgroundSize: "auto",
          opacity: 0.07, 
        }}
      />

      <div className="relative z-10 flex justify-between h-full">
        <div className="w-[50%] py-10 px-20">
          <div className="w-full">
            <Image src="/images/logo.png" width={100} height={40} alt="logo" />
          </div>

          <div className="pt-16">
            <h1 className="text-xl text-left font-normal">Hi, Welcome Back</h1>
            <p className="font-light text-sm py-2">
              Please sign in using your credentials
            </p>
          </div>

          <form onSubmit={(e) => {
          e.preventDefault();
          if (email === "nazaar@gmail.com" && password === "123456") {
          localStorage.setItem("mockUser", "true");
          router.push("/dashboard");
          } else {
          setError("Invalid email or password");
          }
          }}>

            <div className="my-5 relative">
              <label className="block font-medium mb-1 text-sm">Username</label>
              <User className="absolute left-3 top-10.5 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="email"
                className="w-full px-4 py-2 pl-10 border rounded-md text-sm"
                placeholder="Enter your username"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="mb-2 relative">
              <label className="block font-medium mb-1 text-sm">Password</label>
              <Lock className="absolute left-3 top-10.5 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type={showPassword ? "text" : "password"}
                className="w-full px-4 py-2 pl-10 pr-10 border rounded-md text-sm"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
              <button
                type="button"
                onClick={togglePassword}
                className="absolute right-3 top-10.5 -translate-y-1/2 text-gray-500 hover:text-gray-800"
              >
                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>

            <p className="font-medium text-xs mb-6">Forgot Password?</p>

            <div className="flex items-center mb-6">
              <input type="checkbox" className="mr-2" />
              <label className="text-sm">Remember me</label>
            </div>

            <button
              type="submit"
              className="w-full bg-[#014DAF] text-white py-2 rounded-md text-sm font-medium"
            >
              Login
            </button>
          </form>
          <p className="fixed bottom-0 left-[6%] w-full text-sm text-gray-500 text-left py-4 bg-white">
            &copy; {new Date().getFullYear()} Mercator Technologies Ltd. All rights reserved.
          </p>
        </div>
        <div className="w-[40%] hidden md:flex flex-col items-center justify-center text-center mx-16 my-5 border-l border-blue-100 relative"
         style={{
            backgroundImage: "url(/images/logincard.png)",
            backgroundSize: "cover",
            backgroundPosition: "top",
          }}
        >
          <h2 className="text-2xl font-semibold text-left mb-4">The simplest way to manage<br /> your cards</h2>
          <p className="text-sm text-gray-600 mb-6">
            Enter your credentials to access your account!
          </p>
          <Image
            src="/images/dashboard-preview.png" // replace with your exported screenshot
            alt="Dashboard Preview"
            width={300}
            height={200}
            className="rounded shadow"
          />
          <p className="mt-6 text-xs text-gray-400">Powered by CardInfra</p>
        </div>
      </div>
    </main>
  );
}
