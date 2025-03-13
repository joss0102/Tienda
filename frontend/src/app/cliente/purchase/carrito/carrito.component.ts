import { Component, OnInit } from '@angular/core';
import { CarritoService } from '../../../services/service/carrito.service';
import { HttpClient } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { environment } from '../../../../environments/environment';
import { NgFor, NgIf } from '@angular/common';

// carrito.component.ts


@Component({
  selector: 'app-carrito',
  imports: [NgIf, NgFor,],
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.scss']
})
export class CarritoComponent implements OnInit {
  librosEnCarrito: any[] = [];

  constructor(private carritoService: CarritoService) {}

  ngOnInit(): void {
    // Subscribirse al observable del carrito para obtener los libros
    this.carritoService.obtenerLibrosEnCarritoObservable().subscribe(libros => {
      console.log('📥 Libros en el carrito:', libros);
      this.librosEnCarrito = libros;
    });
  }

  // Vaciar el carrito
  vaciarCarrito() {
    this.carritoService.vaciarCarrito();
  }

  // Eliminar un libro del carrito
  eliminarLibro(id: number) {
    this.librosEnCarrito = this.librosEnCarrito.filter(libro => libro.id !== id);
  }
  // carrito.component.ts
get total() {
  const total = this.librosEnCarrito.reduce((total, libro) => total + libro.price, 0);
  return total.toFixed(2);
}

}

