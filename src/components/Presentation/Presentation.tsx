import {
  motion,
  useAnimation /* useScroll, useTransform */,
} from "framer-motion";
import { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import me from "../../assets/me.png";
import "../../animations.css";


export function Presentation() {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: false });
  const colorGreen = "text-white";

  const referencia = useRef(null);
  /* const { scrollYProgress } = useScroll({
    target: referencia,
    offset: ["start end", "end start"], // Cuando entra y sale de pantalla
  }); */

  /* const topX = useTransform(scrollYProgress, [0, 1], ["100%", "-100%"]); // De derecha a izquierda
  const bottomX = useTransform(scrollYProgress, [0, 1], ["-100%", "100%"]); // De izquierda a derecha */

  useEffect(() => {
    if (inView) {
      controls.start({
        scale: [1, 1.5, 1],
        transition: { duration: 1 },
      });
    } else {
      controls.start({ scale: 1 });
    }
  }, [inView, controls]);

  return (
    <section
      className="flex items-center w-full h-fit py-36 bg-gradient-to-br from-[#138e5b] via-[#01474b] to-[#000a2a]"
      ref={referencia}
      
    >
      
      {/* Rectángulo superior */}
      {/* <motion.div
        style={{
          x: topX,
          boxShadow: "0px 0px 10px rgba(0,0,0,0.5)",
          translateY: "-50%",
        }}
        className="absolute top-0 right-0 z-40 w-3/5 h-4 shadow-lg bg-stone-700"
      /> */}

      {/* Rectángulo inferior */}
      {/* <motion.div
        style={{
          x: bottomX,
          boxShadow: "0px 0px 10px rgba(0,0,0,0.5)",
          translateY: "50%",
        }}
        className="absolute bottom-0 left-0 z-40 w-3/5 h-4 shadow-lg bg-stone-700"
      /> */}
      <motion.div
        ref={ref}
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: false }}
        className="relative z-10 flex items-center justify-center w-3/4 gap-6 m-auto h-fit"
      >
        {/* Imagen con efecto latido */}
        <div
          className="w-64 h-64 bg-center bg-cover rounded-full shadow-lg min-w-64 animate-pulse-slow shadow-black/30"
          style={{
            backgroundImage: `url(${me})` /* , boxShadow: "0px 0px 1rem rgb(34 197 94 / 0.5)" */,
          }}
        ></div>

        {/* Título con movimiento dinámico en la mano */}
        <div className="flex flex-col gap-4">
          <h2 className="flex items-center gap-2 m-auto text-4xl font-medium">
            <span className="text-white">Hola, soy</span>
            <span className="font-semibold text-white">
              Ramses Garib Flores Cuen
            </span>
            <motion.span
              animate={controls}
              className={`inline-block ${inView ? "animate-wave" : ""}`}
              style={{
                display: "inline-block",
                transformOrigin: "70% 70%",
                textShadow: "2px 2px 10px rgba(0,0,0,0.5)",
              }}
            >
              🤙
            </motion.span>
          </h2>

          <p className="text-xl font-light text-center text-blanco1">
            Apasionado por la tecnología y el arte, me encanta explorar cómo la
            programación puede convertir ideas en soluciones reales. Me dedico
            al{" "}
            <span className={`font-bold ${colorGreen}`}>
              desarrollo full-stack
            </span>{" "}
            de aplicaciones web, móvil y de escritorio. Tengo experiencia
            integrando componentes físicos,{" "}
            <span className={`font-bold ${colorGreen}`}>redes</span> y sistemas{" "}
            <span className={`font-bold ${colorGreen}`}>IoT</span>. Disfruto{" "}
            <span className={`font-bold ${colorGreen}`}>liderar</span>{" "}
            proyectos, así como trabajar en{" "}
            <span className={`font-bold ${colorGreen}`}>equipo</span> gracias a
            mi facilidad para hablar en público y
            <span className={`font-bold ${colorGreen}`}> motivar</span> a otros.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
