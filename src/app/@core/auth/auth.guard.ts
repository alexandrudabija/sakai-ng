import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';
@Injectable({
  providedIn: 'root'
})

export class AuthGuard {

  constructor(private router: Router, private auth: AuthService) { }


  canActivate(): Observable<boolean> {

    return this.auth.isLogged$.pipe(map((isLoggedIn) => {
      if (isLoggedIn) {

        return true;
      }

       this.router.navigateByUrl('');
      return false;

    }))

 
  }

}