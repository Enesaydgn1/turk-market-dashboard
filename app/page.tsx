import StatCard from "./components/StatCard";
import Sidebar from "./components/Sidebar";
import SalesChart from "./components/SalesChart";
import CategoryChart from "./components/CategoryChart";

const stats = [
  { label: "Toplam Satış", value: "₺124,500", change: "+12%", icon: "💰" },
  { label: "Siparişler", value: "1,243", change: "+8%", icon: "🛒" },
  { label: "Ürünler", value: "342", change: "+3%", icon: "📦" },
  { label: "Müşteriler", value: "891", change: "+21%", icon: "👥" },
];

export default function Home() {
  return (
    <div className="flex min-h-screen bg-gray-950 text-white">
      <Sidebar />
      <main className="flex-1 p-8">
        <h2 className="text-2xl font-bold mb-6">Genel Bakış</h2>

        <div className="grid grid-cols-2 xl:grid-cols-4 gap-4 mb-8">
          {stats.map((stat) => (
            <StatCard key={stat.label} {...stat} />
          ))}
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
          <SalesChart />
          <CategoryChart />
        </div>

      </main>
    </div>
  );
}