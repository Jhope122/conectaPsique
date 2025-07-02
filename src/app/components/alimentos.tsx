import React from "react";

interface alimentos {
  id: number;
  nome: string;
  beneficios: string;
  sugestão_de_receita:string;
  categoria: string;
}

export default async function AlimentosPage() {
  await new Promise((resolve) => setTimeout(resolve, 1000)); // simula carregamento

  let alimentos: alimentos[] = [];

  try {
    const response = await fetch("https://miniprojeto-m4.onrender.com/alimentos");

    if (!response.ok) {
      throw new Error("Falha ao consumir a API");
    }

    alimentos= await response.json();
  } catch (error) {
    console.log("Erro no fetch:", error);
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-purple-300 p-4">
      <h1 className="text-2xl font-bold mb-6 text-purple-900">Alimentos</h1>

      {alimentos.map((alimentos) => (
        <div key={alimentos.id} className="bg-white rounded-lg shadow-md p-4 mb-4 w-full max-w-md">
          <p><strong>Nome:</strong> {alimentos.nome}</p>
          <p><strong>Benefíios:</strong> {alimentos.beneficios}</p>
          <p><strong>Sugestão_de_receita:</strong> {alimentos.sugestão_de_receita}</p>
          <p><strong>Categoria:</strong> {alimentos.categoria}</p>
        </div>
      ))}
    </div>
  );
}