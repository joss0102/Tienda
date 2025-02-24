import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {
  private librosEnCarrito: any[] = [];

  // Método para agregar un libro al carrito
  agregarLibro(libro: any) {
    const libroExistente = this.librosEnCarrito.find(item => item.titulo === libro.titulo);
    if (!libroExistente) {
      this.librosEnCarrito.push(libro);
      console.log('Libro agregado al carrito:', libro);
    } else {
      console.log('El libro ya está en el carrito:', libro);
    }
  }
  // Método para obtener todos los libros en el carrito
  obtenerLibros() {
    return this.librosEnCarrito;
  }
  // Método para obtener el numero de libros en el carrito
  obtenerCantidadLibros() {
    return this.librosEnCarrito.length;
  }
  // Método para vaciar el carrito
  vaciarCarrito() {
    this.librosEnCarrito = [];
  }
}
