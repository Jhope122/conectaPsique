"use client";
import BotoesNav from "./botoesnav";

export default function Header() {
  return (
    <header className="w-full bg-gradient-to-r from-purple-500 to-fuchsia-500 shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-6 py-4 gap-4">
        <h1 className="text-3xl font-bold text-white tracking-wide">
          Conecta<span className="text-yellow-200">Psique</span>
        </h1>

        {/* Navegação */}
        <nav className="flex flex-wrap gap-4">
          <BotoesNav />
        </nav>
      </div>
    </header>
  );
}
