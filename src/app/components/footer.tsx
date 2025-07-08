export default function Footer() {
  return (
    <footer className="w-full bg-gradient-to-r from-purple-500 to-fuchsia-500 text-yellow-200  py-8 shadow-inner">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6 text-base">

        
        <div className="flex items-center gap-6">
          <a href="https://github.com/Jhope122" className="hover:text-yellow-200 transition-colors duration-300 font-medium">GitHub</a>
          <a href="https://www.linkedin.com/in/giselegomesoliveira?" className="hover:text-yellow-200 transition-colors duration-300 font-medium">LinkedIn</a>
          <a href="mailto:ConectaPsique@gmail.com" className="hover:text-yellow-200 transition-colors duration-300 font-medium">Email</a>
        </div>

        <div className="text-center text-base font-bold">
          © 2025 ConectaPsique. Todos os direitos reservados.
        </div>

        
        <div className="text-right text-base italic font-thin">
          Desenvolvido com 💜 por Gisele
        </div>
      </div>
    </footer>
  );
}
