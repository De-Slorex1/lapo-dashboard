"use client"

import Sidebar from "@/components/sidebar";
import Navbar from "@/components/navbar";
import { Card, CardContent } from "@/components/ui/card";
import { useRouter } from "next/navigation";
import {useEffect} from 'react'
import TransactionsTable from "@/components/transactiontable"; // We'll build this if not yet created

export default function DashboardPage() {

    const router = useRouter();

    useEffect(() => {
        const isLoggedIn = localStorage.getItem("mockUser");
        if (!isLoggedIn) {
        router.push("/login");
        }
    }, [router]);

  return (
    <div className="flex h-screen">
      <Sidebar />

      {/* Main */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Navbar */}
        <Navbar />

        {/* Dashboard*/}
        <main className="p-4 overflow-y-auto bg-gray-50 h-full">
            <div>
                <div>
                    <p>Hi Nazeer, what would you like to do today?</p>
                    <p>Last Login: </p>
                </div>
            </div>
          {/* Cards Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-6">
            <Card>
              <CardContent className="p-4">
                <p className="text-sm text-gray-500">Users</p>
                <h2 className="text-2xl font-bold">1,245</h2>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <p className="text-sm text-gray-500">Revenue</p>
                <h2 className="text-2xl font-bold">₦4.2M</h2>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <p className="text-sm text-gray-500">Transactions</p>
                <h2 className="text-2xl font-bold">312</h2>
              </CardContent>
            </Card>
          </div>

          {/* Table Section */}
          <TransactionsTable />

          {/* Chart Section Placeholder */}
          <div className="bg-white rounded-md shadow p-4 mt-6 text-center text-gray-400">
        
          </div>
        </main>
      </div>
    </div>
  );
}
