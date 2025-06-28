
export default async function BemVindoPage() {
  let mensagem = '';

  try {
    const response = await fetch('https://miniprojeto-m4.onrender.com');
    mensagem = await response.text();
  } catch (error) {
    mensagem = '<strong> 😥 404 - Erro ao carregar informações</strong>';
  }

  return (
    <div
      style={{
        backgroundColor: '#f3e8ff',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem',
        textAlign: 'center',
        fontFamily: 'sans-serif',
      }}
    >
      <div style={{ fontSize: '10rem' }}>🧠</div>
      <h1
        dangerouslySetInnerHTML={{
          __html: mensagem,
        }}
        style={{
          fontSize: '1.8rem',
          color: '#4b0082',
          maxWidth: '600px',
          marginTop: '1rem',
        }}
      />
    </div>
  );
}
