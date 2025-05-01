import casita from "../../assets/computer.jpg";

export function Header() {
  return (
    <section className="relative w-full h-full overflow-hidden">
      {/* GRADIENTE NEGRO DE ARRIBA A ABAJO */}
      <div className="absolute top-0 left-0 z-30 w-full h-full bg-gradient-to-b from-black/60 to-transparent"></div>

      {/* IMAGEN DE FONDO */}
      <div
        className="absolute top-0 left-0 z-0 w-full h-full bg-center bg-cover"
        style={{ backgroundImage: `url(${casita})` }}
      ></div>
    </section>
  );
}
