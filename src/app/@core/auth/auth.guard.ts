import { Injectable, computed, inject, Signal } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard {
  // Inject dependencies
  private router = inject(Router);
  private auth = inject(AuthService);

  // Function to check if the route can be activated
  canActivate(): boolean {
    // Use computed to reactively access the current state of isLoggedSignal
    const isLoggedSignal = computed(() => this.auth.isLogged());

    // If the user is logged in, allow access
    if (isLoggedSignal()) {
      return true;
    }

    // If the user is not logged in, navigate to the home page
    this.router.navigateByUrl('');
    return false;
  }
}
