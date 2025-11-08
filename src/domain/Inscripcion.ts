export interface Persona {
  nombres: string;
  bautizado: boolean;
  edad: number;
}

export interface Pago {
  valor: number;
  metodo: string;
  fechaPago: string;
  comprobante?: string; // será URL más adelante
}

export interface Inscripcion {
  iglesia: string;
  lider: string;
  celular: string;
  dataPersonas: Persona[];
  pago: Pago;
  userId?: string; // del token
}
