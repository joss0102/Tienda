import { Component, OnInit } from '@angular/core'; 
import { CarritoService } from '../../../services/service/carrito.service';
import { PayComponent } from "../pay/pay.component";
import { NgFor, NgIf } from '@angular/common';

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
  mostrarModalPago = false;

  constructor(private carritoService: CarritoService) {}

  ngOnInit(): void {
    this.carritoService.obtenerLibrosEnCarritoObservable().subscribe(libros => {
      this.librosEnCarrito = libros;
    });
  }

  vaciarCarrito() {
    this.carritoService.vaciarCarrito();
  }

  eliminarLibro(id: number) {
    this.carritoService.eliminarLibro(id);
  }

  get total() {
    return this.librosEnCarrito.reduce((total, libro) => total + libro.price, 0).toFixed(2);
  }

  abrirModalPago() {
    this.mostrarModalPago = true;
  }

  cerrarModalPago() {
    this.mostrarModalPago = false;
  }

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
