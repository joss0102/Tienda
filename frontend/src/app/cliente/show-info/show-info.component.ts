import { Component, Input } from '@angular/core';
import { Location, NgIf } from '@angular/common';
import { CarritoService } from '../../services/service/carrito.service';

@Component({
  selector: 'app-show-info',
  imports:[NgIf],
  templateUrl: './show-info.component.html',
  styleUrls: ['./show-info.component.scss']
})
export class ShowInfoComponent {
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
