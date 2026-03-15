"use client";

import { useState } from "react";
import Sidebar from "@/app/components/Sidebar";

const orders = [
  { id: "#ORD-001", customer: "Ahmet Yılmaz", product: "iPhone 15 Pro", date: "15 Mar 2025", total: 62999, status: "Delivered" },
  { id: "#ORD-002", customer: "Elif Kaya", product: "Nike Air Max", date: "14 Mar 2025", total: 4599, status: "Pending" },
  { id: "#ORD-003", customer: "Mehmet Demir", product: "Dyson V15", date: "13 Mar 2025", total: 18999, status: "Shipped" },
  { id: "#ORD-004", customer: "Zeynep Çelik", product: "MacBook Air M3", date: "12 Mar 2025", total: 89999, status: "Delivered" },
  { id: "#ORD-005", customer: "Can Öztürk", product: "Samsung 4K TV", date: "11 Mar 2025", total: 34999, status: "Cancelled" },
  { id: "#ORD-006", customer: "Selin Arslan", product: "Levi's 501", date: "10 Mar 2025", total: 2199, status: "Pending" },
  { id: "#ORD-007", customer: "Burak Şahin", product: "Adidas Hoodie", date: "09 Mar 2025", total: 1899, status: "Shipped" },
  { id: "#ORD-008", customer: "Ayşe Koç", product: "Nescafe Gold", date: "08 Mar 2025", total: 389, status: "Delivered" },
];

const statusStyles: Record<string, string> = {
  Delivered: "bg-green-900 text-green-400",
  Pending: "bg-yellow-900 text-yellow-400",
  Shipped: "bg-blue-900 text-blue-400",
  Cancelled: "bg-red-900 text-red-400",
};

const allStatuses = ["All", "Delivered", "Pending", "Shipped", "Cancelled"];

export default function OrdersPage() {
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("All");

  const filtered = orders.filter((o) => {
    const matchSearch =
      o.customer.toLowerCase().includes(search.toLowerCase()) ||
      o.id.toLowerCase().includes(search.toLowerCase());
    const matchStatus = status === "All" || o.status === status;
    return matchSearch && matchStatus;
  });

  return (
    <div className="flex min-h-screen bg-gray-950 text-white">
      <Sidebar />
      <main className="flex-1 p-8">
        <h2 className="text-2xl font-bold mb-6">Orders</h2>

        {/* Filters */}
        <div className="flex gap-4 mb-6">
          <input
            type="text"
            placeholder="Search by customer or order ID..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="bg-gray-900 border border-gray-700 rounded-lg px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 w-72"
          />
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="bg-gray-900 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-blue-500"
          >
            {allStatuses.map((s) => (
              <option key={s}>{s}</option>
            ))}
          </select>
        </div>

        {/* Table */}
        <div className="bg-gray-900 rounded-xl overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-800 text-gray-400 text-sm">
                <th className="text-left px-6 py-4">Order ID</th>
                <th className="text-left px-6 py-4">Customer</th>
                <th className="text-left px-6 py-4">Product</th>
                <th className="text-left px-6 py-4">Date</th>
                <th className="text-left px-6 py-4">Total</th>
                <th className="text-left px-6 py-4">Status</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((order) => (
                <tr
                  key={order.id}
                  className="border-b border-gray-800 hover:bg-gray-800 transition-colors"
                >
                  <td className="px-6 py-4 font-mono text-blue-400">{order.id}</td>
                  <td className="px-6 py-4 font-medium">{order.customer}</td>
                  <td className="px-6 py-4 text-gray-400">{order.product}</td>
                  <td className="px-6 py-4 text-gray-400">{order.date}</td>
                  <td className="px-6 py-4">₺{order.total.toLocaleString()}</td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${statusStyles[order.status]}`}>
                      {order.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </main>
    </div>
  );
}