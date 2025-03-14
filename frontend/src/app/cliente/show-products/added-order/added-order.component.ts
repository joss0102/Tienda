import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-added-order',
  templateUrl: './added-order.component.html',
  styleUrls: ['./added-order.component.scss']
})
export class AddedOrderComponent {
  @Input() libro: any;
  @Output() cerrar: EventEmitter<void> = new EventEmitter<void>();

  cerrarModal() {
    this.cerrar.emit();
  }
}
