"use client";

import Sidebar from "@/components/sidebar";
import Navbar from "@/components/navbar";
import { Card, CardContent } from "@/components/ui/card";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import TransactionsTable from "@/components/transactiontable";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts";

export default function DashboardPage() {
  const router = useRouter();
  const [lastLogin, setLastLogin] = useState<string>("");

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("mockUser");
    const lastLoginTime = localStorage.getItem("lastLogin");
    if (!isLoggedIn) {
      router.push("/login");
    } else {
      const now = new Date().toLocaleString("en-NG", {
        dateStyle: "medium",
        timeStyle: "short",
      });
      setLastLogin(lastLoginTime || now);
      localStorage.setItem("lastLogin", now);
    }
  }, [router]);

  // Chart data
  const issuanceData = [
    { month: "May", Personalized: 20, Instant: 10 },
    { month: "Jun", Personalized: 40, Instant: 20 },
    { month: "Jul", Personalized: 50, Instant: 30 },
    { month: "Aug", Personalized: 60, Instant: 40 },
    { month: "Sep", Personalized: 80, Instant: 50 },
    { month: "Oct", Personalized: 90, Instant: 60 },
    { month: "Nov", Personalized: 70, Instant: 55 },
  ];

  const incomeData = [
    { day: "Mon", income: 50 },
    { day: "Tue", income: 40 },
    { day: "Wed", income: 70 },
    { day: "Thu", income: 60 },
    { day: "Fri", income: 65 },
    { day: "Sat", income: 80 },
    { day: "Sun", income: 90 },
  ];

  const statusData = [
    { name: "Active", value: 1400, color: "#22c55e" },
    { name: "Expired", value: 300, color: "#facc15" },
    { name: "Inactive", value: 500, color: "#60a5fa" },
    { name: "Blocked", value: 150, color: "#f97316" },
    { name: "Lost", value: 100, color: "#ef4444" },
  ];

  return (
    <div className="flex h-screen">
      <Sidebar />

      {/* Main */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <Navbar />

        <main className="p-4 overflow-y-auto bg-gray-50 h-full space-y-6">
          {/* Header */}
          <div className="flex justify-between items-start flex-wrap gap-2">
            <div>
              <h2 className="text-xl font-semibold">Hi Nazeer, what would you like to do today?</h2>
              <p className="text-sm text-gray-500">Last login: {lastLogin}</p>
            </div>
          </div>

          {/* Summary Cards: 4 cards in a row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            <Card>
              <CardContent className="p-4">
                <p className="text-sm text-gray-500">Total Active Cards</p>
                <h2 className="text-2xl font-bold">26,478</h2>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <p className="text-sm text-gray-500">Total Personalized Cards</p>
                <h2 className="text-2xl font-bold">15,703</h2>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <p className="text-sm text-gray-500">Today’s Revenue</p>
                <h2 className="text-2xl font-bold">₦9.3M</h2>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <p className="text-sm text-gray-500">Pending Requests</p>
                <h2 className="text-2xl font-bold text-orange-600">38</h2>
              </CardContent>
            </Card>
          </div>

          {/* Monthly Issuance & Recent Card Requests side by side */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardContent>
                <h3 className="text-sm mb-2 font-semibold">Monthly Issuance</h3>
                <ResponsiveContainer width="100%" height={200}>
                  <BarChart data={issuanceData}>
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="Personalized" fill="#4f46e5" />
                    <Bar dataKey="Instant" fill="#0ea5e9" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <div className="bg-white rounded-md shadow p-4">
              <h3 className="text-sm mb-2 font-semibold">Recent Card Requests</h3>
              <TransactionsTable />
            </div>
          </div>

          {/* This Week’s Income & Card Status Distribution side by side */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardContent>
                <h3 className="text-sm mb-2 font-semibold">This Week’s Income</h3>
                <ResponsiveContainer width="100%" height={200}>
                  <LineChart data={incomeData}>
                    <XAxis dataKey="day" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="income" stroke="#22c55e" strokeWidth={3} />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card>
              <CardContent>
                <h3 className="text-sm mb-2 font-semibold">Card Status Distribution</h3>
                <ResponsiveContainer width="100%" height={250}>
                  <PieChart>
                    <Pie
                      data={statusData}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={80}
                      dataKey="value"
                      nameKey="name"
                      label
                    >
                      {statusData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Legend />
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
}
