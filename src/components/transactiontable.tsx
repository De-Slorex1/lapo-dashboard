"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const transactions = [
  {
    id: "TXN001",
    name: "John Doe",
    amount: "₦20,000",
    date: "May 15, 2025",
    status: "Success",
  },
  {
    id: "TXN002",
    name: "Jane Smith",
    amount: "₦18,500",
    date: "May 16, 2025",
    status: "Pending",
  },
  {
    id: "TXN003",
    name: "Samuel Joseph",
    amount: "₦45,000",
    date: "May 17, 2025",
    status: "Failed",
  },
];

export default function TransactionsTable() {
  return (
    <div className="bg-white rounded-md shadow p-4 mt-6">
      <h3 className="text-lg font-semibold mb-4">Recent Transactions</h3>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>ID</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Amount</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {transactions.map((txn) => (
            <TableRow key={txn.id}>
              <TableCell>{txn.id}</TableCell>
              <TableCell>{txn.name}</TableCell>
              <TableCell>{txn.amount}</TableCell>
              <TableCell>{txn.date}</TableCell>
              <TableCell>
                <span
                  className={`text-sm font-medium ${
                    txn.status === "Success"
                      ? "text-green-600"
                      : txn.status === "Pending"
                      ? "text-yellow-600"
                      : "text-red-600"
                  }`}
                >
                  {txn.status}
                </span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
