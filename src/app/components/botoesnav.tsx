export default function BotoesNav() {
  const estilosBotao = "bg-yellow-200 text-black px-4 py-2 rounded-full font-medium text-sm shadow hover:bg-purple-200 transition-all duration-300";

  return (
    <nav className="flex flex-wrap justify-center md:justify-end gap-4">
      <a href="#about" className={estilosBotao}>Sobre</a>
      <a href="#livros" className={estilosBotao}>Livros</a>
      <a href="#alimentos" className={estilosBotao}>Alimentos</a>
      <a href="#cursos" className={estilosBotao}>Cursos</a>
    </nav>
  );
}

