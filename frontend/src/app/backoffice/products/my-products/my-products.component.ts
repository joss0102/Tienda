import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductService } from '../../../services/service/product.service';
import { environment } from '../../../../environments/environment';
import { TokenService } from '../../../services/auth/token.service';
import { Subscription } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { CreationProductComponent } from '../creation-product/creation-product.component';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-my-products',
  imports: [CreationProductComponent,NgIf,NgFor],
  templateUrl: './my-products.component.html',
  styleUrls: ['./my-products.component.scss']
})
export class MyProductsComponent implements OnInit, OnDestroy {
  productos: any[] = [];
  private subscription!: Subscription;
  userId!: number;
  showCreationProduct = false;

  constructor(
    private productService: ProductService,
    private tokenService: TokenService,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    const token = this.tokenService.getAccessToken();
    if (token) {
      const decodedToken = this.tokenService.decodeToken(token);
      this.userId = decodedToken?.userId ?? 0;

      if (this.userId !== 0) {
        this.subscription = this.productService.getAllProducts().subscribe(
          (response) => {
            this.productos = response.filter(producto => producto.seller.id === this.userId);
            console.log(this.productos);
          },
          (error) => {
            console.error('Error al obtener los productos:', error);
          }
        );
      } else {
        console.error('No se pudo obtener el userId del usuario autenticado.');
      }
    } else {
      console.error('No se encontró el token de sesión.');
    }
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  deleteProduct(id: number) {
    if (confirm('¿Estás seguro de eliminar este producto?')) {
      const apiUrl = `${environment.apiUrl}/products/${id}`;
      this.http.delete(apiUrl).subscribe(() => {
        this.productos = this.productos.filter(p => p.id !== id);
      });
    }
  }

  toggleCreateProduct() {
    this.showCreationProduct = !this.showCreationProduct;
    console.log("showCreationProduct:", this.showCreationProduct);
  }
  
  
  handleProductCreated(product: any) {
    this.productos.push(product); 
    this.toggleCreateProduct();
  }
}
