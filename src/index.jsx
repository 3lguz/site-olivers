
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Users, ClipboardList, Megaphone, Calendar } from "lucide-react";

export default function PainelFuncionarios() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <header className="bg-blue-600 text-white py-4 px-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Painel Interno - Supermercado Oliveira</h1>
      </header>

      <section className="py-10 px-6 grid md:grid-cols-3 gap-6">
        <Card className="shadow-md">
          <CardContent className="p-4">
            <h2 className="text-lg font-semibold flex items-center gap-2">
              <ClipboardList className="h-5 w-5 text-blue-600" /> Escala de Trabalho
            </h2>
            <p className="text-sm text-gray-600 mt-2">Consulte aqui sua escala semanal de turnos.</p>
            <Button variant="default" className="mt-4 w-full">Ver Escala</Button>
          </CardContent>
        </Card>

        <Card className="shadow-md">
          <CardContent className="p-4">
            <h2 className="text-lg font-semibold flex items-center gap-2">
              <Megaphone className="h-5 w-5 text-blue-600" /> Comunicados
            </h2>
            <p className="text-sm text-gray-600 mt-2">Fique por dentro das últimas atualizações internas.</p>
            <Button variant="default" className="mt-4 w-full">Ver Comunicados</Button>
          </CardContent>
        </Card>

        <Card className="shadow-md">
          <CardContent className="p-4">
            <h2 className="text-lg font-semibold flex items-center gap-2">
              <FileText className="h-5 w-5 text-blue-600" /> Relatórios de Vendas
            </h2>
            <p className="text-sm text-gray-600 mt-2">Acompanhe o desempenho da loja diariamente.</p>
            <Button variant="default" className="mt-4 w-full">Acessar Relatórios</Button>
          </CardContent>
        </Card>

        <Card className="shadow-md">
          <CardContent className="p-4">
            <h2 className="text-lg font-semibold flex items-center gap-2">
              <Users className="h-5 w-5 text-blue-600" /> Solicitações de Folga
            </h2>
            <p className="text-sm text-gray-600 mt-2">Envie pedidos de folga, férias e sugestões.</p>
            <Button variant="default" className="mt-4 w-full">Formulário</Button>
          </CardContent>
        </Card>

        <Card className="shadow-md">
          <CardContent className="p-4">
            <h2 className="text-lg font-semibold flex items-center gap-2">
              <Calendar className="h-5 w-5 text-blue-600" /> Links Úteis
            </h2>
            <p className="text-sm text-gray-600 mt-2">Acesse planilhas, grupos e documentos internos.</p>
            <Button variant="default" className="mt-4 w-full">Ver Links</Button>
          </CardContent>
        </Card>
      </section>

      <footer className="bg-blue-600 text-white text-center py-4">
        &copy; {new Date().getFullYear()} Supermercado Oliveira - Painel Interno
      </footer>
    </div>
  );
}
