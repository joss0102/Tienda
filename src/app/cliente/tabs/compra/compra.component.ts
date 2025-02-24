import { Component, Input } from '@angular/core';
import { CarritoService } from '../../../services/carrito.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-compra',
  imports: [NgIf],
  templateUrl: './compra.component.html',
  styleUrl: './compra.component.scss'
})
export class CompraComponent {
  @Input() libro: any; // Recibe el libro desde el padre
  isVisible = true;

  constructor(private carritoService: CarritoService) {}

  agregarYcerrar() {
    if (this.libro) {
      this.carritoService.agregarAlCarrito(this.libro); // Agrega el libro al carrito
    }
    this.isVisible = false; // Cierra el mensaje
  }
}
