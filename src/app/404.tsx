import Link from 'next/link';

export default function NotFound() {
  return (
    <div style={{ textAlign: 'center', padding: '4rem' }}>
      <h1>404 - Página não encontrada</h1>
      <p>Essa página não existe.</p>
      <Link href="/">Voltar para a página inicial</Link>
    </div>
  );
}

