export function ModalBody({ descripcion }: { descripcion: string[] }) {
  return (
    <div className="flex flex-col h-full max-h-[50vh]">
      <div className="flex-1 pr-2 overflow-y-scroll scrollbar-custom">
        {descripcion.map((d, i) => (
          <p key={i} className="mb-4 text-justify text-white">
            {d}
          </p>
        ))}
      </div>
    </div>
  );
}
