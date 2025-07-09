import React from "react";

interface Curso {
  id: number;
  titulo: string;
  link: string;
  resumo: string;
  duracao: string;
}

export default async function CursosPage() {
  let cursos: Curso[] = [];

  try {
    const response = await fetch("https://api-conectapsique.onrender.com/cursos");
    if (!response.ok) throw new Error("Erro na API");
    cursos = await response.json();
  } catch (error) {
    return (
      <section id="cursos" className="min-h-screen flex items-center justify-center p-6">
        <p className="text-red-600 text-center text-lg">😥 Não foi possível carregar as informações sobre cursos.</p>
      </section>
    );
  }

  return (
    <section
      id="cursos"
      className="flex flex-col items-center justify-center min-h-screen bg-yellow-200  p-4 overflow-y-auto"
    >
      <h1 className="text-2xl font-bold mb-6 text-purple-900">Cursos</h1>

      {cursos.map((curso) => (
        <div
          key={curso.id}
          className="bg-white hover:bg-purple-400 transition rounded-lg shadow-md p-4 mb-4 w-full max-w-md text-black"
        >
          <p><strong>Título:</strong> {curso.titulo}</p>
          <p><strong>Resumo:</strong> {curso.resumo}</p>
          <p><strong>Duração:</strong> {curso.duracao}</p>
          <a
            href={curso.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-2 px-4 py-2 bg-purple-700 text-white rounded hover:bg-purple-900 transition"
          >
            Acessar curso
          </a>
        </div>
      ))}
    </section>
  );
}

