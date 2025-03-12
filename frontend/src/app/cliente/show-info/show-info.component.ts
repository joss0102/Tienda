import { Component, Input } from '@angular/core';
import { Location, NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-show-info',
  imports: [NgIf,RouterLink],
  templateUrl: './show-info.component.html',
  styleUrls: ['./show-info.component.scss']
})
export class ShowInfoComponent {
  @Input() libro: any;  // Recibe el libro seleccionado

  constructor(private location: Location) {}

  volverAtras(): void {
    this.location.back();
  }
}
