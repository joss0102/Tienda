import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CarritoService } from '../../services/carrito.service';
import { CompraComponent } from "../tabs/compra/compra.component";
import { CarritoComponent } from "../carrito/carrito.component";
import { LibroService } from '../../services/libro-service.service';
import { Libro } from '../../services/models/libro.model';


@Component({
  selector: 'app-tienda',
  imports: [CommonModule, CompraComponent, CarritoComponent],
  standalone: true,
  templateUrl: './tienda.component.html',
  styleUrls: ['./tienda.component.scss']
})
export class TiendaComponent implements OnInit {
  libros: Libro[] = [];
  isVisible = false;
  libroSeleccionado: Libro | null = null;  // Almacena el libro seleccionado

  constructor(
    private carritoService: CarritoService,
    private libroService: LibroService // Inyectamos el servicio de libros
  ) {}

  ngOnInit(): void {
    // Obtener los libros a través del servicio
    this.libros = this.libroService.getLibros();
  }

  agregarAlCarrito(libro: Libro) {
    console.log("Libro agregado:", libro);
    this.carritoService.agregarLibro(libro);
    this.isVisible = true;
    this.libroSeleccionado = libro;
  }
}
