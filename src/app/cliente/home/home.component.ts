import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CompraComponent } from "../tabs/compra/compra.component";
import { Libro } from '../../services/models/libro.model';
import { LibroService } from '../../services/libro-service.service';


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
    // Obtener los libros y ordenarlos por popularidad de mayor a menor
    const libros = this.libroService.getLibros();
    // Ordenar los libros por popularidad y tomar los 3 primeros
    this.librosDestacados = libros
      .sort((a, b) => b.popularidad - a.popularidad)  // Ordenar de mayor a menor por popularidad
      .slice(0, 3);  // Tomar los primeros 3 libros
  }
}
