import "./index.css";

function App() {
  return (
    <main className="bg-[#FBFBEF] font-poppins flex justify-center items-center w-full min-h-screen">
      {/* about me */}
      <section className="w-full flex flex-col justify-center items-center bg-[#90C285] p-5">
        <div className="flex gap-3 items-center ">
          <img src="/me.png" alt="Ramses" className="rounded-full w-48" />
          <h2 className="text-4xl font-semibold">Hola Soy Garib 🤙</h2>
        </div>
        <div className="max-w-2xl">
          <p className="text-md text-balance">
            Soy la mera riata, el dios del teclado, el arquitecto del código, el
            sensei de los bugs (porque ni se me acercan). Lo que otros aprenden
            en años, yo lo capto en un café. Tiro verbo y talento por igual, y
            si de programación se trata, nadie me ve ni el polvo. Web, móvil,
            bases de datos, APIs, inteligencia artificial... lo que quieras, yo
            lo hago y me sobra tiempo. Eso sí, no me hables de trabajo en equipo
            ni humildad, porque ahí sí me falta barrio. Soy una máquina de hacer
            código, pero con cero filtro y un ego que no cabe en un servidor.
            Así soy, y así funciono mejor.
          </p>
          {/* Social Media */}
          github correo linkedin cv
        </div>
      </section>
    </main>
  );
}

export default App;
