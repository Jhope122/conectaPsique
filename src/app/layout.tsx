import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ConectaPsique",
  description: "Conectando você ao bem-estar emocional com livros, cursos e alimentos 💜",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className="min-h-screen bg-gradient-to-br from-purple-50 via-fuchsia-50 to-white text-purple-900 font-sans antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
