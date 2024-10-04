import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse } from "@angular/common/http";
import { Injectable, inject } from '@angular/core';
import { AuthService } from "../auth.service";
import { Observable } from "rxjs";
import { environment } from "../../../../environments/environment";


@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  private auth = inject(AuthService);


  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = this.auth.getAuthToken();


    if (token && !this.auth.isTokenExpired(token)) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`,
          AuthorizationRoute: `Bearer ${environment.TOKEN_ROUTE}`
        }
      });



    } else {


      // this for protect all back-end routes without token !
      request = request.clone({
        setHeaders: {
          AuthorizationRoute: `Bearer ${environment.TOKEN_ROUTE}`
        }
      });


    }

    return next.handle(request);

  }




}