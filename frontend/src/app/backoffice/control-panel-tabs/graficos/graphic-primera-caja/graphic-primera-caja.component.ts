import { Component, OnInit } from '@angular/core';
import { BaseChartDirective } from 'ng2-charts';
import { ChartConfiguration, ChartDataset, ChartType } from 'chart.js';
import { ProductService } from '../../../../services/service/product.service';

@Component({
  selector: 'app-graphic-primera-caja',
  imports: [BaseChartDirective],
  standalone: true,
  templateUrl: './graphic-primera-caja.component.html',
  styleUrl: './graphic-primera-caja.component.scss'
})
export class GraphicPrimeraCajaComponent implements OnInit {
  constructor(private productService: ProductService) {}
  ngOnInit(): void {
    this.setChartData();
  }
  public doughnutChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: 'bottom'
      },
      tooltip: {},
      title: {
        text: "Gráfico de Géneros",
        display: true,
      }
    },
  };
  public doughnutChartLabels: string[] = [];
  public doughnutChartData: { labels: string[], datasets: ChartDataset<'doughnut'>[]} = {
    labels: [],
    datasets: [{
      data: [],
      backgroundColor: ["#4A90E2", "#FF6F61", "#8E44AD", "#FFB6C1", "#FFD700", "#20B2AA", "#FF4500", "#DA70D6"],
    }]
  };
  public doughnutChartType: ChartType = 'doughnut';
  private setChartData(): void {
    this.productService.getAllProducts().subscribe(
      (products) => {
        if (!products || products.length === 0) {
          console.warn('Advertencia: No se recibieron productos');
          return;
        }
        const generoMap = new Map<string, number>();
        products.forEach(product => {
          if (product.genre1) {
            generoMap.set(product.genre1, (generoMap.get(product.genre1) || 0) + 1);
          } else {
            console.warn('Producto sin genre1:', product);
          }
          if (product.genre2) {
            generoMap.set(product.genre2, (generoMap.get(product.genre2) || 0) + 1);
          } else {
            console.warn('Producto sin genre2:', product);
          }
        });
        this.doughnutChartLabels = Array.from(generoMap.keys());
        this.doughnutChartData.labels = this.doughnutChartLabels;
        this.doughnutChartData.datasets[0].data = Array.from(generoMap.values());
      },
      (error) => {
        console.error('Error al obtener productos:', error);
      }
    );
  }
}
