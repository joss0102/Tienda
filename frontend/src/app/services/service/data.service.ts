/*
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private apiUrl = 'http://localhost:8080/api/products';  // Cambia esta URL a la de tu API

  constructor(private http: HttpClient) { }

  // Método para obtener los datos desde el backend
  getDatos(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
*/