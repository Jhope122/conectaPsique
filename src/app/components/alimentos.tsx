import React from "react";

interface Alimento {
  id: number;
  nome: string;
  beneficios: string;
  sugestão_de_receita: string;
  categoria: string;
}

export default async function AlimentosPage() {
  let alimentos: Alimento[] = [];

  try {
    const response = await fetch("https://api-conectapsique.onrender.com/alimentos");
    if (!response.ok) throw new Error("Erro na API");
    alimentos = await response.json();
  } catch (error) {
    console.error("Erro ao buscar dados:")
    return (
      <section id="alimentos" className="min-h-screen flex items-center justify-center p-6">
        <p className="text-red-600 text-center text-lg">😥 Não foi possível carregar informações sobre os alimentos.</p>
      </section>
    );
  }

  return (
    <section
      id="alimentos"
      className="flex flex-col items-center justify-center min-h-screen bg-yellow-200 p-4 overflow-y-auto"
    >
      <h1 className="text-2xl font-bold mb-6 text-purple-900">Alimentos</h1>

      {alimentos.map((alimento) => (
        <div
          key={alimento.id}
          className="bg-white hover:bg-purple-400 transition rounded-lg shadow-md p-4 mb-4 w-full max-w-md text-black"
        >
          <p><strong>Nome:</strong> {alimento.nome}</p>
          <p><strong>Benefícios:</strong> {alimento.beneficios}</p>
          <p><strong>Sugestão de Receita:</strong> {alimento.sugestão_de_receita}</p>
          <p><strong>Categoria:</strong> {alimento.categoria}</p>
        </div>
      ))}
    </section>
  );
}

