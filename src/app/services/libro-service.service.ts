import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Libro } from './models/libro.model';

@Injectable({
  providedIn: 'root'
})
export class LibroService {
  // Inicializa el array de libros con instancias de la clase Libro
  libros: Libro[] = [
    new Libro('Trono de cristal', 'Sarah J. Maas', 'Romance y misterio', true, 22.99, '/covers/Trono de cristal.png', 'Primera parte. TOG', 3),
    new Libro('Corona de medianoche', 'Sarah J. Maas', 'Romance y misterio', true, 22.50, '/covers/Corona de medianoche.png', 'Segunda parte TOG', 3),
    new Libro('La espada de la asesina', 'Sarah J. Maas', 'Romance y misterio', true, 23.99, '/covers/La espada de la asesina.png', 'Tercera parte TOG (Spin off)', 4),
    new Libro('Heredera de fuego', 'Sarah J. Maas', 'Fantaía y romance', true, 24.99, '/covers/Heredera de fuego.png', 'Cuarta parte TOG', 6),
    new Libro('Reina de sombras', 'Sarah J. Maas', 'Fantaía y romance', true, 25.99, '/covers/Reina de sombras.png', 'Quinta parte TOG', 7),
    new Libro('Imperio de tormentas', 'Sarah J. Maas', 'Fantaía y romance', true, 26.99, '/covers/Imperio de tormentas.png', 'Sexta parte TOG', 8),
    new Libro('Torre del alba', 'Sarah J. Maas', 'Fantaía y romance', true, 26.99, '/covers/Torre del alba.png', 'Séptima parte TOG', 5),
    new Libro('Reino de cenizas', 'Sarah J. Maas', 'Fantaía y romance', true, 27.99, '/covers/Reino de cenizas.png', 'Octava y última parte TOG', 10),
    new Libro('Alas de Sangre', 'Rebecca Yarros', 'Dragones', true, 21.99, '/covers/Alas de sangre.png', 'Primera parte Empireo', 6),
    new Libro('Alas de Hierro', 'Rebecca Yarros', 'Dragones', true, 21.99, '/covers/Alas de hierro.png', 'Segunda parte Empireo', 7),
    new Libro('Alas de Onix', 'Rebecca Yarros', 'Dragones', true, 21.99, '/covers/Alas de onix.png', 'Tercera parte Empireo', 6),
    new Libro('El imperio del vampiro', 'Jay Kristoff', 'Vampiros', true, 22.99, '/covers/El imperio del vampiro.png', 'Primera parte EIDV', 7),
    new Libro('El imperio de los condenados', 'Jay Kristoff', 'Vampiros', true, 21.99, '/covers/El imperio de los condenados.png', 'Segunda parte EIDV', 7),
    new Libro('Una corte de rosas y espinas', 'Lauren Roberts', 'Fantaía y romance', true, 15.99, '/covers/Una corte de rosas y espinas.png', 'Primera parte Acotar', 7),
    new Libro('Una corte de niebla y furia', 'Lauren Roberts', 'Fantaía y romance', true, 16.99, '/covers/Una corte de niebla y furia.png', 'Segunda parte Acotar', 7),
    new Libro('Una corte de alas y ruina', 'Lauren Roberts', 'Fantaía y romance', true, 17.99, '/covers/Una corte de alas y ruina.png', 'Tercera parte Acotar', 7),
    new Libro('Una corte de hielo y estrellas', 'Lauren Roberts', 'Fantaía y romance', true, 16.99, '/covers/Una corte de hielo y estrellas.png', 'Cuarta parte Acotar', 7),
    new Libro('Una corte de llamas plateadas', 'Lauren Roberts', 'Fantaía y romance', true, 18.99, '/covers/Una corte de llamas plateadas.png', 'Quinta parte Acotar', 7),

    new Libro('De sangre y cenizas', 'Jennifer Armentrout', 'Dioses y mosntruos', true, 18.99, '/covers/De sangre y cenizas.png', 'Primera parte DSYC', 7),
    new Libro('La guerra de las dos reinas', 'Jennifer Armentrout', 'Dioses y mosntruos', true, 18.99, '/covers/La guerra de las dos reinas.png', 'Segunda parte DSYC', 7),
    new Libro('Un alma de ceniza y sangre', 'Jennifer Armentrout', 'Dioses y mosntruos', true, 19.99, '/covers/Un alma de ceniza y sangre.png', 'Tercera parte DSYC', 7),
    new Libro('Un reino de carne y fuego', 'Jennifer Armentrout', 'Dioses y mosntruos', true, 19.99, '/covers/Un reino de carne y fuego.png', 'Cuarta parte DSYC', 7),
    new Libro('Una corona de huesos dorados', 'Jennifer Armentrout', 'Dioses y mosntruos', true, 20.99, '/covers/Una corona de huesos dorados.png', 'Quinta parte DSYC', 7),
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
