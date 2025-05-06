import { Proyect } from "../../types/types";
import { motion } from "framer-motion";
import "../../../../animations.css";

export function Card({ p }: { p: Proyect }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05, backgroundColor: "#57534e" }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="relative flex flex-col w-full h-full shadow-lg bg-stone-700 rounded-xl shadow-black/30"
    >
      <div
        className="relative w-full bg-left-top bg-cover h-60 rounded-tl-xl rounded-tr-xl"
        style={{ backgroundImage: `url(${p.imagen})` }}
      >
        <div className="absolute inset-0 z-0 w-full h-full rounded-tl-xl rounded-tr-xl bg-gradient-to-t from-black/50 via-black/40 to-black/10" />
      </div>
      <div className="relative z-10 flex flex-col justify-between flex-1 w-full gap-4 p-6">
        <div>
          <h3 className="mb-4 text-4xl font-semibold text-stone-100">
            {p.nombre}
          </h3>
          <p className="font-medium text-stone-300">{p.descripcion}</p>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-4">
            {p.herramientas.map((h, i) => (
              <img src={h.icon} key={i} className="w-8 h-8" />
            ))}
          </div>
          <a
            className="px-4 py-2 font-medium text-white rounded-lg animate-gradient bg-gradient-to-br from-green-400 via-emerald-500 to-blue-600 w-fit h-fit"
            href={p.link}
            target="_blank"
          >
            Ver más
          </a>
        </div>
      </div>
    </motion.div>
  );
}
