import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CarritoService } from '../../services/carrito.service';
import { CompraComponent } from "../tabs/compra/compra.component";
import { CarritoComponent } from "../carrito/carrito.component";


class Libro {
  constructor(
    public titulo: string,
    public autor: string,
    public genero: string,
    public disponible: boolean,
    public precio: number,
    public imagen: string,
    public descripcion: string
  ) {}
}

@Component({
  selector: 'app-tienda',
  imports: [CommonModule, CompraComponent, CarritoComponent],
  standalone: true,
  templateUrl: './tienda.component.html',
  styleUrls: ['./tienda.component.scss']
})
export class TiendaComponent {
  librosDestacados: Libro[] = [
    new Libro('Trono de cristal', 'Sarah J. Maas', 'Fantasía', true, 22.99, '/Trono de cristal.png', 'Primera parte.'),
    new Libro('Corona de medianoche', 'Sarah J. Maas', 'Fantasía', true, 22.50, '/Corona de medianoche.png', 'Segunda parte.'),
    new Libro('La espada de la asesina', 'Sarah J. Maas', 'Fantasía', true, 23.99, '/La espada de la asesina.png', 'Tercera parte. (Spin off)'),
    new Libro('Heredera de fuego', 'Sarah J. Maas', 'Fantasía', true, 24.99, '/Heredera de fuego.png', 'Cuarta parte.'),
    new Libro('Reina de sombras', 'Sarah J. Maas', 'Fantasía', true, 25.99, '/Reina de sombras.png', 'Quinta parte.'),
    new Libro('Imperio de tormentas', 'Sarah J. Maas', 'Fantasía', true, 26.99, '/Imperio de tormentas.png', 'Sexta parte.'),
    new Libro('Torre del alba', 'Sarah J. Maas', 'Fantasía', true, 26.99, '/Torre del alba.png', 'Séptima parte.'),
    new Libro('Reino de cenizas', 'Sarah J. Maas', 'Fantasía', true, 27.99, '/Reino de cenizas.png', 'Octava y última parte.')
  ];
  isVisible = false;
  libroSeleccionado: Libro | null = null;  // Almacena el libro seleccionado

  constructor(private carritoService: CarritoService) {}
  simpleFunction() {
    console.log("¡Función llamada!");
  }
  agregarAlCarrito(libro: Libro) {
    console.log("Libro agregado:", libro);  // Verifica si el libro se pasa correctamente
    this.carritoService.agregarLibro(libro);  // Agrega el libro al carrito
    console.log("Libro agregado al carrito en el servicio");
    this.isVisible = true;  // Muestra el mensaje de "Libro añadido"
    this.libroSeleccionado = libro;  // Almacena el libro seleccionado
    console.log("hola");  // Este mensaje debería aparecer en la consola
}




}
