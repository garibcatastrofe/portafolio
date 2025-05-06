import xfitLogo from "../../../assets/carousel/logo/logo_svg_blancas.svg";
import xfitBg from "../../../assets/carousel/bg/xfitBg.webp";
import searchingBg from "../../../assets/carousel/bg/searching.jpg";

export const slides: Slide[] = [
  {
    nombreEmpresa: "X-FIT",
    funcion: "Desarrollador full-stack",
    descripcion: [
      "Desarrollé un sistema full-stack de control de asistencia para el gimnasio X-FIT, basado en tecnología de escaneo infrarrojo y un microcontrolador ESP32. El objetivo principal fue automatizar el proceso de registro de entrada de los usuarios mediante un escáner, que activa una puerta con electroimán según la validación correspondiente.",
      "El sistema incluye una aplicación web desarrollada con React, alojada en la nube, que ofrece una interfaz moderna e intuitiva para la gestión de las entidades del gimnasio (usuarios, asistencias, accesos, entre otros). Esta aplicación se comunica con el microcontrolador ESP32, que actúa como servidor local, recibiendo instrucciones desde el front-end para accionar el mecanismo de apertura de puerta según las condiciones establecidas.",
      "La lógica del backend fue implementada mediante una API REST desarrollada en Node.js utilizando el framework Express, estructurada bajo el patrón de arquitectura hexagonal. Esta API se encarga de procesar las solicitudes recibidas en formato JSON y de orquestar las interacciones con las bases de datos y servicios externos.",
      "Para el manejo de datos, se utilizó una solución híbrida: MySQL fue empleado para modelar entidades con relaciones estrictamente necesarias, mientras que Firebase se utilizó para almacenar datos más flexibles, orientados a documentos.",
    ],
    imgFondo: xfitBg,
    logo: xfitLogo,
    colorEmpresa: "#dc2626",
    colorLetraEmpresa: "#ffffff",
    mostrarBoton: true,
    tieneLogo: true,
    tieneFuncion: true,
  },
  {
    nombreEmpresa: "",
    funcion: "En un futuro...",
    descripcion: [
      "Estate al tanto de mis nuevas experiencias, si eres una empresa o deseas crear algo nuevo, emocionante y que te lleve al éxito, no dudes en contactarme, ¡Crearemos cosas grandes!",
    ],
    imgFondo: searchingBg,
    logo: "",
    colorEmpresa: "",
    colorLetraEmpresa: "",
    mostrarBoton: false,
    tieneLogo: false,
    tieneFuncion: true,
  },
];

interface Slide {
  nombreEmpresa: string;
  funcion: string;
  descripcion: string[];
  imgFondo: string;
  logo: string;
  colorEmpresa: string;
  colorLetraEmpresa: string;
  mostrarBoton: boolean;
  tieneLogo: boolean;
  tieneFuncion: boolean;
}
