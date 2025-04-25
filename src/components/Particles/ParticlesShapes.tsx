import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadPolygonShape } from "@tsparticles/shape-polygon";
import { loadSlim } from "@tsparticles/slim";

export function ParticlesShapes({
  backColor,
  shapeColor,
  idContainer,
}: {
  backColor: string;
  shapeColor: string,
  idContainer: string;
}) {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
      await loadPolygonShape(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {init && (
        <Particles
          id={idContainer}
          className="w-full h-full"
          options={{
            fullScreen: { enable: false },
            background: {
              color: backColor,
            },
            fpsLimit: 40,
            particles: {
              color: { value: shapeColor },
              /* links: {
                color: "#ffffff",
                distance: 150,
                enable: true,
                opacity: 0.2,
                width: 1,
              }, */
              move: {
                direction: "none",
                enable: true,
                outModes: { default: "bounce" },
                random: false,
                speed: 0.2,
                straight: false,
              },
              number: {
                density: { enable: true, height: 1000, width: 1000 },
                value: 100,
              },
              opacity: {
                value: { min: 0.1, max: 0.4 },
                animation: {
                  enable: true,
                  speed: 0.5,
                },
              },
              size: {
                value: { min: 5, max: 20 },
                animation: {
                  enable: true,
                  mode: "random",
                  speed: 1
                }
              },
              shape: {
                type: "polygon",
                options: {
                  polygon: {
                    sides: 6,
                    rotate: 30
                  },
                },
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
              collisions: {
                enable: true,
              },
            },
            interactivity: {
              events: {
                onHover: {
                  enable: false,
                },
                onClick: {
                  enable: false,
                },
              },
              modes: {},
            },
          }}
          /* particlesLoaded={particlesLoaded} */
        />
      )}
      <div className="absolute top-0 left-0 z-10 flex items-center justify-center w-full h-full">
        <p className="text-4xl font-bold text-white">FIGURAS</p>
      </div>
    </div>
  );
}
