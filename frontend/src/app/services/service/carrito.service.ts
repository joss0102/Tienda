// carrito.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {
  private librosEnCarrito: any[] = [];
  private librosEnCarritoSubject = new BehaviorSubject<any[]>(this.librosEnCarrito);

  constructor() {}

  // 📥 Agregar un libro al carrito local
  agregarLibroAlCarrito(libro: any) {
    console.log('📥 Agregando libro al carrito:', libro);
    this.librosEnCarrito.push(libro); // Aquí agregamos el libro completo
    this.librosEnCarritoSubject.next(this.librosEnCarrito);
    console.log('🛒 Estado actual del carrito:', this.librosEnCarrito);
  }

  // 🛒 Obtener los libros en el carrito
  obtenerLibrosEnCarritoObservable() {
    return this.librosEnCarritoSubject.asObservable();
  }

  // 🗑️ Vaciar el carrito
  vaciarCarrito() {
    this.librosEnCarrito = [];
    this.librosEnCarritoSubject.next(this.librosEnCarrito);
  }
}
