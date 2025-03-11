import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private apiUrl = `${environment.apiUrl}/products`;  // Asegúrate de que la URL esté configurada correctamente en environment

  constructor(private http: HttpClient) { }

  // Método para obtener todos los productos
  getAllProducts(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  // Método para obtener un producto por ID (no usado por ahora, pero útil para detalles)
  getProductById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }
}
