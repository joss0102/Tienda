// carrito.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {
  private librosEnCarrito: any[] = [];
  private librosEnCarritoSubject = new BehaviorSubject<any[]>(this.librosEnCarrito);

  // Método para agregar un libro al carrito
  agregarLibro(libro: any) {
    const libroExistente = this.librosEnCarrito.find(item => item.titulo === libro.titulo);
    if (!libroExistente) {
      this.librosEnCarrito.push(libro);
      console.log('Libro agregado al carrito:', libro);
      this.librosEnCarritoSubject.next(this.librosEnCarrito); // Emitir cambio
    } else {
      console.log('El libro ya está en el carrito:', libro);
    }
  }

  // Método para obtener todos los libros en el carrito
  obtenerLibros() {
    return this.librosEnCarrito;
  }

  // Método para obtener el número de libros en el carrito
  obtenerCantidadLibros() {
    return this.librosEnCarrito.length;
  }

  // Método para vaciar el carrito
  vaciarCarrito() {
    this.librosEnCarrito = [];
    this.librosEnCarritoSubject.next(this.librosEnCarrito); // Emitir cambio
  }

  // Observable para que los componentes se suscriban
  obtenerLibrosEnCarritoObservable() {
    return this.librosEnCarritoSubject.asObservable();
  }
}
