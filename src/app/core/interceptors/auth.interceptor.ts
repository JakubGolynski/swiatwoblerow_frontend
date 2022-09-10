import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { BehaviorSubject, catchError, Observable, throwError } from 'rxjs';
import { AuthService } from '../services/auth/auth.service';
import { JwtService } from '../services/auth/jwt.service';
import {distinctUntilChanged, tap} from 'rxjs/operators';
import { User } from '../models/classes/user';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(
    private jwtService: JwtService
    ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(this.addJwtTokenToRequest(request)).pipe(
      catchError(error => {
        if(error instanceof HttpErrorResponse && error.status === 401){
          // return this.handleUnauthorizedError(error);
          return throwError(() => new Error("User is not authorized"));
        }
        // else if()
        return throwError(() => new Error("User is not authenticated"));
      })
    );
  }
  handleUnauthorizedError(error: HttpErrorResponse): any {
    
    throw new Error('Method not implemented.');
  }

  addJwtTokenToRequest(request: HttpRequest<unknown>){
    const token = this.jwtService.getJwtToken();

    if(!token){
      return request;
    }

    return request.clone({
      headers: request.headers.set('Content-Type','application/json')
      .set('Accept', 'application/json')
      .set('Authorization','Bearer '+token)
    });
  }
}
