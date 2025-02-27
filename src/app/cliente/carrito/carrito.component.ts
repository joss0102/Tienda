import { Component, OnInit } from '@angular/core';
import { CarritoService } from '../../services/service/carrito.service';
import { NgIf } from '@angular/common';
import { NgFor } from '@angular/common';
import { Libro } from '../../services/models/libro.model';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-carrito',
  imports: [NgFor,NgIf,RouterModule],
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.scss']
})
export class CarritoComponent implements OnInit {
  librosEnCarrito: any[] = [];

  constructor(private carritoService: CarritoService) {}

  ngOnInit() {
    this.librosEnCarrito = this.carritoService.obtenerLibros();  // Obtener los libros al cargar
    console.log(this.librosEnCarrito);  // Verifica los datos que se cargan
  }

  vaciarCarrito() {
    this.carritoService.vaciarCarrito();
    this.librosEnCarrito = [];  // Limpiar el array de libros en el carrito
  }
  eliminarLibro(libro: Libro) {
    const index = this.librosEnCarrito.indexOf(libro);
    if (index > -1) {
      this.librosEnCarrito.splice(index, 1);  // Elimina el libro del array
    }
  }
  
}
