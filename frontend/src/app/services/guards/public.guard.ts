import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { TokenService } from '../auth/token.service';

export const publicGuard: CanActivateFn = (route, state) => {
  const tokenService = inject(TokenService);
  const router = inject(Router);

  // Obtener los tokens
  const accessToken = tokenService.getAccessToken();
  //const refreshToken = tokenService.getRefreshToken();

  // Depuración: Verificar los valores de los tokens
  console.log('Access Token:', accessToken);
  //console.log('Refresh Token:', refreshToken);

  // Si el token de acceso está presente, redirigir a la página principal
  if (accessToken) {
    console.log('Token encontrado, redirigiendo a la página principal');
    router.navigate(['/']);  // Asegúrate de que esta ruta es la correcta
    return false;  // No permitir acceso a la página de login
  }

  // Si no hay token, permitir acceso a la página de login
  return true;
};
