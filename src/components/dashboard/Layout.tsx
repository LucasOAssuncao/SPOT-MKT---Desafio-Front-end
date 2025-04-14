export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    return (
      <div className="min-h-screen flex flex-col bg-gray-100">
        <main className="flex-grow p-8">{children}</main>
        <footer className="bg-white border-t p-4 text-sm text-gray-500 text-center">
          © {new Date().getFullYear()} SpotMKT. Todos os direitos reservados.
        </footer>
      </div>
    );
  }