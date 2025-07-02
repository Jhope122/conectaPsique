import Link from 'next/link';

import BemVindo from "./components/bemvindo";
import Alimentos from "./components/alimentos";
import Livros from "./components/livros";
import Cursos from "./components/cursos";

export default function Home() {
  return (
    <main>
      <BemVindo />
      <Alimentos />
      <Livros />
      <Cursos />
    </main>
  );
}

