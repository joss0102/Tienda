import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-info-stats',
  imports: [NgFor, NgIf],
  templateUrl: './info-stats.component.html',
  styleUrls: ['./info-stats.component.scss']
})
export class InfoStatsComponent {
  @Input() tipo: string = '';
  @Input() productos: any[] = [];
  @Output() cerrarModal = new EventEmitter<void>();

  getLibros() {
    return this.productos.map(producto => producto.title);
  }

  getGeneros() {
    const generos = new Set<string>();
    this.productos.forEach(producto => {
      generos.add(producto.genre1);
      if (producto.genre2) generos.add(producto.genre2);
    });
    return Array.from(generos);
  }

  getPrecios() {
    return this.productos.map(producto => `${producto.title}: ${producto.price} EUR`);
  }

  getAutores() {
    const autores = new Set<string>();
    this.productos.forEach(producto => autores.add(producto.author));
    return Array.from(autores);
  }

  cerrar() {
    this.cerrarModal.emit();
  }
}
