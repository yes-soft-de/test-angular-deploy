import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable, of} from 'rxjs';
import {TokenService} from '../token/token.service';

@Injectable({
  providedIn: 'root'
})
export class SuperAdminService implements CanActivate{

  constructor(private tokenService: TokenService,
              private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot,
              state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const isSuperAdmin = this.tokenService.isSuperAdmin();
    if (isSuperAdmin) {
      return isSuperAdmin;
    } else {
      this.router.navigate(['/']);
      return;
    }
  }
}
