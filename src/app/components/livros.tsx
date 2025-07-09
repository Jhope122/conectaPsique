
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
  let livros: Livro[] = [];

  try {
    const response = await fetch("https://api-conectapsique.onrender.com/livros");
    if (!response.ok) throw new Error("Erro");
    livros = await response.json();
  } catch  {
    console.error("Erro ao buscar dados:");
    return (
      <section id="livros" className="min-h-screen flex items-center justify-center p-6">
        <p className="text-red-600 text-center text-lg">😥 Não foi possível carregar informações sobre os livros.</p>
      </section>
    );
  }

  return (
    <section
      id="livros"
      className="flex flex-col items-center justify-center min-h-screen bg-yellow-200  p-4 overflow-y-auto"
    >
      <h1 className="text-2xl font-bold mb-6 text-purple-900">Livros</h1>

      {livros.map((livro) => (
        <div
          key={livro.id}
          className="bg-white hover:bg-purple-400 transition rounded-lg shadow-md p-4 mb-4 w-full max-w-md text-black"
        >
          <p><strong>Título:</strong> {livro.titulo}</p>
          <p><strong>Autor:</strong> {livro.autor}</p>
          <p><strong>Ano:</strong> {livro.ano}</p>
          <p><strong>Gênero:</strong> {livro.genero}</p>
          <p><strong>Resumo:</strong> {livro.resumo}</p>
          <a
            href={livro.link_para_comprar}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-2 px-4 py-2 bg-purple-700 text-white rounded hover:bg-purple-900 transition"
          >
            Comprar
          </a>
        </div>
      ))}
    </section>
  );
}
