import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Libro } from './models/libro.model';

@Injectable({
  providedIn: 'root'
})
export class LibroService {
  // Inicializa el array de libros con instancias de la clase Libro
  libros: Libro[] = [
    new Libro('Trono de cristal', 'Sarah J. Maas', 'Fantasía', true, 22.99, '/Trono de cristal.png', 'Primera parte. TOG', 3),
    new Libro('Corona de medianoche', 'Sarah J. Maas', 'Romance', true, 22.50, '/Corona de medianoche.png', 'Segunda parte TOG', 3),
    new Libro('La espada de la asesina', 'Sarah J. Maas', 'Misterio', true, 23.99, '/La espada de la asesina.png', 'Tercera parte TOG (Spin off)', 4),
    new Libro('Heredera de fuego', 'Sarah J. Maas', 'Ciencia Ficcion', true, 24.99, '/Heredera de fuego.png', 'Cuarta parte TOG', 6),
    new Libro('Reina de sombras', 'Sarah J. Maas', 'Historia', true, 25.99, '/Reina de sombras.png', 'Quinta parte TOG', 7),
    new Libro('Imperio de tormentas', 'Sarah J. Maas', 'Historia', true, 26.99, '/Imperio de tormentas.png', 'Sexta parte TOG', 8),
    new Libro('Torre del alba', 'Sarah J. Maas', 'Misterio', true, 26.99, '/Torre del alba.png', 'Séptima parte TOG', 5),
    new Libro('Reino de cenizas', 'Sarah J. Maas', 'Ciencia Ficcion', true, 27.99, '/Reino de cenizas.png', 'Octava y última parte TOG', 10),
    new Libro('Alas de Sangre', 'Rebecca Yarros', 'Romance', true, 22.99, '/Alas de sangre.png', 'Primera parte Empireo', 6),
    new Libro('Alas de Hierro', 'Rebecca Yarros', 'Misterio', true, 23.99, '/Alas de hierro.png', 'Segunda parte Empireo', 7),
    new Libro('Alas de Onix', 'Rebecca Yarros', 'Fantasía', true, 24.99, '/Alas de onix.png', 'Tercera parte Empireo', 6)
  ];

  private librosSubject = new BehaviorSubject<Libro[]>(this.libros);
  private carrito: Libro[] = []; // Este es el array donde se almacenarán los libros en el carrito.

  constructor() {}

  // Obtiene los libros disponibles
  obtenerLibros() {
    return this.librosSubject.asObservable();
  }

  // Agrega un libro al carrito
  agregarLibroAlCarrito(libro: Libro) {
    this.carrito.push(libro);
    this.librosSubject.next(this.carrito); // Actualiza el carrito en el observable
  }

  // Elimina un libro del carrito
  eliminarLibroDelCarrito(libro: Libro) {
    const index = this.carrito.indexOf(libro);
    if (index !== -1) {
      this.carrito.splice(index, 1); // Elimina el libro del carrito
      this.librosSubject.next(this.carrito); // Notifica el cambio
    }
  }

  // Vacía el carrito
  vaciarCarrito() {
    this.carrito = [];
    this.librosSubject.next(this.carrito); // Notifica que el carrito está vacío
  }

  // Devuelve el array de libros en el carrito
  obtenerCarrito() {
    return this.carrito;
  }

  // Devuelve todos los libros disponibles
  getLibros() {
    return this.libros;
  }
}
