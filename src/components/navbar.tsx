"use client";
import { Search, Bell, User, Home } from "lucide-react";

export default function Navbar() {
  return (
    <header className="w-full h-16 border-b bg-white flex items-center px-4 justify-between">
        <div className="relative w-1/2 max-w-sm">
            <div className="flex items-center">
                <Home className="w-5 h-5" />
                <p className="px-2">Dashboard</p>
            </div>
        </div>
        <div className="flex items-center gap-4">
            <div className="relative">
                <Search className="absolute left-3 top-2.5 w-4 h-4 text-gray-500" />
                <input
                    type="text"
                    placeholder="Search..."
                    className="w-full px-8 py-2 border rounded-full text-sm focus:outline-none"
                />
            </div>
            <Bell className="w-5 h-5 text-gray-600" />
            <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
                <User className="w-4 h-4 text-gray-600" />
            </div>
        </div>
    </header>
  );
}
