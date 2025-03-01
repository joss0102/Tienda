import { Component, Input } from '@angular/core';
import { CarritoService } from '../../../services/service/carrito.service';
import { CommonModule, NgIf } from '@angular/common';

@Component({
  selector: 'app-compra',
  standalone: true,
  imports: [CommonModule,NgIf],
  templateUrl: './compra.component.html',
  styleUrl: './compra.component.scss'
})
export class CompraComponent {
  @Input() libro: any;
  isVisible = true;

  constructor(private carritoService: CarritoService) {}

  agregarYcerrar() {
    if (this.libro) {
      this.carritoService.agregarLibro(this.libro);
    }
    this.isVisible = false;
  }
}


