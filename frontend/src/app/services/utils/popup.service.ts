import { Injectable } from '@angular/core';
import Swal from "sweetalert2";

@Injectable({
  providedIn: 'root'
})
export class PopupService {

  constructor() { }

  showMessage(title: string, message: string,
              icon: 'success' | 'warning' | 'error' | 'info' | 'question' = 'info'): void {
    Swal.fire({
      title: title,
      text: message,
      icon: icon,
      confirmButtonText: "Cerrar notificación"
    })
  }

  loader(title: string = "Cargando...", message: string = ''): void {
    Swal.fire({
      title: title,
      text: message,
      allowEscapeKey: false,
      didOpen() {
        Swal.showLoading()
      }
    })
  }

  async showConfirmation(
    title: string, message: string, confirmButtonText: string = "Aceptar", cancelButtonText: string = "Cancelar",
  ): Promise<boolean> {

    const result = await Swal.fire({
      title: title,
      text: message,
      icon: "question",
      confirmButtonText: confirmButtonText,
      cancelButtonText: cancelButtonText,
    })

    return result.isConfirmed;
  }

  close(): void {
    Swal.close()
  }

  // Nuevo método para redirigir al login
  async showRedirectToLoginMessage(title: string, message: string): Promise<void> {
    const result = await Swal.fire({
      title: title,
      text: message,
      icon: 'success',
      confirmButtonText: 'Iniciar sesión'
    });

    if (result.isConfirmed) {
      window.location.href = '/login'; // Redirigir al login
    }
  }
}
