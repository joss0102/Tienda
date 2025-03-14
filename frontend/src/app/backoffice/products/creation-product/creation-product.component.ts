import { Component, Input, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { FormsModule } from '@angular/forms';
import { CommonModule, NgIf } from '@angular/common';

@Component({
  selector: 'app-creation-product',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './creation-product.component.html',
  styleUrls: ['./creation-product.component.scss']
})
export class CreationProductComponent {
  
  @Input() userId!: number;
  @Input() showCreationProduct!: boolean;
/*
  
  @Output() productCreated = new EventEmitter<any>();
  title: string = '';
  author: string = '';
  description: string = '';
  price: number | null = null;
  currency: string = 'EUR';

  newProduct = {
    title: '',
    author: '',
    description: '',
    price: 0,
    currency: 'EUR',
    seller: { id: 0 }
  };

  constructor(private http: HttpClient) {}

  createProduct() {
    if (this.title && this.author && this.description && this.price !== null && this.price > 0) {
      this.newProduct.seller.id = this.userId; // Asignar el userId al producto
      this.newProduct.title = this.title;
      this.newProduct.author = this.author;
      this.newProduct.description = this.description;
      this.newProduct.price = this.price;
      this.newProduct.currency = this.currency;

      const apiUrl = `${environment.apiUrl}/products`;
      this.http.post(apiUrl, this.newProduct).subscribe(
        (response) => {
          console.log('Producto creado:', response);
          this.productCreated.emit(response);
        },
        (error) => {
          console.error('Error al crear el producto:', error);
        }
      );
    } else {
      console.log('Formulario inválido');
    }
  }
    */
  closeModal() {
    this.showCreationProduct = false;
  }
  
}
