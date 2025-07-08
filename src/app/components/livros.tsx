import React from "react";

interface Livro { id: number; titulo: string; autor: string; ano: number; genero: string; resumo: string; link_para_comprar: string; }

export default async function LivrosPage() { await new Promise((resolve) => setTimeout(resolve, 1000)); // simula carregamento

let livros: Livro[] = [];

try { const response = await fetch("https://api-conectapsique.onrender.com/livros");

if (!response.ok) {
  throw new Error("Falha ao consumir a API");
}

livros = await response.json();

} catch (error) { console.log("Erro no fetch:", error); }

return ( <div id="livros" className="flex flex-col items-center justify-center min-h-screen bg-purple-100 p-4 overflow-y-auto"> <h1 className="text-2xl font-bold mb-6 text-purple-900">Livros</h1>

{livros.map((livro) => (
    <div
      key={livro.id}
      className="bg-purple-50 hover:bg-purple-100 transition rounded-lg shadow-md p-4 mb-4 w-full max-w-md"
    >
      <p><strong>Título:</strong> {livro.titulo}</p>
      <p><strong>Autor:</strong> {livro.autor}</p>
      <p><strong>Ano:</strong> {livro.ano}</p>
      <p><strong>Gênero:</strong> {livro.genero}</p>
      <p><strong>Resumo:</strong> {livro.resumo}</p>
      <p>
        <strong>Comprar:</strong>{' '}
        <a
          href={livro.link_para_comprar}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-2 px-4 py-2 bg-purple-700 text-white rounded-lg hover:bg-purple-900 transition"
        >
          Clique aqui
        </a>
      </p>
    </div>
  ))}
</div>

); }
