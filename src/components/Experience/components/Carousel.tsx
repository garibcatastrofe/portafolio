import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { slides } from "../data/slides";
import { useModal } from "../../../stores/Modal/modalStore";
import { ModalBody } from "../components/ModalBody";

export function Carousel() {
  const [index, setIndex] = useState(0);
  const { setModal } = useModal();

  const totalSlides = slides.length;
  const visibleDots = 1;

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % totalSlides);
    }, 15000);
    return () => clearInterval(timer);
  }, [totalSlides, index]);

  const goToSlide = (i: number) => {
    setIndex(i);
  };

  const getStartDotIndex = () => {
    if (totalSlides <= visibleDots) return 0;
    if (index <= 2) return 0;
    if (index >= totalSlides - 3) return totalSlides - visibleDots;
    return index - 2;
  };

  return (
    <div className="relative flex items-center justify-between flex-1 w-full bg-gradient-to-br from-[#138e5b] via-[#01474b] to-[#000a2a] animate-gradient mb-14 shadow-lg shadow-black/30">
      <div className="relative z-10 flex items-center justify-start h-full px-4 w-fit">
        <motion.button
          className="p-4 rounded-full shadow-lg bg-gradient-to-br from-green-500 via-emerald-600 to-blue-700 animate-gradient shadow-black/30 w-fit h-fit"
          onClick={() =>
            setIndex((i) => (i - 1 + slides.length) % slides.length)
          }
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.9 }} // Reduce el tamaño cuando se hace clic
          transition={{ type: "spring", stiffness: 300, damping: 20 }} // Controla la velocidad y suavidad del efecto
        >
          <IoIosArrowBack className="text-xl text-white" />
        </motion.button>
      </div>

      <AnimatePresence>
        <motion.div
          key={index}
          className="absolute top-0 left-0 w-full h-full"
          style={{
            backgroundImage: `url(${slides[index].imgFondo})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          initial={{ opacity: 0, filter: "blur(5px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          exit={{ opacity: 0, filter: "blur(8px)" }}
          transition={{ duration: 1 }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          onDragEnd={(_event, info) => {
            if (info.offset.x < -50) {
              setIndex((i) => (i + 1) % totalSlides);
            } else if (info.offset.x > 50) {
              setIndex((i) => (i - 1 + totalSlides) % totalSlides);
            }
          }}
        >
          <div
            className={`absolute inset-0 z-10 flex items-center justify-center bg-black bg-opacity-40`}
          >
            {/* GRADIENTE NEGRO DE ARRIBA A ABAJO */}
            <div className="absolute top-0 left-0 z-0 w-full h-full bg-gradient-to-b from-black/60 to-transparent"></div>
            <div className="relative z-10 flex w-3/4 gap-8 h-fit">
              <div className="flex items-center justify-center flex-1">
                {/* LOGO DE LA EMPRESA */}
                <div className="w-full h-fit">
                  <img src={slides[index].logo} className="w-full h-full" />
                </div>
              </div>

              <div className="flex flex-col w-3/4 gap-4 h-fit">
                {/* FUNCIÓN QUE REALIZASTE */}
                <p className="text-3xl font-semibold text-white">
                  {slides[index].funcion}
                </p>

                {/* DESCRIPCIÓN DE LO QUE HICISTE */}
                <div className="w-fit h-fit">
                  <p className="text-lg text-justify text-white">
                    {slides[index].descripcion[0]}
                  </p>
                </div>

                {/* BOTÓN PARA VER MÁS */}
                <div>
                  <motion.button
                    className={`text-lg rounded-lg py-2 px-4 shadow-md shadow-black/30 font-medium`}
                    style={{
                      backgroundColor: slides[index].colorEmpresa,
                      color: slides[index].colorLetraEmpresa,
                    }}
                    onClick={() =>
                      setModal(
                        true,
                        <div className="flex items-center gap-2 text-lg w-fit h-fit">
                          <img
                            src={slides[index].logo}
                            className="h-8 p-2 w-fit"
                          />
                          <p className="font-bold text-white">
                            {slides[index].funcion}
                          </p>
                        </div>,
                        <ModalBody descripcion={slides[index].descripcion} />,
                        slides[index].colorEmpresa
                      )
                    }
                    whileHover={{ opacity: 0.8 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }} // Controla la velocidad y suavidad del efecto
                  >
                    Ver más
                  </motion.button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="relative z-10 flex items-center justify-end h-full px-4 w-fit">
        <motion.button
          className="p-4 rounded-full shadow-lg bg-gradient-to-br from-green-500 via-emerald-600 to-blue-700 animate-gradient shadow-black/30 w-fit h-fit"
          onClick={() => setIndex((i) => (i + 1) % slides.length)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.9 }} // Reduce el tamaño cuando se hace clic
          transition={{ type: "spring", stiffness: 300, damping: 20 }} // Controla la velocidad y suavidad del efecto
        >
          <IoIosArrowForward className="text-xl text-white" />
        </motion.button>
      </div>

      {/* Puntos de navegación */}
      <div className="absolute z-10 flex justify-center gap-2 -translate-x-1/2 bottom-4 left-1/2">
        {slides
          .slice(getStartDotIndex(), getStartDotIndex() + visibleDots)
          .map((_, i) => {
            const actualIndex = getStartDotIndex() + i;
            return (
              <button
                key={actualIndex}
                onClick={() => goToSlide(actualIndex)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  actualIndex === index
                    ? "bg-green-400 shadow-lg shadow-black/30 scale-125"
                    : "bg-white/50 hover:bg-white/80"
                }`}
              />
            );
          })}
      </div>
    </div>
  );
}
