import { Container } from "@tsparticles/engine";
import { logos } from "../data/logos";

export const particlesLoaded = async (container?: Container): Promise<void> => {
  if (!container) return;

  const particles = container.particles;
  const canvasSize = container.canvas.size;

  let minSize = 10
  let maxSize = 10

  if(canvasSize.width >= 1080) {
    minSize = 20
    maxSize = 45
  } else if(canvasSize.width >= 800 && canvasSize.width < 1080) {
    minSize = 15
    maxSize = 35
  } else {
    minSize = 10
    maxSize = 25
  }

  particles.clear();

  logos.forEach((logo) => {
    const position = {
      x: Math.random() * canvasSize.width,
      y: Math.random() * canvasSize.height,
    };

    particles.addParticle(position, {
      shape: {
        type: "image",
        options: {
          image: logo,
        },
      },
      size: {
        value: { min: minSize, max: maxSize },
      },
      opacity: {
        value: 1,
      },
      move: {
        enable: true,
        speed: 0.4,
        direction: "none",
        outModes: {
          default: "bounce",
        },
      },
      image: {
        src: logo.src,
        width: 50,
        height: 50,
      },
    });
  });
};
