// header-cliente.component.ts
import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuMovilesComponent } from '../menu-moviles/menu-moviles.component';
import { RouterModule } from '@angular/router';
import { CarritoService } from '../../services/service/carrito.service';
import { TokenService } from '../../services/auth/token.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header-cliente',
  standalone: true,
  imports: [CommonModule, MenuMovilesComponent, RouterModule],
  templateUrl: './header-cliente.component.html',
  styleUrls: ['./header-cliente.component.scss']
})
export class HeaderClienteComponent implements OnInit, OnDestroy {
  cantidadLibrosEnCarrito: number = 0;
  private carritoSubscription!: Subscription;

  // Añadimos una propiedad para determinar si el usuario está logueado
  isLoggedIn: boolean = false;

  constructor(
    private carritoService: CarritoService,
    private tokenService: TokenService,  // Inyectamos el TokenService
  ) {}

  ngOnInit() {
    this.carritoSubscription = this.carritoService.obtenerLibrosEnCarritoObservable().subscribe(libros => {
      this.cantidadLibrosEnCarrito = libros.length;
    });

    // Comprobamos si el usuario está logueado
    this.isLoggedIn = this.tokenService.hasAccessToken();
  }

  ngOnDestroy() {
    if (this.carritoSubscription) {
      this.carritoSubscription.unsubscribe();
    }
  }

  // Método para cerrar sesión
  logout(): void {
    this.tokenService.clearTokens();
    this.isLoggedIn = false; // Cambiamos el estado de la variable para actualizar la vista
  }
}
