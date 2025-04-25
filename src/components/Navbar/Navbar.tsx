export function Navbar({
  scrollASeccion1,
  scrollASeccion2,
  seccionActiva,
}: {
  scrollASeccion1: () => void;
  scrollASeccion2: () => void;
  seccionActiva: string | null;
}) {
  return (
    <nav className="sticky top-0 left-0 z-50 w-full bg-blue-400 h-fit">
      <button
        onClick={scrollASeccion1}
        className={`transition-all duration-300 ${ seccionActiva === "seccion1" ? "bg-pink-500" : "bg-purple-500" }`}
      >
        Presentación
      </button>
      <button
        onClick={scrollASeccion2}
        className={`transition-all duration-300 ${ seccionActiva === "seccion2" ? "bg-pink-500" : "bg-purple-500" }`}
      >
        Experiencia
      </button>
    </nav>
  );
}
