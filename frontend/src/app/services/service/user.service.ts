import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = `${environment.apiUrl}/users`;

  constructor(private http: HttpClient) { }

  getUserById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  changePassword(userId: number, oldPassword: string, newPassword: string): Observable<any> {
    return this.http.put(`${this.apiUrl}/${userId}/change-password`, { oldPassword, newPassword });
  }

    updateUser(userId: number, userData: any): Observable<any> {
      return this.http.put(`${this.apiUrl}/${userId}`, userData);
    }
}
