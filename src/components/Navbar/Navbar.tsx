import { useEffect, useState } from "react";
import { buttons } from "./data/buttons";
import { LiaFileDownloadSolid } from "react-icons/lia";
import { IoLogoGithub } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const manejarScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      const scrollPosition = window.scrollY + window.innerHeight / 3;

      let currentSection = "";
      for (const btn of buttons) {
        const element = document.getElementById(btn.nombre);
        if (element) {
          const elementTop = element.offsetTop;
          if (scrollPosition >= elementTop) {
            currentSection = btn.nombre;
          }
        }
      }

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", manejarScroll);
    manejarScroll(); // Ejecutar una vez al cargar

    return () => {
      window.removeEventListener("scroll", manejarScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 z-50 flex transition-all duration-300 justify-between w-full px-10 ${
        isScrolled ? "bg-[#18a436] shadow-md h-14" : "bg-transparent h-24"
      }`}
    >
      <div className="flex items-center h-full gap-4 w-fit">
        <LiaFileDownloadSolid
          className="text-3xl text-white transition-all duration-300 hover:scale-125 hover:text-green-400 hover:cursor-pointer"
          title="Descargar CV"
          onClick={() => alert("Descargando CV...")}
        />
        <IoLogoGithub
          className="text-3xl text-white transition-all duration-300 hover:scale-125 hover:text-green-400 hover:cursor-pointer"
          title="Ver mi GitHub"
          onClick={() => alert("Redirigiendo a github...")}
        />
        <FaLinkedin
          className="text-3xl text-white transition-all duration-300 hover:scale-125 hover:text-green-400 hover:cursor-pointer"
          title="Ver mi LinkedIn"
          onClick={() => alert("Redirigiendo a LinkedIn...")}
        />
      </div>
      <div className="flex gap-10">
        {buttons.map((b, index) => (
          <a
            key={index}
            href={"#" + b.nombre}
            className={`flex items-center h-full text-lg text-white hover:text-green-400 hover:scale-110 font-normal transition-all duration-300 ease-in-out ${
              activeSection === b.nombre ? "scale-110" : "scale-100"
            }`}
          >
            {b.nombre}
          </a>
        ))}
      </div>
    </nav>
  );
}
