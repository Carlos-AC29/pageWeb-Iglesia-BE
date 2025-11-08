import { Inscripcion } from "../../domain/Inscripcion";
import { InscripcionRepositoryMemory } from "../../infrastructure/repositories/InscripcionRepositoryMemory";

export class RegisterInscriptionUseCase {
  constructor(private repo: InscripcionRepositoryMemory) {}

  async execute(data: Inscripcion) {
    // Aquí podrías agregar validaciones extra o lógica de negocio
    if (!data.iglesia || !data.lider || !data.dataPersonas?.length) {
      throw new Error("Datos incompletos de la inscripción");
    }

    const saved = await this.repo.save(data);
    return saved;
  }
}
