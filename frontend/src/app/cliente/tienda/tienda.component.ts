import { Component, OnInit, OnDestroy } from '@angular/core';
import { CarritoService } from '../../services/service/carrito.service';
import { Libro } from '../../services/models/libro.model';
import { NgFor, NgIf } from '@angular/common';
import { ProductService } from '../../services/service/product.service';
import { Subscription } from 'rxjs';
import { ShowInfoComponent } from '../show-info/show-info.component';

@Component({
  selector: 'app-tienda',
  standalone: true,
  imports: [NgFor, NgIf,ShowInfoComponent],
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

  constructor(
    private carritoService: CarritoService,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    this.datosSubscription = this.productService.getAllProducts().subscribe(
      (response: Libro[]) => {
        console.log(response);  // Verifica la respuesta completa de la API
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

  ngOnDestroy(): void {
    if (this.datosSubscription) {
      this.datosSubscription.unsubscribe();
    }
  }
}
