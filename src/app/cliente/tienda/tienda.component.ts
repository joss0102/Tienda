import { Component, OnInit } from '@angular/core';
import { CarritoService } from '../../services/carrito.service';
import { LibroService } from '../../services/libro-service.service';
import { Libro } from '../../services/models/libro.model';
import { CompraComponent } from '../tabs/compra/compra.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-tienda',
  imports:[CompraComponent, NgFor],
  templateUrl: './tienda.component.html',
  styleUrls: ['./tienda.component.scss']
})

export class TiendaComponent implements OnInit {
  libros: Libro[] = [];
  librosPorPagina: number = 6;
  paginaActual: number = 1;
  totalPaginas: number = 0;
  libroSeleccionado: Libro | null = null;

  constructor(
    private carritoService: CarritoService,
    private libroService: LibroService
  ) {}

  ngOnInit(): void {
    this.libros = this.libroService.getLibros();
    this.totalPaginas = Math.ceil(this.libros.length / this.librosPorPagina); // Calcula el número total de páginas
    this.cargarLibros();
  }

  cargarLibros() {
    const inicio = (this.paginaActual - 1) * this.librosPorPagina;
    const fin = inicio + this.librosPorPagina;
    this.libros = this.libroService.getLibros().slice(inicio, fin);
  }

  // Cambiar a la página siguiente
  siguientePagina() {
    if (this.paginaActual < this.totalPaginas) {
      this.paginaActual++;
      this.cargarLibros();
    }
  }

  // Cambiar a la página anterior
  paginaAnterior() {
    if (this.paginaActual > 1) {
      this.paginaActual--;
      this.cargarLibros();
    }
  }

  agregarAlCarrito(libro: Libro) {
    console.log("Libro agregado:", libro);
    this.carritoService.agregarLibro(libro);
  }
}
