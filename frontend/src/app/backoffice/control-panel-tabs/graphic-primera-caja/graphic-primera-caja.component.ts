import { Component, OnInit } from '@angular/core'; 
import { BaseChartDirective } from 'ng2-charts';
import { ChartConfiguration, ChartDataset, ChartType } from 'chart.js';
import { LibroService } from '../../../services/service/libro-service.service';

@Component({
  selector: 'app-graphic-primera-caja',
  imports: [BaseChartDirective],
  standalone: true,
  templateUrl: './graphic-primera-caja.component.html',
  styleUrl: './graphic-primera-caja.component.scss'
})
export class GraphicPrimeraCajaComponent implements OnInit {

  constructor(private libroService: LibroService) {}

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
        text: "Primer gráfico",
        display: true,
      }
    },
  };

  public doughnutChartLabels: string[] = [];
  public doughnutChartData: { labels: string[], datasets: ChartDataset<'doughnut'>[]} = {
    labels: [],
    datasets: [{
      data: [],
      backgroundColor: [],
      hoverBackgroundColor: ["#357ABD", "#E94E3A", "#6C3483", "#FF85A2"],
    }]
  };

  public doughnutChartType: ChartType = 'doughnut';

  private setChartData(): void {
    const libros = this.libroService.getLibros();
    
    const generoMap = new Map<string, number>();
    libros.forEach(libro => {
      generoMap.set(libro.genero, (generoMap.get(libro.genero) || 0) + 1);
    });

    this.doughnutChartLabels = Array.from(generoMap.keys());
    this.doughnutChartData.labels = Array.from(generoMap.keys());
    this.doughnutChartData.datasets[0].data = Array.from(generoMap.values());
    this.doughnutChartData.datasets[0].backgroundColor = ["#4A90E2", "#FF6F61", "#8E44AD", "#FFB6C1", "#FFD700", "#20B2AA", "#FF4500", "#DA70D6"];
  }
}
