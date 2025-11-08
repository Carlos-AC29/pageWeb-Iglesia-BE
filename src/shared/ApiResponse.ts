export class ApiResponse {
  static success(ticket: string, message = "Exitosa") {
    return { ticket, operacion: message };
  }

  static error(message = "Error al procesar la solicitud. Contacte con el encargado.") {
    return { ticket: "", operacion: message };
  }
}
