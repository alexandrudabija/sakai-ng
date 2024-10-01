import { HttpClient } from '@angular/common/http';
import {  Injectable,  } from '@angular/core';
import { BehaviorSubject, map, Observable, shareReplay } from 'rxjs';
import { SignInRequestInterface, SignUpRequestInterface } from '../types/auth.type';
 import { JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '@angular/router';
// import { CurrentUserInterface } from '../types/user.type';
import { WebStorageService } from '../utils/web-storage.service';
import { CacheService } from '../utils/cache.service';
import { environment } from '../../../environments/environment';
import { CurrentUserInterface } from '../types/user.type';
@Injectable({
  providedIn: 'root'
})
export class AuthService  {
  currentUser$ = new BehaviorSubject<CurrentUserInterface | null | undefined>(undefined);
  isLogged$ = this.currentUser$.pipe(map(currentUser => currentUser !== undefined && currentUser !== null));
  signInUser$ = new BehaviorSubject<SignInRequestInterface | null | undefined>(undefined);
  signUpUser$ = new BehaviorSubject<SignUpRequestInterface | null | undefined>(undefined);
  private autoLogoutTimer: any;
  constructor(private http: HttpClient, private cacheService: CacheService, private jwtHelper: JwtHelperService,
    private webStorageService: WebStorageService, private router: Router,
   ) {

 this.currentUser$.next(this.webStorageService.get('user') || undefined);
  }




  signUpLocal(signUpRequest: SignUpRequestInterface): Observable<CurrentUserInterface> {
    return this.http.post<CurrentUserInterface>(environment.apiSignUpLocal, signUpRequest);
  }



  signInLocal(signInRequest: SignInRequestInterface): Observable<CurrentUserInterface> {
    return this.http.post<CurrentUserInterface>(environment.apiSignInLocal, signInRequest);
  }

  getCurrentUser(): Observable<CurrentUserInterface> {


    const cacheKey = 'user';

    return this.cacheService.getData<CurrentUserInterface>(cacheKey, environment.apiCurrentUser + this.getUserId()).pipe(
      shareReplay(1) // for each subscribe we give one data , we don't make http request for all subscribers !
    );
  }

  private getUserId(): number | null {

    return this.jwtHelper.decodeToken(this.webStorageService.get('token')).userId;

  }
  setCurrentUser(currentUser: CurrentUserInterface | null): void {
    this.currentUser$.next(currentUser);

    this.webStorageService.set('user', currentUser, 259200);

  }
//   signInGoogle(authCredentials: SignInRequestInterface): Observable<CurrentUserInterface> {
//     return this.http.post<CurrentUserInterface>(environment.apiSignInGoogle, authCredentials);
//   }

//   signUpGoogle(authCredentials: SignUpRequestInterface): Observable<CurrentUserInterface> {
//     return this.http.post<CurrentUserInterface>(environment.apiSignUpGoogle, authCredentials);
//   }


  private setAutoLogoutTimer(tokenExpirationDate: Date): void {

    const expirationTimeInMillis = tokenExpirationDate.getTime();

    const currentTimeInMillis = new Date().getTime();
    const timeUntilExpiration = expirationTimeInMillis - currentTimeInMillis;

    this.autoLogoutTimer = setTimeout(() => {
      this.logout();
    }, timeUntilExpiration);

  }

  setAuthToken(token: string) {
    this.webStorageService.set('token', token, 259200);
    this.setAutoLogoutTimer(this.jwtHelper.getTokenExpirationDate(token)!);
  }



  getUser(): CurrentUserInterface | null | undefined {
    return this.currentUser$.value;
  }



  getAuthToken(): string {
    return this.webStorageService.get('token');

  }

  isTokenExpired(token: string): boolean {
    return this.jwtHelper.isTokenExpired(token);
  }


  logout(): void {
    localStorage.removeItem('token');
    this.router.navigate(['/']);
    localStorage.removeItem('user');
    localStorage.removeItem('userOrders');
    this.currentUser$.next(null);
    // this.logOutAuthSocial();
  }
//   logOutAuthSocial(): void {
//     this.authSocialService.signOut().then(data => {

//     });
//   }

}
