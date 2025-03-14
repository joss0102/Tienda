import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { TokenService } from '../auth/token.service';

import { UseStateService } from '../auth/use-state.service';

export const adminGuard: CanActivateFn = (route, state) => {
  const tokenService = inject(TokenService);
  const router = inject(Router);
  const useStateService = inject(UseStateService);

  // Verificar si el token de acceso existe
  const accessToken = tokenService.getAccessToken();
  const userRole = useStateService.getRole(); // Supongo que usas `UseStateService` para gestionar el rol del usuario

  // Si no hay token o el rol no es ADMIN, redirigir a home
  if (!accessToken || userRole !== 'ADMIN') {
    router.navigate(['/']);  // Redirige a la página principal
    return false;
  }

  // Si es ADMIN, permitir el acceso
  return true;
};
