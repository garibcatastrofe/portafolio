import "./index.css";
import { ParticlesImages } from "./components/Particles/ParticlesImages";
import { ParticlesShapes } from "./components/Particles/ParticlesShapes";
import { Header } from "./components/Header/Header";

function App() {
  return (
    <main className="flex flex-col items-center justify-center w-full min-h-screen">
      <Header />
      <ParticlesImages backColor="#091E0E" idContainer="imagesParticles" />
      <ParticlesShapes
        backColor="#0F3D16"
        shapeColor="#316D35"
        idContainer="shapesParticles"
      />
    </main>
  );
}

export default App;
