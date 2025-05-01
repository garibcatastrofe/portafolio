import "./index.css";
import { Navbar } from "./components/Navbar/Navbar";
import { Header } from "./components/Header/Header";
import { Presentation } from "./components/Presentation/Presentation";
import { Experience } from "./components/Experience/Experience";
import { Proyects } from "./components/Proyects/Proyects";
import { TextoDinamico } from "./components/General/TextoDinamico/TextoDinamico";
import { ParticlesShapes } from "./components/Particles/ParticlesShapes";

function App() {
  return (
    <main className="flex flex-col items-center justify-center w-full min-h-screen overflow-hidden">
      <Navbar />
      <div className="relative w-full h-screen overflow-hidden"  id="inicio">
        <Header />
        <TextoDinamico />
      </div>
      <div className="relative w-full overflow-hidden h-fit" id="sobremi">
        <Presentation />
        <div className="absolute top-0 left-0 z-0 w-full h-full">
          <ParticlesShapes
            backColor="#00000"
            idContainer="particulasFiguras1"
            shapeColor="#d8ffe7"
            opacity={{ min: 0.05, max: 0.08 }}
            opacityAnimation={{
              enable: false,
              speed: 0.5,
            }}
          />
        </div>
      </div>
      <Experience />
      <Proyects />
    </main>
  );
}

export default App;
