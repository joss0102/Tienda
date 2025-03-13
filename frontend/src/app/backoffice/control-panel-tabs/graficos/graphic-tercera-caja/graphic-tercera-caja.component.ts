import { Component, OnInit } from '@angular/core';
import { BaseChartDirective } from 'ng2-charts';
import { ChartConfiguration, ChartDataset, ChartType } from 'chart.js';
import { ProductService } from '../../../../services/service/product.service';

@Component({
  selector: 'app-graphic-tercera-caja',
  imports: [BaseChartDirective],
  standalone: true,
  templateUrl: './graphic-tercera-caja.component.html',
  styleUrl: './graphic-tercera-caja.component.scss'
})
export class GraphicTerceraCajaComponent implements OnInit {
  constructor(private productService: ProductService) {}
  ngOnInit(): void {
    this.setChartData();
  }
  public lineChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: 'bottom'
      }
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Libros",
          font: {size: 14, weight: "bolder"}
        }
      },
      y: {
        title: {
          display: true,
          text: "Precio (€)",
          font: {size: 14, weight: "bolder"}
        },
        ticks: {
          stepSize: 5,
        }
      }
    },
    interaction: {
      mode: 'index',
      intersect: false
    }
  };
  public lineChartLabels: string[] = [];
  public lineChartData: ChartDataset<'line'>[] = [
    {
      data: [],
      label: "Precio de los Libros",
      backgroundColor: "rgba(75, 192, 192, 0.2)",
      borderColor: "rgba(75, 192, 192, 1)",
      borderWidth: 2,
      fill: false,
      pointBackgroundColor: "rgba(75, 192, 192, 1)",
      pointBorderColor: "rgba(75, 192, 192, 1)",
      pointRadius: 5
    }
  ];
  public lineChartType: ChartType = 'line';
  private setChartData(): void {
    this.productService.getAllProducts().subscribe(
      (products) => {
        if (!products || products.length === 0) {
          console.warn('Advertencia: No se recibieron productos');
          return;
        }
        this.lineChartLabels = products.map(product => product.title);
        this.lineChartData[0].data = products.map(product => product.price);
      },
      (error) => {
        console.error('Error al obtener productos:', error);
      }
    );
  }
}
