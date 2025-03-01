import { Component, OnInit } from '@angular/core';
import { ChartConfiguration, ChartDataset, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({ // tercera
  selector: 'app-graphic-cuarta-caja',
  imports: [BaseChartDirective],
  standalone: true,
  templateUrl: './graphic-cuarta-caja.component.html',
  styleUrl: './graphic-cuarta-caja.component.scss'
})
export class GraphicCuartaCajaComponent implements OnInit {
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
          text: "Meses",
          font: { size: 14, weight: "bolder" }
        }
      },
      y: {
        title: {
          display: true,
          text: "Libros",
          font: { size: 14, weight: "bolder" }
        },
        ticks: {
          stepSize: 10
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
      label: "Libros leídos",
      borderColor: "blue",
      borderWidth: 2,
      fill: false,
      pointBackgroundColor: "blue",
      pointBorderColor: "blue",
      pointRadius: 5
    },
    {
      data: [],
      label: "Objetivo",
      borderColor: "red",
      borderWidth: 2,
      fill: false,
      pointBackgroundColor: "red",
      pointBorderColor: "red",
      pointRadius: 5
    }
  ];

  public lineChartType: ChartType = 'line';

  private setChartData(): void {
    const data = {
      labels: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"],
      values1: [10, 4, 7, 8, 0, 0, 0, 3, 12, 11, 2, 0],
      values2: [2, 5, 5, 7, 8, 1, 0, 0, 3, 10, 10, 5]
    };

    this.lineChartLabels = data.labels;
    this.lineChartData[0].data = data.values1;
    this.lineChartData[1].data = data.values2;
  }
}
