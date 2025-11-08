import { Inscripcion } from "../../domain/Inscripcion";

export class InscripcionRepositoryMemory {
  private data: Inscripcion[] = [];

  async save(inscripcion: Inscripcion): Promise<Inscripcion> {
    this.data.push(inscripcion);
    console.log("Inscripción Exitosa:");
    return inscripcion;
  } 
}
