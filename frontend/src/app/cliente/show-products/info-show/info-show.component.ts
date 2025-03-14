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
  @Input() libro: any;
  @Output() agregar: EventEmitter<any> = new EventEmitter();

  constructor(private carritoService: CarritoService) {}

  agregarAlCarrito() {
    if (this.libro) {
      this.agregar.emit(this.libro);
    }
  }
}
