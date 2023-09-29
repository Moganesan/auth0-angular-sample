import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'; // Import the map operator
import { AuthService } from '@auth0/auth0-angular';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private auth: AuthService) {
    console.log('Auth Guard Call');
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return this.auth.idTokenClaims$.pipe(
      map((claims) => {
        if (claims) {
          console.log('CLaimed', claims);
          const userRoles: string[] = claims['http://localhost:4000//roles']; // Replace with your namespace for roles
          const rolesRequired: string[] = next.data.roles;

          const hasRequiredRoles = rolesRequired.some((role) =>
            userRoles.includes(role)
          );

          if (hasRequiredRoles) {
            console.log('User has required roles');
            return true;
          } else {
            alert('Unauthorized');
            console.log('User does not have required roles');
            return false;
          }
        } else {
          console.log('No claims available');
          return false;
        }
      })
    );
  }
}
