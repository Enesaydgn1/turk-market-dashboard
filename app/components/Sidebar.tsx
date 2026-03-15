"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "Dashboard", icon: "📊", href: "/" },
  { label: "Products", icon: "📦", href: "/products" },
  { label: "Orders", icon: "🛒", href: "/orders" },
  { label: "Reports", icon: "📈", href: "/reports" },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 bg-gray-900 p-6 flex flex-col gap-6">
      <h1 className="text-xl font-bold text-blue-400">TürkMarket</h1>
      <nav className="flex flex-col gap-2">
        {navItems.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              pathname === item.href
                ? "bg-blue-600 text-white"
                : "text-gray-400 hover:bg-gray-800"
            }`}
          >
            {item.icon} {item.label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}