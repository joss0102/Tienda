import { Component, OnInit } from '@angular/core';
import { BaseChartDirective } from 'ng2-charts';
import { ChartConfiguration, ChartDataset, ChartType } from 'chart.js';
import { ProductService } from '../../../../services/service/product.service';

@Component({
  selector: 'app-graphic-cuarta-caja',
  imports: [BaseChartDirective],
  standalone: true,
  templateUrl: './graphic-cuarta-caja.component.html',
  styleUrl: './graphic-cuarta-caja.component.scss'
})
export class GraphicCuartaCajaComponent implements OnInit {
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
        position: 'top'
      },
      tooltip: {},
      title: {
        text: "Popularidad de Libros",
        display: true,
      }
    },
  };
  public lineChartLabels: string[] = [];
  public lineChartData: { labels: string[], datasets: ChartDataset<'line'>[] } = {
    labels: [],
    datasets: [
      {
        data: [],
        label: 'Popularidad de los Libros',
        fill: false,
        borderColor: '#4A90E2',
        tension: 0.1
      }
    ]
  };
  public lineChartType: ChartType = 'line';
  private setChartData(): void {
    this.productService.getAllProducts().subscribe(
      (products) => {
        if (!products || products.length === 0) {
          console.warn('No se recibieron productos');
          return;
        }
        products.forEach(product => {
          if (product.title && product.popularity) {
            this.lineChartLabels.push(product.title);
            this.lineChartData.datasets[0].data.push(product.popularity);
          }
        });
      },
      (error) => {
        console.error('Error al obtener los productos:', error);
      }
    );
  }
}
