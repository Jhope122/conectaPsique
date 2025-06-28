import Link from 'next/link';

export default function Home() {
  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>Escolha uma página para acessar:</h1>
      <ul>
        <li>
          <Link href="/inicio">Início</Link>
        </li>
        <li>
          <Link href="/livros">Ir para Livros</Link>
        </li>
        <li>
          <Link href="/alimentos">Ir para Alimentos</Link>
        </li>
      </ul>
    </div>
  );
}
