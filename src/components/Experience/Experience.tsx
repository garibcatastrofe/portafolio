import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { Title } from "../General/Title/Title";
import { Carousel } from "./components/Carousel";

export function Experience() {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: false });

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
    <section className="w-full bg-stone-900 h-fit pb-28" id="experiencia">
      <motion.div
        className="flex flex-col w-full h-screen"
        ref={ref}
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: false }}
      >
        <Title title="Experiencia" />
        <Carousel />
      </motion.div>
    </section>
  );
}
