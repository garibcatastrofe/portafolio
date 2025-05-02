/* import pro1 from "../../../assets/carousel/bg/programming1.jpg";
import pro2 from "../../../assets/carousel/bg/programming2.jpg";
import pro3 from "../../../assets/carousel/bg/programming3.jpg";
import aurora1 from "../../../assets/carousel/bg/aurora1.png"; */
import xfitLogo from "../../../assets/carousel/logo/logo_svg_blancas.svg";
import xfitBg from "../../../assets/carousel/bg/xfitBg.webp";

export const slides = [
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
  },
];
