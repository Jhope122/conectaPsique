"use client";

export default async function AboutPage() {
  let mensagem = '';

  try {
    const response = await fetch('https://api-conectapsique.onrender.com');
    mensagem = await response.text();
  } catch (error) {
    mensagem = '<strong> 😥 404 - Erro ao carregar informações</strong>';
  }

  return (
    <section
      id="about"
      className="flex items-center justify-center min-h-screen bg-purple-100 px-4 py-16"
    >
      <div className="bg-white rounded-3xl shadow-xl max-w-3xl w-full p-10 text-center border border-purple-200">
        <div className="text-5xl mb-4">🧠</div>

        <h1
          className="text-2xl font-bold text-purple-800 mb-6"
          dangerouslySetInnerHTML={{ __html: mensagem }}
        />

        <p className="text-gray-700 text-lg leading-relaxed">
          O <strong>ConectaPsique</strong> é uma iniciativa desenvolvida com o propósito de promover o bem-estar emocional por meio da tecnologia. Através de uma API construída do zero, conectamos você a recomendações de livros inspiradores, cursos acessíveis e alimentos que nutrem mente e corpo.
          <br /><br />
          Mais do que um projeto, o ConectaPsique é um convite ao autocuidado, à leveza e ao conhecimento — feito com carinho, simplicidade e propósito. 💜
        </p>
      </div>
    </section>
  );
}
