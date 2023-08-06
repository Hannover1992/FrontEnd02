import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { ServiceAccessTokenService } from './service-access-token.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(private tokenService: ServiceAccessTokenService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (this.tokenService.getFullAccessToken()) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${this.tokenService.getFullAccessToken()}`
        }
      });
    }

    return next.handle(request);
  }
}
