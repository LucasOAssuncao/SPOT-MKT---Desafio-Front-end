interface MetricCardProps {
    title: string;
    value: string;
    color?: string;
  }
  
  export function MetricCard({ title, value, color }: MetricCardProps) {
    return (
      <div className="bg-white rounded-xl p-6 shadow hover:shadow-lg transition cursor-pointer">
        <h2 className="text-sm text-gray-500">{title}</h2>
        <p className={`text-3xl font-semibold ${color || 'text-gray-800'}`}>{value}</p>
      </div>
    );
  }
  