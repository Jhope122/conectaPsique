import React from "react";

interface cursos {
  id: number;
  titulo: string;
  link: string;
  resumo: string;
  duracao: string;
}

export default async function CursosPage() {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  let cursos: cursos[] = [];

  try {
    const response = await fetch("https://api-conectapsique.onrender.com/cursos");
    if (!response.ok) throw new Error("Falha ao consumir a API");
    cursos = await response.json();
  } catch (error) {
    console.log("Erro no fetch:", error);
  }

  return (
    <div
      id="cursos"
      className="flex flex-col items-center justify-center min-h-screen bg-transparent p-4 overflow-y-auto"
    >
      <h1 className="text-2xl font-bold mb-6 text-purple-900">Cursos</h1>

      {cursos.map((curso) => (
        <div
          key={curso.id}
          className="bg-purple-50 hover:bg-purple-100 transition rounded-lg shadow-md p-4 mb-4 w-full max-w-md"
        >
          <p><strong>Título:</strong> {curso.titulo}</p>
          <p>
            <strong>Link:</strong>{" "}
            <a
              href={curso.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-2 px-4 py-2 bg-purple-700 text-white rounded-lg hover:bg-purple-900 transition"
            >
              Acessar curso
            </a>
          </p>
          <p><strong>Resumo:</strong> {curso.resumo}</p>
          <p><strong>Duração:</strong> {curso.duracao}</p>
        </div>
      ))}
    </div>
  );
}
