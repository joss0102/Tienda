import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importa CommonModule
import { MenuMovilesComponent } from '../menu-moviles/menu-moviles.component';
import { RouterModule } from '@angular/router';
import { CarritoService } from '../../services/carrito.service';

@Component({
  selector: 'app-header-cliente',
  standalone: true,
  imports: [CommonModule, MenuMovilesComponent, RouterModule], // Agrega CommonModule aquí
  templateUrl: './header-cliente.component.html',
  styleUrl: './header-cliente.component.scss'
})
export class HeaderClienteComponent implements OnInit{
  cantidadLibrosEnCarrito: number = 0;

  constructor(private carritoService: CarritoService) {}

  ngOnInit() {
    this.cantidadLibrosEnCarrito = this.carritoService.obtenerCantidadLibros();
  }

  // Si quieres que se actualice automáticamente, puedes suscribirte
  actualizarCantidadLibros() {
    this.cantidadLibrosEnCarrito = this.carritoService.obtenerCantidadLibros();
  }
}
