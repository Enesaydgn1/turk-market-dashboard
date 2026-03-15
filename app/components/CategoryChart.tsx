"use client";

import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

const data = [
  { name: "Elektronik", value: 38 },
  { name: "Giyim", value: 27 },
  { name: "Ev & Yaşam", value: 18 },
  { name: "Kozmetik", value: 17 },
];

const COLORS = ["#3b82f6", "#8b5cf6", "#10b981", "#f59e0b"];

export default function CategoryChart() {
  return (
    <div className="bg-gray-900 rounded-xl p-6">
      <h3 className="text-lg font-semibold mb-4">Kategori Dağılımı</h3>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={70}
            outerRadius={110}
            paddingAngle={4}
            dataKey="value"
          >
            {data.map((_, index) => (
              <Cell key={index} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip
            contentStyle={{ backgroundColor: "#111827", border: "none" }}
            formatter={(v) => [`%${v}`, "Oran"]}
          />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}