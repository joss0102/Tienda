import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Subscription } from 'rxjs';
import { ProductService } from '../../services/service/product.service';

@Component({
  selector: 'app-home',
  imports: [CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  datos: any[] = [];
  productosDestacados: any[] = [];
  
  private datosSubscription!: Subscription;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {

    this.datosSubscription = this.productService.getAllProducts().subscribe(
      (response) => {
        this.datos = response;

        this.productosDestacados = this.datos
          .sort((a, b) => b.popularity - a.popularity)
          .slice(0, 3);
      },
      (error) => {
        console.error('Error al obtener los productos:', error);
      }
    );
  }

  ngOnDestroy(): void {
    if (this.datosSubscription) {
      this.datosSubscription.unsubscribe();
    }
  }
}
