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
    this.librosEnCarrito = this.carritoService.obtenerLibros();
    console.log(this.librosEnCarrito);
  }

  vaciarCarrito() {
    this.carritoService.vaciarCarrito();
    this.librosEnCarrito = [];
  }
  eliminarLibro(libro: Libro) {
    const index = this.librosEnCarrito.indexOf(libro);
    if (index > -1) {
      this.librosEnCarrito.splice(index, 1);
    }
  }
  
}
