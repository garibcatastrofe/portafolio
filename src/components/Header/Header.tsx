import casita from "../../assets/casita.jpg";
import { ParticlesShapes } from "../Particles/ParticlesShapes";

export function Header() {
  return (
    <section className="relative w-full h-screen overflow-hidden" id="Inicio">
      {/* GRADIENTE NEGRO DE ARRIBA A ABAJO */}
      <div className="absolute top-0 left-0 z-30 w-full h-full bg-gradient-to-b from-black/60 to-transparent"></div>

      {/* CUADRO QUE TAPA EL CENTRO DE LAS PARTÍCULAS */}
      {/* <div className="absolute top-0 left-0 z-20 w-1/12 h-full bg-red-500"></div>
      <div className="absolute top-0 right-0 z-20 w-1/12 h-full bg-red-500"></div> */}
      <div className="absolute top-0 left-0 z-20 w-full h-1/6">
        <ParticlesShapes
          backColor="#00000"
          idContainer="particulasFiguras1"
          shapeColor="#b1d8ae"
        />
      </div>
      <div className="absolute bottom-0 left-0 z-20 w-full h-1/6">
        <ParticlesShapes
          backColor="#00000"
          idContainer="particulasFiguras2"
          shapeColor="#b1d8ae"
        />
      </div>

      {/* PARTICULAS  */}
      {/* <div className="absolute z-10 w-full h-full">
        <ParticlesShapes
          backColor="#00000"
          idContainer="particulasFiguras1"
          shapeColor="#ccc"
        />
      </div> */}

      {/* IMAGEN DE FONDO */}
      <div
        className="absolute top-0 left-0 z-0 w-full h-full bg-center bg-cover"
        style={{ backgroundImage: `url(${casita})` }}
      ></div>
    </section>
  );
}
