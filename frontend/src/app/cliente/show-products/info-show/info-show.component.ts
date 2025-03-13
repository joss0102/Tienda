import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CarritoService } from '../../../services/service/carrito.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-info-show',
  imports: [NgIf],
  templateUrl: './info-show.component.html',
  styleUrls: ['./info-show.component.scss']
})
export class InfoShowComponent {
  @Input() libro: any;  // Recibe el libro seleccionado
  @Output() agregar: EventEmitter<any> = new EventEmitter(); // Emitir evento para agregar al carrito

  constructor(private carritoService: CarritoService) {}

  agregarAlCarrito() {
    if (this.libro) {
      this.agregar.emit(this.libro);  // Emitir el libro al componente padre
    }
  }
}
