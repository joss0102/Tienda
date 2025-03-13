import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../services/service/product.service';
import { InfoStatsComponent } from '../info-stats/info-stats.component';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-stats',
  imports: [InfoStatsComponent, NgFor,NgIf],
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss']
})
export class StatsComponent implements OnInit {

  productos: any[] = [];
  totalLibros: number = 0;
  totalGeneros: number = 0;
  totalGasto: number = 0;
  totalAutores: number = 0;
  showInfoStats: boolean = false;
  tipoInfo: string = '';

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getAllProducts().subscribe(
      (response) => {
        this.productos = response;
        this.calcularEstadisticas();
      },
      (error) => {
        console.error('Error al obtener los productos:', error);
      }
    );
  }

  calcularEstadisticas() {
    this.totalLibros = this.productos.length;

    const generosSet = new Set();
    let totalPrecio = 0;
    const autoresSet = new Set();

    this.productos.forEach((producto) => {

      generosSet.add(producto.genre1);
      if (producto.genre2) generosSet.add(producto.genre2);
      totalPrecio += producto.price;

      autoresSet.add(producto.author);
    });

    this.totalGeneros = generosSet.size;
    this.totalGasto = totalPrecio;
    this.totalAutores = autoresSet.size;
  }

  showInfo(tipo: string) {
    this.tipoInfo = tipo;
    this.showInfoStats = true;
  }

  cerrarInfoStats() {
    this.showInfoStats = false;
  }
}
