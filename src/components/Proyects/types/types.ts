export interface Proyect {
  nombre: string;
  descripcion: string;
  imagen: string;
  link: string;
  herramientas: Tool[];
  enableButton: boolean;
}

interface Tool {
  icon: string;
}
