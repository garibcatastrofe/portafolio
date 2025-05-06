import puntoVenta from "../../../assets/proyects/puntoVenta.webp";
import escuelita from "../../../assets/proyects/escuelita.webp";
import aEstrella from "../../../assets/proyects/aEstrella.webp";
import yolo from "../../../assets/proyects/yolo.webp";
import reconocimiento from "../../../assets/proyects/reconocimiento.webp";

import csharp from "/assets/logos/csharp.svg";
import php from "/assets/logos/php.svg";
import mysql from "/assets/logos/mysql.svg";
import arduino from "/assets/logos/arduino.svg";
import python from "/assets/logos/python.svg";

import { Proyect } from "../types/types";

export const proyects: Proyect[] = [
  {
    nombre: "Punto de venta",
    descripcion:
      "Para cualquier tienda o comercio que necesite un sistema para sus cajas, sirve como plantilla para empezar algo más grande",
    imagen: puntoVenta,
    link: "",
    herramientas: [
      {
        icon: csharp,
      },
    ],
    enableButton: true,
  },
  {
    nombre: "MULS",
    descripcion:
      "Sistema encargado de administrar información de alumnos, maestros y pagos, de la escuela particular Moonchild Universal Learning School",
    imagen: escuelita,
    link: "",
    herramientas: [
      {
        icon: php,
      },
      {
        icon: mysql,
      },
    ],
    enableButton: true,
  },
  {
    nombre: "A*",
    descripcion:
      "Representación visual y física del algoritmo A* mediante una matriz multiplexada y dibujos en un panel",
    imagen: aEstrella,
    link: "",
    herramientas: [
      {
        icon: csharp,
      },
      {
        icon: arduino,
      },
    ],
    enableButton: true,
  },
  {
    nombre: "Dataset YOLO",
    descripcion:
      "Creación de un dataset para la librería YOLO cuya función es la detección de objetos, en este caso cinco componentes físicos",
    imagen: yolo,
    link: "",
    herramientas: [
      {
        icon: python,
      },
    ],
    enableButton: true,
  },
  {
    nombre: "Detección de movimiento",
    descripcion:
      "Utilizando la librería mediapipe se creó un pequeño sistema que reconoce el movimiento de los dedos en diferente medida, representado con movimiento físico en servos.",
    imagen: reconocimiento,
    link: "",
    herramientas: [
      {
        icon: python,
      },
      {
        icon: arduino,
      },
    ],
    enableButton: true,
  },
];
