
import About from "./components/about";
import Livros from "./components/livros";
import Alimentos from "./components/alimentos";
import Cursos from "./components/cursos";
import Header from "./components/header";
import Footer from "./components/footer";



export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-purple-100 text-gray-800">
      <Header/>
      <main className="flex-grow">
        <About/>
        <Livros />
        <Alimentos />
        <Cursos />
      </main>
      <Footer />
    </div>
  );
}
