import { CanActivateFn, Router, ActivatedRouteSnapshot } from '@angular/router';
import { inject } from '@angular/core';

export const auth1Guard: CanActivateFn = (route: ActivatedRouteSnapshot, state) => {
  const router = inject(Router);
  const isAuthenticated = Boolean(localStorage.getItem('auth1'));

  if (route.routeConfig?.path === 'login') {
    if (isAuthenticated) {
      router.navigate(['/search']); // Redirect if already logged in
      return false;
    }
    return true; // Allow access to the login page
  }

  if (isAuthenticated) {
    return true; // Allow access to protected pages
  } else {
    router.navigate(['/login']); // Redirect to login if not authenticated
    return false;
  }
};
