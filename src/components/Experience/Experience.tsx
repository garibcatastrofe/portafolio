import { Start } from "./components/Start";
import { Carousel } from "./components/Carousel";

export function Experience() {
  return (
    <section className="w-full bg-stone-900 h-fit pb-28" id="experiencia">
      <div className="flex flex-col w-full h-screen">
        <Start />
        <Carousel />
      </div>
    </section>
  );
}
