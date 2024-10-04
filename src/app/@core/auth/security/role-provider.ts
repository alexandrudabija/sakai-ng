import { Injectable } from '@angular/core';
import { AuthService } from '../auth.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable()
export class RoleProvider   {
  constructor(private authService: AuthService) {
  }
  // getRole(): Observable<string | string[]> {
      
  //     // return this.authService.onTokenChange().pipe(
  //     //     map((token: NbAuthJWTToken) => {
  //     //       return token.isValid() ? token.getPayload()['role'] : 'guest';
  //     //     }),
  //     // );
    
  
  // }

}
 