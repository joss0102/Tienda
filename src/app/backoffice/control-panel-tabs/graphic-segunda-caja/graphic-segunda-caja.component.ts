import {Component, OnInit} from '@angular/core';
import {BaseChartDirective} from 'ng2-charts';
import {ChartConfiguration, ChartDataset, ChartType} from 'chart.js';

@Component({
  selector: 'app-graphic-segunda-caja',
  imports: [
    BaseChartDirective
  ],
  standalone: true,
  templateUrl: './graphic-segunda-caja.component.html',
  styleUrl: './graphic-segunda-caja.component.scss'
})
export class GraphicSegundaCajaComponent implements OnInit{


  ngOnInit(): void {
    this.setChartData();
  }

  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true, // Línea obligatoria
    maintainAspectRatio: false, // Proporción del gráfico
    plugins: {
      legend: { // campo opcional
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
          font: {size: 14, weight: "bolder"}
        }
      },
      y: {
        title: {
          display: true,
          text: "Libros",
          font: {size: 14, weight: "bolder"}
        }
      }
    }
  }

  public barChartLabels: string[] = []
  public barChartData: ChartDataset<'bar'>[] = [
    {
      data: [],
      label: "Libros",
      backgroundColor: ["red", "blue", "green", "yellow", "#6600b3"],
      hoverBackgroundColor: ["#b30000", "#0000b3", "#006600", "#b3b300", "#purple"],
    }
  ];

  public barChartType: ChartType = 'bar';


  private setChartData(): void {
    const data = {
      labels: ["Alba Zamora","Amber V.nicole","Brandon Sanderson","Carissa Broadbent","H.D. Carlton","Holly Black","Jay Kristoff","Jennifer L. Armentrout",
        "Laurent Roberts","Miriam Mosquera", "P.S. Pecat","Rebecca Yarros","Rina Kent","Sarah J. Maas","Stephanie Garber","Tahere Mafi"],
      values: [2,2,2,1,2,2,1,9,2,1,3,2,1,15,1,9]
    }

    this.barChartLabels = data.labels;
    this.barChartData[0].data = data.values;

    

    
  }

}
