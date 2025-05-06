import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { Title } from "../General/Title/Title";
import { Grid } from "./components/Grid/Grid";

export function Proyects() {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: false });

  useEffect(() => {
    if (inView) {
      controls.start({
        scale: [1, 1.5, 1],
        transition: { duration: 3 },
      });
    } else {
      controls.start({ scale: 1 });
    }
  }, [inView, controls]);

  return (
    <section className="w-full bg-stone-800 h-fit pb-28" id="proyectos">
      <motion.div
        className="flex flex-col w-full h-fit"
        ref={ref}
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: false }}
      >
        <Title title="Proyectos" />
        <Grid />
      </motion.div>
    </section>
  );
}
