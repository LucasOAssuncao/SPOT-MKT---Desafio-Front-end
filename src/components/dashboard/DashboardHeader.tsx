'use client';

interface DashboardHeaderProps {
  userName: string;
}

export function DashboardHeader({ userName }: DashboardHeaderProps) {
  return (
    <header className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-800">Painel do Cliente</h1>
        <p className="mt-1 text-sm text-gray-500">
          Bem-vindo de volta, <strong className="text-blue-600 cursor-pointer">{userName}</strong> 👋
        </p>
      </div>
      <div className="flex items-center gap-4 mt-4 md:mt-0">
        <button className="p-2 bg-white rounded-full shadow hover:shadow-md transition cursor-pointer">
          🔔
        </button>
        <button className="p-2 bg-white rounded-full shadow hover:shadow-md transition cursor-pointer">
          👤
        </button>
      </div>
    </header>
  );
}