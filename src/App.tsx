import "./index.css";
import { Navbar } from "./components/Navbar/Navbar";
import { Header } from "./components/Header/Header";
import { Presentation } from "./components/Presentation/Presentation";
import { Experience } from "./components/Experience/Experience";
import { Proyects } from "./components/Proyects/Proyects";
import { TextoDinamico } from './components/General/TextoDinamico/TextoDinamico'

function App() {
  return (
    <main className="flex flex-col items-center justify-center w-full min-h-screen">
      <Navbar />
      <div className="relative w-full h-screen overflow-hidden">
        <Header />
        <TextoDinamico />
      </div>

      <Presentation />
      <Experience />
      <Proyects />
    </main>
  );
}

export default App;
