import React from "react";
import { Card, CardContent } from "./components/ui/card";
import { Button } from "./components/ui/button";
import { FileText, Users, ClipboardList, Megaphone, Calendar } from "lucide-react";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <header className="bg-blue-600 text-white py-4 px-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Painel Interno - Supermercado Oliveira</h1>
      </header>

      <section className="py-10 px-6 grid md:grid-cols-3 gap-6">
        <Card title="Escala de Trabalho" icon={<ClipboardList />} />
        <Card title="Comunicados" icon={<Megaphone />} />
        <Card title="Relatórios de Vendas" icon={<FileText />} />
        <Card title="Solicitações de Folga" icon={<Users />} />
        <Card title="Links Úteis" icon={<Calendar />} />
      </section>

      <footer className="bg-blue-600 text-white text-center py-4">
        &copy; {new Date().getFullYear()} Supermercado Oliveira - Painel Interno
      </footer>
    </div>
  );
}
