import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-added-order',
  templateUrl: './added-order.component.html',
  styleUrls: ['./added-order.component.scss']
})
export class AddedOrderComponent {
  @Input() libro: any;  // Recibe el libro añadido al carrito
  @Output() cerrar: EventEmitter<void> = new EventEmitter<void>();  // Emitir evento para cerrar el modal

  cerrarModal() {
    this.cerrar.emit();  // Emitir evento para que el componente padre lo maneje
  }
}
