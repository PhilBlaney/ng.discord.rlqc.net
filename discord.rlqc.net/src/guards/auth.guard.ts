import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { NavbarService } from 'src/services/navbar-service.service';

export const authGuard: CanActivateFn = async (route, state) => {
  const navbarService = inject(NavbarService);
  const router = inject(Router);
  if(await navbarService.validatePermission())
  {
    return true;
  }
  return router.parseUrl('/accessdenied');
};
