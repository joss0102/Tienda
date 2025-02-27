// header-cliente.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importa CommonModule
import { MenuMovilesComponent } from '../menu-moviles/menu-moviles.component';
import { RouterModule } from '@angular/router';
import { CarritoService } from '../../services/service/carrito.service';
import { Subscription } from 'rxjs'; // Importa Subscription

@Component({
  selector: 'app-header-cliente',
  standalone: true,
  imports: [CommonModule, MenuMovilesComponent, RouterModule], // Agrega CommonModule aquí
  templateUrl: './header-cliente.component.html',
  styleUrls: ['./header-cliente.component.scss']
})
export class HeaderClienteComponent implements OnInit {
  cantidadLibrosEnCarrito: number = 0;
  private carritoSubscription!: Subscription;


  constructor(private carritoService: CarritoService) {}

  ngOnInit() {
    // Se suscribe al observable para obtener la cantidad de libros
    this.carritoSubscription = this.carritoService.obtenerLibrosEnCarritoObservable().subscribe(libros => {
      this.cantidadLibrosEnCarrito = libros.length;
    });
  }

  ngOnDestroy() {
    // Asegurarse de cancelar la suscripción cuando el componente se destruye
    if (this.carritoSubscription) {
      this.carritoSubscription.unsubscribe();
    }
  }
}
