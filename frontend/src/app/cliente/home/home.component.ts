import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Subscription } from 'rxjs';
import { ProductService } from '../../services/service/product.service';  // Importar el servicio de productos

@Component({
  selector: 'app-home',
  imports: [CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  datos: any[] = [];  // Aquí guardaremos los productos obtenidos
  productosDestacados: any[] = [];  // Guardaremos los tres productos más populares
  private datosSubscription!: Subscription;  // Subscription para manejar la suscripción a los productos

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    // Llamamos al servicio para obtener los productos al inicializar el componente
    this.datosSubscription = this.productService.getAllProducts().subscribe(
      (response) => {
        this.datos = response;  // Asignamos los productos obtenidos al array `datos`

        // Ordenamos los productos por popularidad (suponiendo que tienen un campo 'popularity')
        this.productosDestacados = this.datos
          .sort((a, b) => b.popularity - a.popularity)  // Ordenamos de mayor a menor popularidad
          .slice(0, 3);  // Tomamos solo los 3 primeros
      },
      (error) => {
        console.error('Error al obtener los productos:', error);  // Manejamos posibles errores
      }
    );
  }

  ngOnDestroy(): void {
    // Limpiamos la suscripción para evitar fugas de memoria
    if (this.datosSubscription) {
      this.datosSubscription.unsubscribe();
    }
  }
}
