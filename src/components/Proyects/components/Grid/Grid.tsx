import { Card } from "./Card";
import { proyects } from "../../data/proyects";

export function Grid() {
  return (
    <div className="grid w-3/4 grid-cols-3 gap-6 m-auto">
      {proyects.map((p, i) => (
        <Card key={i} p={p} />
      ))}
    </div>
  );
}
