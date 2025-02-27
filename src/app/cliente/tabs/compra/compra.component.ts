import { Component, Input } from '@angular/core';
import { CarritoService } from '../../../services/service/carrito.service';
import { CommonModule, NgIf } from '@angular/common';

@Component({
  selector: 'app-compra',
  standalone: true,
  imports: [CommonModule,NgIf], // Se agregó CommonModule para *ngIf
  templateUrl: './compra.component.html',
  styleUrl: './compra.component.scss'
})
export class CompraComponent {
  @Input() libro: any;  // Recibe el libro desde el padre
  isVisible = true;

  constructor(private carritoService: CarritoService) {}

  agregarYcerrar() {
    if (this.libro) {
      this.carritoService.agregarLibro(this.libro);  // Agregar el libro al carrito
    }
    this.isVisible = false;  // Cierra el mensaje
  }
}


