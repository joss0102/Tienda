import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-menu-moviles',
  imports: [ CommonModule, RouterModule ],
  templateUrl: './menu-moviles.component.html',
  styleUrl: './menu-moviles.component.scss'
})
export class MenuMovilesComponent {
  isMenuOpen=false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
