"use client";

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { ay: "Ekim", satis: 42000 },
  { ay: "Kasım", satis: 68000 },
  { ay: "Aralık", satis: 91000 },
  { ay: "Ocak", satis: 74000 },
  { ay: "Şubat", satis: 85000 },
  { ay: "Mart", satis: 124500 },
];

export default function SalesChart() {
  return (
    <div className="bg-gray-900 rounded-xl p-6">
      <h3 className="text-lg font-semibold mb-4">Aylık Satış Trendi</h3>
      <ResponsiveContainer width="100%" height={300}>
        <AreaChart data={data}>
          <defs>
            <linearGradient id="salesGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3} />
              <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
          <XAxis dataKey="ay" stroke="#9ca3af" />
          <YAxis stroke="#9ca3af" tickFormatter={(v) => `₺${v / 1000}k`} />
          <Tooltip
            contentStyle={{ backgroundColor: "#111827", border: "none" }}
            formatter={(v: number) => [`₺${v.toLocaleString()}`, "Satış"]}
          />
          <Area
            type="monotone"
            dataKey="satis"
            stroke="#3b82f6"
            fill="url(#salesGradient)"
            strokeWidth={2}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}