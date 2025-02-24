import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CarritoService } from '../../services/carrito.service';
import { NgIf } from '@angular/common';
import { CompraComponent } from '../tabs/compra/compra.component';

@Component({
  selector: 'app-tienda',
  imports: [CommonModule, NgIf, CompraComponent],
  standalone: true,
  templateUrl: './tienda.component.html',
  styleUrls: ['./tienda.component.scss']
})
export class TiendaComponent {
  libroSeleccionado: any = null;  // Variable que guarda el libro seleccionado

  librosDestacados = [
    { 
      titulo: 'Trono de cristal', 
      precio: 22.99, 
      imagen: '/Trono de cristal.png',
      descripcion: 'Primera parte.'
    },
    { 
      titulo: 'Corona de medianoche', 
      precio: 22.50, 
      imagen: '/Corona de medianoche.png',
      descripcion: 'Segunda parte.'
    },
    { 
      titulo: 'La espada de la asesina', 
      precio: 23.99, 
      imagen: '/La espada de la asesina.png',
      descripcion: 'Tercera parte. (Spin off)'
    },
    { 
      titulo: 'Heredera de fuego', 
      precio: 24.99, 
      imagen: '/Heredera de fuego.png',
      descripcion: 'Cuarta parte.'
    },
    { 
      titulo: 'Reina de sombras', 
      precio: 25.99, 
      imagen: '/Reina de sombras.png',
      descripcion: 'Quinta parte.'
    },
    { 
      titulo: 'Imperio de tormentas', 
      precio: 26.99, 
      imagen: '/Imperio de tormentas.png',
      descripcion: 'Sexta parte.'
    },
    { 
      titulo: 'Torre del alba', 
      precio: 26.99, 
      imagen: '/Torre del alba.png',
      descripcion: 'Septima parte.'
    },
    { 
      titulo: 'Reino de cenizas', 
      precio: 27.99, 
      imagen: '/Reino de cenizas.png',
      descripcion: 'Octova y ultima parte'
    },
  ];

  // Método para seleccionar un libro y mostrar el mensaje
  agregarAlCarrito(libro: any) {
    this.libroSeleccionado = libro; // Asigna el libro seleccionado a la variable
  }
}
