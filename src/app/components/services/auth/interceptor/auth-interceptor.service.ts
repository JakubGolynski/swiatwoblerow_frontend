import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService implements HttpInterceptor{

  constructor(private authService: AuthService) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = this.authService.getJwtToken();
    if(token === null){
      return next.handle(req);
    }else{
      const clonedRequest = req.clone({
        headers: req.headers.set(`Authorization`,`Bearer ${token}`)
      });
      return next.handle(clonedRequest);
    }
  }
}
