import { Component, OnInit } from '@angular/core';
import { CarritoService } from '../../services/carrito.service';
import { NgIf } from '@angular/common';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-carrito',
  imports: [NgFor,NgIf],
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
  
}
