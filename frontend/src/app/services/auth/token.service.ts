// token.service.ts
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  private readonly ACCESS_TOKEN_KEY: string = 'tienda_token';
  private readonly REFRESH_TOKEN_KEY: string = 'tienda_refresh_token';

  constructor(private cookieService: CookieService) {}

  // Guardar los tokens en las cookies
  saveTokens(token: string, refreshToken: string): void {
    console.log('Guardando tokens:', token, refreshToken);  // Log para verificar los valores de los tokens
    this.cookieService.set(this.ACCESS_TOKEN_KEY, token, {
      path: "/",
      secure: environment.tokenSecure, // En producción esto tiene que ser true
      sameSite: "Strict"
    });

    this.cookieService.set(this.REFRESH_TOKEN_KEY, refreshToken, {
      path: "/",
      secure: environment.tokenSecure, // En producción esto tiene que ser true
      sameSite: "Strict"
    });
  }

  // Obtener el token de acceso desde las cookies
  getAccessToken(): string | null {
    const token = this.cookieService.get(this.ACCESS_TOKEN_KEY);
    console.log('Obteniendo token de acceso:', token);  // Log para verificar el valor
    return token || null;
  }

  // Obtener el token de refresco desde las cookies
  getRefreshToken(): string | null {
    const token = this.cookieService.get(this.REFRESH_TOKEN_KEY);
    console.log('Obteniendo token de refresco:', token);  // Log para verificar el valor
    return token || null;
  }

  // Eliminar los tokens de las cookies
  removeToken(): void {
    console.log('Eliminando tokens');
    this.cookieService.delete(this.ACCESS_TOKEN_KEY, '/', '', environment.tokenSecure, 'Strict');
    this.cookieService.delete(this.REFRESH_TOKEN_KEY, '/', '', environment.tokenSecure, 'Strict');
  }

  // Eliminar todos los tokens (esto puede ser útil cuando se cierra sesión)
  clearTokens(): void {
    this.removeToken();  // Llamamos al método removeToken para limpiar ambos tokens
  }

  // Verificar si el token de acceso está presente
  hasAccessToken(): boolean {
    return !!this.getAccessToken();  // Retorna true si hay un token de acceso
  }

  // Verificar si el token de refresco está presente
  hasRefreshToken(): boolean {
    return !!this.getRefreshToken();  // Retorna true si hay un token de refresco
  }
}
