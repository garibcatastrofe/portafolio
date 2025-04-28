import { useState, useEffect } from 'react';
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadImageShape } from "@tsparticles/shape-image";
import { loadSlim } from "@tsparticles/slim";
import { particlesLoaded } from "../../functions/cargarParticulas";

export function ParticlesImages({
  backColor,
  idContainer,
}: {
  backColor: string;
  idContainer: string;
}) {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
      await loadImageShape(engine);
    }).then(() => {
      setInit(true);
      console.log("Montado!!")
    });
  }, []);

  const [screenKey, setScreenKey] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setScreenKey((prev) => prev + 1); // cambia la key para forzar rerender
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {init && (
        <Particles
          id={idContainer}
          key={screenKey}
          className="w-full h-full"
          options={{
            fullScreen: { enable: false },
            background: {
              color: backColor,
            },
            fpsLimit: 40,
            particles: {
              number: {
                value: 0, // no genera partículas automáticas
              },
              collisions: {
                enable: true,
              },
              rotate: {
                value: 30, // ángulo inicial opcional
                direction: "clockwise", // "counter-clockwise" si prefieres al revés
                animation: {
                  enable: true,
                  speed: 5, // velocidad de rotación
                  sync: false, // false para que cada partícula rote de forma independiente
                },
              },
            },
            interactivity: {
              events: {
                onHover: { enable: false, mode: "repulse" },
                onClick: { enable: false },
              },
              modes: {
                push: { quantity: 4 },
                repulse: { distance: 80, duration: 10 },
              },
            },
          }}
          particlesLoaded={particlesLoaded}
        />
      )}
    </div>
  );
}
