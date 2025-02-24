import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CompraComponent } from "../tabs/compra/compra.component";

@Component({
  selector: 'app-home',
  imports: [CommonModule, CompraComponent, RouterModule], // Asegura que NgFor y NgIf estén disponibles
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  isActiveItems: any = {
    isActiveNotification: false,
    isActiveSettings: false,
  }
  librosDestacados = [
    { 
      titulo: 'Corona de medianoche', 
      precio: 22.50, 
      imagen: '/Corona de medianoche.png',
      descripcion: 'Segunda parte'
    },
    { 
      titulo: 'Reino de cenizas', 
      precio: 27.99, 
      imagen: '/Reino de cenizas.png',
      descripcion: 'Octava y ultima parte'
    },
    { 
      titulo: 'Reina de sombras', 
      precio: 25.99, 
      imagen: '/Reina de sombras.png',
      descripcion: 'Quinta parte'
    }
  ];
  toggleItem(option: string) {
    if (this.isActiveItems[option]) {
      this.isActiveItems[option] = false;
    }
    else {
      Object.keys(this.isActiveItems).forEach((item) => {
        this.isActiveItems[item] = false;
      })
      this.isActiveItems[option] = true;
    }
  }
}
