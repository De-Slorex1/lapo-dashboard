"use client";

import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { User, Lock, Eye, EyeOff } from "lucide-react";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const togglePassword = () => {
    setShowPassword((prev) => !prev);
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (email === "nazaar@gmail.com" && password === "123456") {
      localStorage.setItem("mockUser", "true");
      router.push("/dashboard");
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <main className="relative w-full h-screen overflow-hidden bg-white">
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
      <div className="relative z-10 flex flex-col md:flex-row h-full">
        {/* Form Section */}
        <div className="w-full md:w-1/2 py-10 px-6 sm:px-10 lg:px-20 flex flex-col justify-between">
          <div>
            <div className="w-full">
              <Image src="/images/logo.png" width={100} height={40} alt="logo" />
            </div>

            <div className="pt-10 sm:pt-16">
              <h1 className="text-xl sm:text-2xl font-semibold">Hi, Welcome Back</h1>
              <p className="text-sm text-gray-600 mt-2">Please sign in using your credentials</p>
            </div>

            <form onSubmit={handleLogin} className="mt-8">
              <div className="mb-5 relative">
                <label className="block font-medium mb-1 text-sm">Username</label>
                <User className="absolute left-3 top-10 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="email"
                  className="w-full px-4 py-2 pl-10 border rounded-md text-sm"
                  placeholder="Enter your username"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="mb-4 relative">
                <label className="block font-medium mb-1 text-sm">Password</label>
                <Lock className="absolute left-3 top-10 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type={showPassword ? "text" : "password"}
                  className="w-full px-4 py-2 pl-10 pr-10 border rounded-md text-sm"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button
                  type="button"
                  onClick={togglePassword}
                  className="absolute right-3 top-10 -translate-y-1/2 text-gray-500 hover:text-gray-800"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
                {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
              </div>

              <p className="text-xs font-medium text-gray-500 mb-4">Forgot Password?</p>

              <div className="flex items-center mb-6">
                <input type="checkbox" className="mr-2" />
                <label className="text-sm">Remember me</label>
              </div>

              <button
                type="submit"
                className="w-full bg-[#014DAF] text-white py-2 rounded-md text-sm font-medium hover:bg-[#013f90]"
              >
                Login
              </button>
            </form>
          </div>

          <p className="mt-10 text-sm text-gray-500 text-center md:text-left">
            &copy; {new Date().getFullYear()} Mercator Technologies Ltd. All rights reserved.
          </p>
        </div>

        {/* Preview Section */}
        <div
          className="w-full md:w-[50%] hidden md:flex flex-col items-center justify-center text-center px-6 lg:px-16 border-l border-blue-100"
          style={{
            backgroundImage: "url(/images/logincard.png)",
            backgroundSize: "cover",
            backgroundPosition: "top",
          }}
        >
          <h2 className="text-2xl font-semibold mb-4 text-white drop-shadow">
            The simplest way to manage<br /> your cards
          </h2>
          <p className="text-sm text-white/80 mb-6 drop-shadow">
            Enter your credentials to access your account!
          </p>
          <Image
            src="/images/dashboard-preview.png"
            alt="Dashboard Preview"
            width={300}
            height={200}
            className="rounded shadow"
          />
          <p className="mt-6 text-xs text-white/60">Powered by CardInfra</p>
        </div>
      </div>
    </main>
  );
}
