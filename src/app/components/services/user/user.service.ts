import { HttpClient, HttpErrorResponse, HttpEvent, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, EMPTY, filter, map, Observable, tap, throwError } from 'rxjs';
import { User } from '../../models/user.model';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private _userDetailUrl: string = `https://backend-serv-d5gugpfwcvf6c7bd.northeurope-01.azurewebsites.net/customer/detail`;

  constructor(private http: HttpClient,
              private authService: AuthService,
              private router: Router
  ) { }

  getUserDetail(): Observable<HttpResponse<User>>{
    return this.http.get<User>(this._userDetailUrl,{ observe: 'response' }).pipe(
      catchError(error => this.handleError(error)),
      filter(response => response.status !== 401 && response.body !== null)
    );
  }

  private handleError(error: HttpErrorResponse){
    if(error.status === 401 || error.status === 403){
      this.authService.logout();
      this.router.navigate(['/login']);
      return EMPTY;
    }
    return throwError(() => new Error(`Server error occurs`));
  }
  
}
