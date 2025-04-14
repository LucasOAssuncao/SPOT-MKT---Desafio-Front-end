'use client';

import DashboardLayout from "@/components/dashboard/Layout";
import { DashboardHeader } from "@/components/dashboard/DashboardHeader";
import { MetricCard } from "@/components/dashboard/MetricCard";
import { CardSection } from "@/components/dashboard/CardSection";

export default function DashboardPage() {
  return (
    <DashboardLayout>
      <DashboardHeader userName="SpotMKT" />

      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <MetricCard title="Campanhas Ativas" value="5" color="text-blue-600" />
        <MetricCard title="Alcance Total (Mês)" value="127.430" color="text-green-600" />
        <MetricCard title="Cliques em Anúncios" value="3.490" color="text-purple-600" />
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <CardSection title="📊 Insights Recentes">
          <ul className="space-y-2 text-sm text-gray-700 list-disc list-inside cursor-pointer">
            <li>Campanha &quot;Outubro Rosa&quot; ↑ 23% em engajamento</li>
            <li>Melhor horário: 19h às 21h</li>
            <li>Público engajado: Mulheres 25-34 anos</li>
          </ul>
        </CardSection>
        <CardSection title="📅 Calendário de Ações">
          <ul className="space-y-2 text-sm text-gray-700 list-disc list-inside cursor-pointer">
            <li>14/04 - Início campanha &quot;Dia das Mães&quot;</li>
            <li>18/04 - Reunião de alinhamento</li>
            <li>25/04 - Relatório de performance</li>
          </ul>
        </CardSection>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <CardSection title="📥 Solicitações de Demandas">
          <ul className="space-y-2 text-sm text-gray-700 list-disc list-inside cursor-pointer">
            <li>Novo banner para campanha de maio</li>
            <li>Agendamento de sessão de fotos</li>
            <li>Alterações no Google Ads</li>
          </ul>
        </CardSection>
        <CardSection title="📚 Histórico de Ações">
          <ul className="space-y-2 text-sm text-gray-700 list-disc list-inside cursor-pointer">
            <li>✅ Campanha de Páscoa finalizada</li>
            <li>📊 Relatório de Março enviado</li>
            <li>🛠️ Correções no site institucional</li>
          </ul>
        </CardSection>
      </section>

      <CardSection title="⚙️ Configurações da Conta">
        <p className="text-sm text-gray-600">
          Gerencie seus dados pessoais, permissões e notificações da conta.
        </p>
      </CardSection>
    </DashboardLayout>
  );
}
