export default async function AboutPage() {
  let mensagem = "";

  try {
    const response = await fetch("https://api-conectapsique.onrender.com");
    mensagem = await response.text();
  } catch {
    mensagem = "<strong> 😥 404 - Erro ao carregar informações</strong>";
  }

  return (
    <section
      id="about"
      className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-yellow-200 to-yellow-200 px-4 py-16">
      <div className="max-w-5xl w-full bg-white rounded-3xl shadow-2xl border border-purple-200 p-8">
        <div className="text-center mb-10 space-y-4">
          <h2 className="text-4xl font-extrabold text-purple-500">
            Seja bem-vindo(a) ao ConectaPsique
          </h2>
          <h3
            className="text-lg text-black max-w-3xl mx-auto"
            dangerouslySetInnerHTML={{ __html: mensagem }}/>
        </div>
        <input type="checkbox" id="toggle-about" className="peer hidden" />
        <label
          htmlFor="toggle-about"
          className="cursor-pointer text-purple-500 font-bold mb-6 inline-block select-none text-center w-full">
          Sobre a idealizadora e a iniciativa (clique para ver/ocultar)
        </label>
        <div className="max-h-0 overflow-hidden transition-all duration-700 peer-checked:max-h-[1000px] peer-checked:py-6 peer-checked:opacity-100 opacity-0 peer-checked:mt-4 flex flex-col md:flex-row gap-8">
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src="/img/foto.jpg"
              alt="Foto da idealizadora do ConectaPsique"
              className="w-50 h-auto rounded-2xl shadow-md object-cover"
            />
          </div>
          <div className="w-full md:w-1/2 text-center md:text-left space-y-4 text-gray-700">
            <h3 className="text-2xl font-bold text-purple-800">
            Idealizadora & Iniciativa
            </h3>
            <p className="leading-relaxed">
              O <strong>ConectaPsique</strong> surgiu da vontade de conectar pessoas ao que há de mais acessível para o bem-estar emocional.
              Com carinho e simplicidade, criei essa iniciativa para ajudar quem busca mais leveza e autoconhecimento.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
