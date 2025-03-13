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
    // Verificar si ya existe un libro con el mismo id en el carrito
    const libroExistente = this.librosEnCarrito.find(l => l.id === libro.id);
    
    if (libroExistente) {
      // Si el libro ya existe, agregar una nueva instancia al carrito
      this.librosEnCarrito.push({...libro, quantity: 1}); // Clonamos el libro y le asignamos la cantidad 1
    } else {
      // Si el libro no está en el carrito, lo agregamos como nueva entrada
      this.librosEnCarrito.push({...libro, quantity: 1}); // Añadimos el libro con cantidad 1
    }

    // Actualizamos el estado del carrito
    this.librosEnCarritoSubject.next(this.librosEnCarrito);
    console.log('🛒 Estado actualizado del carrito:', this.librosEnCarrito);
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

  // ❌ Eliminar un libro del carrito
  eliminarLibro(id: number) {
    const libroExistente = this.librosEnCarrito.find(l => l.id === id);

    if (libroExistente) {
      if (libroExistente.quantity > 1) {
        // Si hay más de una unidad, simplemente restamos la cantidad
        libroExistente.quantity--;
      } else {
        // Si es la última unidad, lo eliminamos
        this.librosEnCarrito = this.librosEnCarrito.filter(libro => libro.id !== id);
      }
    }

    // Actualizamos el carrito
    this.librosEnCarritoSubject.next(this.librosEnCarrito);
    console.log('🛒 Estado actualizado del carrito:', this.librosEnCarrito);
  }
}
