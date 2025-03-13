import { Component, OnInit } from '@angular/core'; 
import { CarritoService } from '../../../services/service/carrito.service';
import { PayComponent } from "../pay/pay.component";
import { NgFor, NgIf } from '@angular/common';

// Definimos un tipo para los libros en el carrito
interface Libro {
  id: number;
  title: string;
  author: string;
  price: number;
  currency: string;
  quantity: number;
}

@Component({
  selector: 'app-carrito',
  standalone: true,
  imports: [NgIf, NgFor, PayComponent],
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.scss']
})
export class CarritoComponent implements OnInit {
  librosEnCarrito: Libro[] = [];
  mostrarModalPago = false; // Estado del modal

  constructor(private carritoService: CarritoService) {}

  ngOnInit(): void {
    this.carritoService.obtenerLibrosEnCarritoObservable().subscribe(libros => {
      this.librosEnCarrito = libros;
    });
  }

  // 🛒 Vaciar el carrito
  vaciarCarrito() {
    this.carritoService.vaciarCarrito();
  }

  // ❌ Eliminar un libro del carrito
  eliminarLibro(id: number) {
    this.carritoService.eliminarLibro(id);
  }

  // 🏷️ Total del carrito
  get total() {
    return this.librosEnCarrito.reduce((total, libro) => total + libro.price, 0).toFixed(2);
  }

  // 📌 Abrir el modal de pago
  abrirModalPago() {
    this.mostrarModalPago = true;
  }

  // ❌ Cerrar el modal de pago
  cerrarModalPago() {
    this.mostrarModalPago = false;
  }

  // Agrupar libros por ID y mostrar solo una fila para cada uno con la cantidad
  get librosAgrupados(): Libro[] {
    const agrupados: Libro[] = [];

    this.librosEnCarrito.forEach(libro => {
      const libroExistente = agrupados.find(l => l.id === libro.id);
      if (libroExistente) {
        libroExistente.quantity++;
      } else {
        agrupados.push({...libro, quantity: 1});
      }
    });

    return agrupados;
  }
}
