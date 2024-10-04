import { HttpClient } from '@angular/common/http';
import { computed, effect, Injectable, signal, inject } from '@angular/core';
import { Observable, shareReplay, Subscription, timer } from 'rxjs';
import { SignInRequestInterface } from '../types/auth.type';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '@angular/router';
import { WebStorageService } from '../utils/web-storage.service';
import { CacheService } from '../utils/cache.service';
import { environment } from '../../../environments/environment';
import { CurrentUserInterface } from '../types/user.type';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private http = inject(HttpClient);
  private cacheService = inject(CacheService);
  private jwtHelper = inject(JwtHelperService);
  private webStorageService = inject(WebStorageService);
  private router = inject(Router);

  currentUser = signal<CurrentUserInterface | null | undefined>(undefined);
  isLogged = computed(() => this.currentUser() !== undefined && this.currentUser() !== null);
  private autoLogoutSubscription: Subscription | null = null;
  private expirationSignal = signal<number | null>(null); // Signal care reține timpul de expirare


  constructor() {

    this.currentUser.set(this.webStorageService.get('user') || undefined);

    effect(() => {

  


      const expirationTime = this.expirationSignal();
      if (expirationTime) {
        this.startAutoLogout(expirationTime);
      } else {
        this.clearAutoLogout();
      }
    });
  }


  setCredentials(credentials: any) {


    const decodedToken = this.jwtHelper.decodeToken(credentials.token);
    this.currentUser.set(decodedToken); // Set the current user signal
    this.webStorageService.set('user', decodedToken, decodedToken.exp);
    this.webStorageService.set('token', credentials.token, credentials.token);

    // Setăm signal-ul pentru expirare
    const timeUntilExpiration = decodedToken.exp * 1000 - Date.now();
    this.expirationSignal.set(timeUntilExpiration); // Setăm timpul rămas până la expirare

    this.router.navigate(['/']);

  }



  signInLocal(signInRequest: SignInRequestInterface): Observable<CurrentUserInterface> {


    return this.http.post<CurrentUserInterface>(environment.apiSignInLocal, signInRequest);
  }




  private startAutoLogout(timeUntilExpiration: number) {
    // Opriți orice timer anterior
    this.clearAutoLogout();

    // Folosiți `timer` din RxJS pentru a seta o acțiune la expirare
    this.autoLogoutSubscription = timer(timeUntilExpiration).subscribe(() => {
      this.logout();
    });
  }


  getCurrentUser(): CurrentUserInterface {

    return this.currentUser();

  }

  private getUserId(): number | null {

    return this.jwtHelper.decodeToken(this.webStorageService.get('token')).userId;

  }



  getUser(): CurrentUserInterface | null | undefined {
    return this.currentUser();
  }



  getAuthToken(): string {
    return this.webStorageService.get('token');

  }

  isTokenExpired(token: string): boolean {
    return this.jwtHelper.isTokenExpired(token);
  }


  logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    localStorage.removeItem('userOrders');
  
    this.currentUser.set(null);
    this.router.navigate(['/']);
    // console.log('logged out');

  }



  private clearAutoLogout() {
    if (this.autoLogoutSubscription) {
      this.autoLogoutSubscription.unsubscribe(); // Oprire timer RxJS
      this.autoLogoutSubscription = null;
    }
  }
}
