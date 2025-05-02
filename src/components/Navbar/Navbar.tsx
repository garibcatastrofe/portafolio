import { useEffect, useState } from "react";
import { buttons } from "./data/buttons";
import { LiaFileDownloadSolid } from "react-icons/lia";
import { IoLogoGithub } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import logo from "/personal-logo.svg";

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
        const element = document.getElementById(btn.linkTo);
        if (element) {
          const elementTop = element.offsetTop;
          if (scrollPosition >= elementTop) {
            currentSection = btn.linkTo;
          }
        }
      }
      console.log(currentSection);

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
      className={`fixed top-0 left-0 z-50 items-center flex transition-all duration-300 justify-between w-full px-10 ${
        isScrolled ? "bg-stone-950/70 shadow-md h-14" : "bg-transparent h-24"
      }`}
    >
      <div className="flex items-center h-full gap-4 w-fit">
        <div
          className="w-8 h-8 bg-center bg-cover"
          style={{ backgroundImage: `url(${logo})` }}
        ></div>
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
            href={"#" + b.linkTo}
            className={`flex h-fit items-center text-lg hover:scale-110 font-medium transition-all duration-300  ${
              activeSection === b.linkTo
                ? "scale-110 -translate-y-1 bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-emerald-500 to-blue-600 animate-gradient"
                : "scale-100 text-white bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-emerald-500 to-blue-600 animate-gradient"
            }`}
          >
            {b.nombre}
          </a>
        ))}
      </div>
    </nav>
  );
}
