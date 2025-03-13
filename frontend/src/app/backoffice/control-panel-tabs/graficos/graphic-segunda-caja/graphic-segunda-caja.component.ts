import { Component, OnInit } from '@angular/core';
import { BaseChartDirective } from 'ng2-charts';
import { ChartConfiguration, ChartDataset, ChartType } from 'chart.js';
import { ProductService } from '../../../../services/service/product.service';

@Component({
  selector: 'app-graphic-segunda-caja',
  imports: [BaseChartDirective],
  standalone: true,
  templateUrl: './graphic-segunda-caja.component.html',
  styleUrl: './graphic-segunda-caja.component.scss'
})
export class GraphicSegundaCajaComponent implements OnInit {
  constructor(private productService: ProductService) {}
  ngOnInit(): void {
    this.setChartData();
  }
  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: 'bottom'
      }
    },
    interaction: {
      mode: 'index',
      intersect: false,
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Autores",
          font: { size: 14, weight: "bolder" }
        }
      },
      y: {
        title: {
          display: true,
          text: "Libros",
          font: { size: 14, weight: "bolder" }
        }
      }
    }
  };
  public barChartLabels: string[] = [];
  public barChartData: ChartDataset<'bar'>[] = [
    {
      data: [],
      label: "Libros",
      backgroundColor: ["red", "blue", "green", "yellow", "#6600b3"],
      hoverBackgroundColor: ["#b30000", "#0000b3", "#006600", "#b3b300", "purple"],
    }
  ];
  public barChartType: ChartType = 'bar';
  private setChartData(): void {
    this.productService.getAllProducts().subscribe(
      (products) => {
        if (!products || products.length === 0) {
          console.warn('Advertencia: No se recibieron productos');
          return;
        }
        const autorMap = new Map<string, number>();
        products.forEach(product => {
          if (product.author) {
            autorMap.set(product.author, (autorMap.get(product.author) || 0) + 1);
          } else {
            console.warn('Producto sin autor:', product);
          }
        });
        this.barChartLabels = Array.from(autorMap.keys());
        this.barChartData[0].data = Array.from(autorMap.values());
      },
      (error) => {
        console.error('Error al obtener productos:', error);
      }
    );
  }
}
