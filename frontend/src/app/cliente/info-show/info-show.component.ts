import { Component, Input } from '@angular/core';
import { Location, NgFor, NgIf } from '@angular/common';
import { CarritoService } from '../../services/service/carrito.service';

@Component({
  selector: 'app-info-show',
  imports: [NgIf],
  templateUrl: './info-show.component.html',
  styleUrl: './info-show.component.scss'
})
export class InfoShowComponent {
  @Input() libro: any;  // Recibe el libro seleccionado

  constructor(
    private location: Location,
    private carritoService: CarritoService
  ) {}

  agregarAlCarrito() {
    if (this.libro) {
      this.carritoService.agregarLibroAlCarrito(this.libro);
    }
  }
}
