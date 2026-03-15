type Props = {
    label: string;
    value: string;
    change: string;
    icon: string;
  };
  
  export default function StatCard({ label, value, change, icon }: Props) {
    return (
      <div className="bg-gray-900 rounded-xl p-5 flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <span className="text-gray-400 text-sm">{label}</span>
          <span className="text-2xl">{icon}</span>
        </div>
        <p className="text-2xl font-bold">{value}</p>
        <p className="text-green-400 text-sm">{change} bu ay</p>
      </div>
    );
  }