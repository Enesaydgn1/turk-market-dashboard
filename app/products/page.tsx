"use client";

import { useState } from "react";
import Sidebar from "@/app/components/Sidebar";

const products = [
  { id: 1, name: "iPhone 15 Pro", category: "Electronics", price: 62999, stock: 23, status: "Active" },
  { id: 2, name: "Nike Air Max", category: "Clothing", price: 4599, stock: 0, status: "Out of Stock" },
  { id: 3, name: "Dyson V15", category: "Home & Living", price: 18999, stock: 7, status: "Active" },
  { id: 4, name: "Samsung 4K TV", category: "Electronics", price: 34999, stock: 12, status: "Active" },
  { id: 5, name: "Levi's 501", category: "Clothing", price: 2199, stock: 45, status: "Active" },
  { id: 6, name: "Nescafe Gold", category: "Food", price: 389, stock: 0, status: "Out of Stock" },
  { id: 7, name: "MacBook Air M3", category: "Electronics", price: 89999, stock: 5, status: "Active" },
  { id: 8, name: "Adidas Hoodie", category: "Clothing", price: 1899, stock: 30, status: "Active" },
];

const categories = ["All", "Electronics", "Clothing", "Home & Living", "Food"];

export default function ProductsPage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const filtered = products.filter((p) => {
    const matchSearch = p.name.toLowerCase().includes(search.toLowerCase());
    const matchCategory = category === "All" || p.category === category;
    return matchSearch && matchCategory;
  });

  return (
    <div className="flex min-h-screen bg-gray-950 text-white">
      <Sidebar />
      <main className="flex-1 p-8">
        <h2 className="text-2xl font-bold mb-6">Products</h2>

        {/* Filters */}
        <div className="flex gap-4 mb-6">
          <input
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="bg-gray-900 border border-gray-700 rounded-lg px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 w-64"
          />
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="bg-gray-900 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-blue-500"
          >
            {categories.map((c) => (
              <option key={c}>{c}</option>
            ))}
          </select>
        </div>

        {/* Table */}
        <div className="bg-gray-900 rounded-xl overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-800 text-gray-400 text-sm">
                <th className="text-left px-6 py-4">Product</th>
                <th className="text-left px-6 py-4">Category</th>
                <th className="text-left px-6 py-4">Price</th>
                <th className="text-left px-6 py-4">Stock</th>
                <th className="text-left px-6 py-4">Status</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((product) => (
                <tr key={product.id} className="border-b border-gray-800 hover:bg-gray-800 transition-colors">
                  <td className="px-6 py-4 font-medium">{product.name}</td>
                  <td className="px-6 py-4 text-gray-400">{product.category}</td>
                  <td className="px-6 py-4">₺{product.price.toLocaleString()}</td>
                  <td className="px-6 py-4">{product.stock}</td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      product.status === "Active"
                        ? "bg-green-900 text-green-400"
                        : "bg-red-900 text-red-400"
                    }`}>
                      {product.status}
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