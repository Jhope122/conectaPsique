import React from "react";

interface Livro {
  id: number;
  titulo: string;
  autor: string;
  ano: number;
  genero: string;
  resumo: string;
  link_para_comprar: string;
}

export default async function LivrosPage() {
  await new Promise((resolve) => setTimeout(resolve, 1000)); // simula carregamento

  let livros: Livro[] = [];

  try {
    const response = await fetch("https://miniprojeto-m4.onrender.com/livros");

    if (!response.ok) {
      throw new Error("Falha ao consumir a API");
    }

    livros = await response.json();
  } catch (error) {
    console.log("Erro no fetch:", error);
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-purple-300 p-4">
      <h1 className="text-2xl font-bold mb-6 text-purple-900">Livros</h1>

      {livros.map((livro) => (
        <div key={livro.id} className="bg-white rounded-lg shadow-md p-4 mb-4 w-full max-w-md">
          <p><strong>Título:</strong> {livro.titulo}</p>
          <p><strong>Autor:</strong> {livro.autor}</p>
          <p><strong>Ano:</strong> {livro.ano}</p>
          <p><strong>Gênero:</strong> {livro.genero}</p>
          <p><strong>Resumo:</strong> {livro.resumo}</p>
          <p>
            <strong>Comprar:</strong>{' '}
            <a href={livro.link_para_comprar} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
              Clique aqui
            </a>
          </p>
        </div>
      ))}
    </div>
  );
}