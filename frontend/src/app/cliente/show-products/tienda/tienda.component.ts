import { Component, OnInit, OnDestroy } from '@angular/core';
import { CarritoService } from '../../../services/service/carrito.service';
import { Libro } from '../../../services/models/libro.model';
import { NgFor, NgIf } from '@angular/common';
import { ProductService } from '../../../services/service/product.service';
import { Subscription } from 'rxjs';
import { InfoShowComponent } from '../info-show/info-show.component';
import { AddedOrderComponent } from '../added-order/added-order.component';  // Importar el componente AddedOrder

@Component({
  selector: 'app-tienda',
  standalone: true,
  imports: [NgFor, NgIf, InfoShowComponent, AddedOrderComponent],  // Incluir AddedOrder en imports
  templateUrl: './tienda.component.html',
  styleUrls: ['./tienda.component.scss']
})
export class TiendaComponent implements OnInit, OnDestroy {
  datos: any[] = [];
  datosPaginados: any[] = [];
  private datosSubscription!: Subscription;

  librosPorPagina: number = 6;
  paginaActual: number = 1;
  totalPaginas: number = 0;
  libroSeleccionado: Libro | null = null;
  mostrarModalPedido = false;  // Estado para mostrar el modal de confirmación

  constructor(
    private carritoService: CarritoService,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    this.datosSubscription = this.productService.getAllProducts().subscribe(
      (response: Libro[]) => {
        this.datos = response;
        this.totalPaginas = Math.ceil(this.datos.length / this.librosPorPagina);
        this.cargarLibros();  
      },
      (error) => {
        console.error('Error al obtener los productos:', error);
      }
    );
  }

  cargarLibros() {
    const inicio = (this.paginaActual - 1) * this.librosPorPagina;
    const fin = inicio + this.librosPorPagina;
    this.datosPaginados = this.datos.slice(inicio, fin);
  }

  siguientePagina() {
    if (this.paginaActual < this.totalPaginas) {
      this.paginaActual++;
      this.cargarLibros();
    }
  }

  paginaAnterior() {
    if (this.paginaActual > 1) {
      this.paginaActual--;
      this.cargarLibros();
    }
  }

  irAPagina(pagina: number) {
    if (pagina >= 1 && pagina <= this.totalPaginas) {
      this.paginaActual = pagina;
      this.cargarLibros();
    }
  }

  verDetalles(libro: Libro) {
    this.libroSeleccionado = libro;
  }

  cerrarModal() {
    this.libroSeleccionado = null;
  }

  agregarAlCarrito(libro: Libro) {
    this.carritoService.agregarLibroAlCarrito(libro);
    this.cerrarModal();  // Cierra el modal de detalles
    this.libroSeleccionado = null;  // Limpia el libro seleccionado
    this.mostrarModalPedido = true;  // Muestra el modal de confirmación
  }

  ngOnDestroy(): void {
    if (this.datosSubscription) {
      this.datosSubscription.unsubscribe();
    }
  }

  // Manejador para el evento de cierre del modal de confirmación
  cerrarModalPedido() {
    this.mostrarModalPedido = false;
  }
}
