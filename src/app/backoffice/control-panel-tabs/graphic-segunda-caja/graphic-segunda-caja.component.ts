import { Component, OnInit } from '@angular/core'; 
import { BaseChartDirective } from 'ng2-charts';
import { ChartConfiguration, ChartDataset, ChartType } from 'chart.js';
import { LibroService } from '../../../services/service/libro-service.service';

@Component({
  selector: 'app-graphic-segunda-caja',
  imports: [BaseChartDirective],
  standalone: true,
  templateUrl: './graphic-segunda-caja.component.html',
  styleUrl: './graphic-segunda-caja.component.scss'
})
export class GraphicSegundaCajaComponent implements OnInit {

  constructor(private libroService: LibroService) {}

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
    const libros = this.libroService.getLibros();
    
    const autorMap = new Map<string, number>();
    libros.forEach(libro => {
      autorMap.set(libro.autor, (autorMap.get(libro.autor) || 0) + 1);
    });

    this.barChartLabels = Array.from(autorMap.keys());
    this.barChartData[0].data = Array.from(autorMap.values());
  }
}
