import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {

  private carrito = new BehaviorSubject<any[]>([]);
  carrito$ = this.carrito.asObservable();

  agregarAlCarrito(libro: any) {
    const carritoActual = this.carrito.getValue();
    console.log('Carrito Actual:', carritoActual);  // Verifica el estado antes de agregar
    this.carrito.next([...carritoActual, libro]);
    console.log('Carrito Actualizado:', this.carrito.getValue());  // Verifica después de agregar
  }
  
}
