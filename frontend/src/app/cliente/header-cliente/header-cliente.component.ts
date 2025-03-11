import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuMovilesComponent } from '../menu-moviles/menu-moviles.component';
import { RouterModule } from '@angular/router';
import { CarritoService } from '../../services/service/carrito.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header-cliente',
  standalone: true,
  imports: [CommonModule, MenuMovilesComponent, RouterModule],
  templateUrl: './header-cliente.component.html',
  styleUrls: ['./header-cliente.component.scss']
})
export class HeaderClienteComponent implements OnInit {
  cantidadLibrosEnCarrito: number = 0;
  private carritoSubscription!: Subscription;


  constructor(private carritoService: CarritoService) {}

  ngOnInit() {
    this.carritoSubscription = this.carritoService.obtenerLibrosEnCarritoObservable().subscribe(libros => {
      this.cantidadLibrosEnCarrito = libros.length;
    });
  }

  ngOnDestroy() {
    if (this.carritoSubscription) {
      this.carritoSubscription.unsubscribe();
    }
  }
}
