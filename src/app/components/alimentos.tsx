import React from "react";

interface alimentos { id: number; nome: string; beneficios: string; sugestão_de_receita: string; categoria: string; }

export default async function AlimentosPage() { await new Promise((resolve) => setTimeout(resolve, 1000));

let alimentos: alimentos[] = [];

try { const response = await fetch("https://api-conectapsique.onrender.com/alimentos"); if (!response.ok) throw new Error("Falha ao consumir a API"); alimentos = await response.json(); } catch (error) { console.log("Erro no fetch:", error); }

return ( <section
id="alimentos"
className="flex flex-col items-center justify-center min-h-screen bg-transparent p-4 overflow-y-auto"
> <h1 className="text-2xl font-bold mb-6 text-purple-900">Alimentos</h1>

{alimentos.map((alimento) => (
    <div
      key={alimento.id}
      className="bg-purple-50 hover:bg-purple-100 transition rounded-lg shadow-md p-4 mb-4 w-full max-w-md text-black"
    >
      <p><strong>Nome:</strong> {alimento.nome}</p>
      <p><strong>Benefícios:</strong> {alimento.beneficios}</p>
      <p><strong>Sugestão de Receita:</strong> {alimento.sugestão_de_receita}</p>
      <p><strong>Categoria:</strong> {alimento.categoria}</p>
    </div>
  ))}
</section>

); }
