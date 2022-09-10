import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, catchError, Observable, throwError } from 'rxjs';
import { User } from '../../models/classes/user';
import {distinctUntilChanged, map} from 'rxjs/operators';
import { JwtService } from './jwt.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private currentUserSubject = new BehaviorSubject<User>({} as User);
  private currentUser = this.currentUserSubject.asObservable().pipe(distinctUntilChanged());

  private isAuthenticatedSubject = new BehaviorSubject<boolean>(false);
  private isAuthenticated = this.isAuthenticatedSubject.asObservable();

  private url = "http://localhost:8080/login"

  constructor(
    private jwtService:JwtService,
    private http: HttpClient,
    private router: Router
    ) { }

  login(user:User){
    return this.http.post<User>(this.url,user)
      .pipe(map(data => {
        this.setAuthCredentials(data);
        return data;
      }));
      // catchError(this.errorHandler)
  }

  setAuthCredentials(user: User){
    const tokenUpdate = user.jwtToken == null ? '' : user.jwtToken;
    this.jwtService.updateJwtToken(tokenUpdate);
    this.currentUserSubject.next(user);
    this.isAuthenticatedSubject.next(true);
  }

  emptyAuthCredentials(){
    this.jwtService.deleteJwtToken();
    this.currentUserSubject.next({} as User);
    this.isAuthenticatedSubject.next(false);
  }

  errorHandler(error: HttpErrorResponse){
    return throwError(() => new Error('Something go wrong. Please try again.'));
  }

  getJwtToken(){
    return this.jwtService.getJwtToken();
  }

  redirectToLoginPage(){
    this.router.navigate(['home']);
  }
}
