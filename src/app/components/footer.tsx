
export default function Footer() {
  return (
    <footer className="w-full bg-gradient-to-r from-purple-500 to-fuchsia-500 text-yellow-200 py-8 shadow-inner">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6 text-sm md:text-base text-center md:text-left">

        <div className="flex items-center gap-6">

          <a
            href="https://github.com/Jhope122"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hover:scale-110 transition-transform"
          >
            <svg className="w-6 h-6 fill-yellow-200 hover:fill-white transition" viewBox="0 0 24 24">
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.302 
              3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 
              0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61 
              -.546-1.387-1.333-1.757-1.333-1.757-1.089-.745.084-.729.084-.729 
              1.205.084 1.838 1.236 1.838 1.236 1.07 1.834 2.809 1.304 
              3.495.997.108-.776.418-1.305.762-1.605-2.665-.3-5.467-1.332-5.467-5.93 
              0-1.31.47-2.38 1.236-3.22-.124-.303-.536-1.524.117-3.176 
              0 0 1.008-.322 3.3 1.23a11.49 11.49 0 013.003-.404 
              c1.018.005 2.045.138 3.003.404 2.29-1.552 3.297-1.23 
              3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 
              1.235 1.91 1.235 3.22 0 4.61-2.807 5.625-5.479 
              5.921.43.372.823 1.102.823 2.222 0 1.606-.014 2.896-.014 
              3.286 0 .319.218.694.825.576C20.565 22.092 
              24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
            </svg>
          </a>


          <a
            href="https://www.linkedin.com/in/giselegomesoliveira"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:scale-110 transition-transform"
          >
            <svg className="w-6 h-6 fill-yellow-200 hover:fill-white transition" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 
              2.239 5 5 5h14c2.761 0 5-2.239 
              5-5v-14c0-2.761-2.239-5-5-5zm-11.75 
              20h-3v-11h3v11zm-1.5-12.268c-.966 
              0-1.75-.784-1.75-1.75s.784-1.75 
              1.75-1.75 1.75.784 1.75 1.75-.784 
              1.75-1.75 1.75zm13.25 
              12.268h-3v-5.604c0-1.337-.027-3.063-1.867-3.063-1.868 
              0-2.154 1.459-2.154 2.963v5.704h-3v-11h2.881v1.502h.041c.401-.761 
              1.379-1.563 2.839-1.563 3.036 0 3.6 1.997 3.6 4.593v6.468z"/>
            </svg>
          </a>

          <a
            href="mailto:ConectaPsique@gmail.com"
            aria-label="Email"
            className="hover:scale-110 transition-transform"
          >
            <svg className="w-6 h-6 fill-yellow-200 hover:fill-white transition" viewBox="0 0 24 24">
              <path d="M1.5 4.5A1.5 1.5 0 0 1 3 3h18a1.5 1.5 0 0 1 
              1.5 1.5v15a1.5 1.5 0 0 1-1.5 1.5H3a1.5 1.5 0 0 
              1-1.5-1.5v-15zm1.65.6l8.774 
              6.155a.75.75 0 0 0 .852 0L21.55 
              5.1H3.15zM21 6.966l-7.735 
              5.423a2.25 2.25 0 0 1-2.53 0L3 
              6.966V19.5h18V6.966z"/>
            </svg>
          </a>
        </div>


        <p className="font-semibold text-center flex-1">
          © 2025 ConectaPsique. Todos os direitos reservados.
        </p>

        <p className="italic font-light">
          Desenvolvido com 💜 por Gisele
        </p>
      </div>
    </footer>
  );
}
