import "./index.css";
import { useRef, useState, useEffect } from "react";
import { ParticlesImages } from "./components/Particles/ParticlesImages";
import { ParticlesShapes } from "./components/Particles/ParticlesShapes";
import { Navbar } from "./components/Navbar/Navbar";
import { Header } from "./components/Header/Header";
import { Presentation } from "./components/Presentation/Presentation";
import { Experience } from "./components/Experience/Experience";

function App() {
  const refSeccion1 = useRef<HTMLElement | null>(null);
  const refSeccion2 = useRef<HTMLElement | null>(null);

  const [seccionActiva, setSeccionActiva] = useState<string | null>(null);

  const scrollASeccion1 = () =>
    refSeccion1.current?.scrollIntoView({ behavior: "smooth" });
  const scrollASeccion2 = () =>
    refSeccion2.current?.scrollIntoView({ behavior: "smooth" });

  useEffect(() => {
    const ref1 = refSeccion1.current;
    const ref2 = refSeccion2.current;

    const observer = new IntersectionObserver(
      (entradas) => {
        entradas.forEach((entrada) => {
          console.log("Observando:", entrada.target.id, entrada.isIntersecting);
          if (entrada.isIntersecting) {
            setSeccionActiva(entrada.target.id);
          }
        });
      },
      { threshold: 0 }
    );

    if (ref1) observer.observe(ref1);
    if (ref2) observer.observe(ref2);

    return () => {
      if (ref1) observer.unobserve(ref1);
      if (ref2) observer.unobserve(ref2);
    };
  }, []);

  return (
    <main className="flex flex-col items-center justify-center w-full min-h-screen">
      <Navbar
        scrollASeccion1={scrollASeccion1}
        scrollASeccion2={scrollASeccion2}
        seccionActiva={seccionActiva}
      />
      <Header />
      <Presentation referencia={refSeccion1} />
      <Experience referencia={refSeccion2} />
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
