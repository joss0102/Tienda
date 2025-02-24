import {Component, OnInit} from '@angular/core';
import {ChartConfiguration, ChartDataset, ChartType} from 'chart.js';
import {BaseChartDirective} from 'ng2-charts';

@Component({
  selector: 'app-graphic-tercera-caja',
  imports: [
    BaseChartDirective
  ],
  standalone: true,
  templateUrl: './graphic-tercera-caja.component.html',
  styleUrl: './graphic-tercera-caja.component.scss'
})
export class GraphicTerceraCajaComponent implements OnInit {


  ngOnInit(): void {
    this.setChartData();
  }

  public lineChartOptions: ChartConfiguration['options'] = {
    responsive: true, // Línea obligatoria
    maintainAspectRatio: false, // Proporción del gráfico
    plugins: {
      legend: { // campo opcional
        display: true,
        position: 'bottom'
      }
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Meses",
          font: {size: 14, weight: "bolder"}
        }
      },
      y: {
        title: {
          display: true,
          text: "Páginas",
          font: {size: 14, weight: "bolder"}
        },
        ticks: {
          stepSize: 10,
        }
      }
    },
    interaction: {
      mode: 'index',
      intersect: false
    }
  }

  public lineChartLabels: string[] = []
  public lineChartData: ChartDataset<'line'>[] = [
    {
      data: [],
      label: "Páginas",
      backgroundColor: [],
      hoverBackgroundColor: [],
      borderColor: "blue", // Color de la línea
      borderWidth: 2, // Grosor de la línea
      fill: false, // No rellenar debajo de la línea
      pointBackgroundColor: "blue", // Color de los puntos
      pointBorderColor: "blue",
      pointRadius: 5 // Tamaño de los puntos
    }
  ];

  public lineChartType: ChartType = 'line';


  private setChartData(): void {
    const data = {
      labels: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"],
      values: [5983, 3459, 4506, 5757, 0, 0, 0, 1250, 4918, 4118, 974, 0]
    }

    this.lineChartLabels = data.labels;
    this.lineChartData[0].data = data.values
  }


  }