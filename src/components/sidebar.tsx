'use client'
import { Home, Users, BarChart, Settings } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";


export default function Sidebar() {
    const pathname = usePathname()
    const navItems = [
        { name: "Dashboard", icon: <Home className="w-5 h-5" />, href: "/dashboard" },
        { name: "Branches", icon:  <Users className="w-5 h-5" />, href: "/branch" },
        { name: "Roles", icon: <Home className="w-5 h-5" />, href: "/roles" },
        { name: "Users", icon: <Home className="w-5 h-5" />, href: "/users" },
        { name: "Card Scheme", icon: <Home className="w-5 h-5" />, href: "/card-scheme" },
        { name: "Card Profile", icon: <Home className="w-5 h-5" />, href: "/card-profile" },
        { name: "Card Request", icon: <Home className="w-5 h-5" />, href: "/card-request" },
        { name: "Stocks", icon: <Home className="w-5 h-5" />, href: "/stocks" },
        { name: "Cards", icon: <Home className="w-5 h-5" />, href: "/cards" },
        { name: "Block/Unblock Card", icon: <Home className="w-5 h-5" />, href: "/block-cards" },
        { name: "Generate/Reissue Pin", icon: <Home className="w-5 h-5" />, href: "/generate-pin" },
        { name: "Complaints: Log Complaints", icon: <Home className="w-5 h-5" />, href: "/log-complaints" },
        { name: "Complaints: Resolve", icon: <Home className="w-5 h-5" />, href: "/resolve-complaints" },
        { name: "Authorization List", icon: <Home className="w-5 h-5" />, href: "/authorization-list" },
        { name: "Authorization Queue", icon: <Home className="w-5 h-5" />, href: "/authorization-queue" },
        { name: "Trail", icon: <Home className="w-5 h-5" />, href: "/trail" },
        { name: "Account", icon: <Home className="w-5 h-5" />, href: "/account" },
        { name: "Logout", icon: <Home className="w-5 h-5" />, href: "/logout" },
    ]
    return (
        <div>
            <aside className="min-h-screen w-[240px] text-white bg-[#002F6C] border-r shadow-sm hidden md:block">
                <div className="p-6">
                    <Image src="/images/logo.png" width={100} height={40} alt="logo" />
                </div>
                <nav className="flex flex-col gap-2 px-4">
                    {navItems.map((item) => (
                        <Link 
                        key={item.href}
                        href={item.href}
                        className={`flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md ${
                        pathname === item.href
                            ? "bg-white text-[#002F6C] font-semibold"
                            : "text-white hover:bg-white hover:text-[#002F6C]"
                        }`}    
                        >
                            {item.icon}
                            {item.name} 
                        </Link>
                    ))}
                </nav>
                <div className="p-6 font-bold text-xl">
                    <Image src="/images/cardinfra-logo.png" width={100} height={40} alt="logo" />
                </div>
            </aside>
        </div>
    )
}