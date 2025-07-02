
import React from "react";

interface cursos {
  id: number;
  titulo: string;
  link: string;
  resumo: string;
  duracao: string;
}

export default async function CursosPage() {
  await new Promise((resolve) => setTimeout(resolve, 1000)); // simula carregamento

  let cursos: cursos[] = [];

  try {
    const response = await fetch("https://miniprojeto-m4.onrender.com/cursos");

    if (!response.ok) {
      throw new Error("Falha ao consumir a API");
    }

    cursos = await response.json();
  } catch (error) {
    console.log("Erro no fetch:", error);
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-purple-300 p-4">
      <h1 className="text-2xl font-bold mb-6 text-purple-900">Cursos</h1>

      {cursos.map((cursos) => (
        <div
          key={cursos.id}
          className="bg-white rounded-lg shadow-md p-4 mb-4 w-full max-w-md"
        >
          <p><strong>Título:</strong> {cursos.titulo}</p>
          <p>
            <strong>Link:</strong>{" "}
            <a
              href={cursos.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline"
            >
              Acessar curso
            </a>
          </p>
          <p><strong>Resumo:</strong> {cursos.resumo}</p>
          <p><strong>Duração:</strong> {cursos.duracao}</p>
        </div>
      ))}
    </div>
  );
}
