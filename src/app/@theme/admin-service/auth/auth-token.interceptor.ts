import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpHandler, HttpRequest, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import { exhaustMap, take } from 'rxjs/operators';
import {TokenService} from '../token/token.service';
import {AdminConfig} from '../../../pages/AdminConfig';

@Injectable()
export class AuthTokenInterceptor implements HttpInterceptor {

  constructor(private tokenService: TokenService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = this.tokenService.getTokenWithExpiry('token');
    if (!token) {
      return next.handle(req);
    }
    const modifiedReq = req.clone({
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: `Bearer ` + token
      })
    });
    if (req.url == AdminConfig.generalUploadAPI) {
      return next.handle(req);
    }
    return next.handle(modifiedReq);
  }
}
