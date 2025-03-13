import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CarritoService } from '../../../services/service/carrito.service';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-pay',
  standalone: true,
  imports: [NgIf, NgFor],
  templateUrl: './pay.component.html',
  styleUrls: ['./pay.component.scss']
})
export class PayComponent {
  @Input() totalCompra: string = ''; // Recibimos el total desde el carrito
  @Output() cerrar = new EventEmitter<void>();

  librosEnCarrito: any[] = [];

  constructor(private carritoService: CarritoService) {}

  ngOnInit(): void {
    this.carritoService.obtenerLibrosEnCarritoObservable().subscribe(libros => {
      this.librosEnCarrito = libros;
    });
  }

  procesarPago() {
    alert('Pago procesado con éxito');
    this.cerrar.emit(); // Cierra el modal después del pago
  }

  cerrarModal() {
    this.cerrar.emit(); // Cierra el modal cuando el usuario hace clic en ✖ o cancelar
  }
}
