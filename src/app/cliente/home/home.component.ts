import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CompraComponent } from "../tabs/compra/compra.component";
import { Libro } from '../../services/models/libro.model';
import { LibroService } from '../../services/service/libro-service.service';
@Component({
  selector: 'app-home',
  imports: [CommonModule, CompraComponent, RouterModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  isActiveItems: any = {
    isActiveNotification: false,
    isActiveSettings: false,
  };
  librosDestacados: Libro[] = [];

  constructor(private libroService: LibroService) {}

  ngOnInit(): void {
    const libros = this.libroService.getLibros();
    this.librosDestacados = libros
      .sort((a, b) => b.popularidad - a.popularidad)
      .slice(0, 3);
  }
}
