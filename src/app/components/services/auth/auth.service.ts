import { HttpClient, HttpErrorResponse, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, catchError, Observable, Subject, throwError } from 'rxjs';
import {distinctUntilChanged, map, tap} from 'rxjs/operators';
import { JwtService } from '../jwt/jwt.service';
import { User } from '../../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient,
              private jwtService: JwtService) {}

  private url = "https://backend-serv-d5gugpfwcvf6c7bd.northeurope-01.azurewebsites.net/login";

  private loggedInSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(localStorage.getItem(`jwtToken`) === null ? false : true);

  public isLoggedIn$: Observable<boolean> = this.loggedInSubject.asObservable();

  login(user: User): Observable<User>{
     return this.httpClient.post<User>(this.url,{username: user.username, password: user.password}).pipe(
      tap(response => {
        if(response.jwtToken !== null){
          this.updateLoggedInStatus(response.jwtToken);
        }else{
          this.updateLoggedInStatus(``);
          throwError(() => new Error())
        }
      })
     );
  }

  errorHandler(error: HttpErrorResponse){
    return throwError(() => new Error(`An error occurred on the server. Please try again later.`));
  }

  getJwtToken(){
    return this.jwtService.getJwtToken();
  }

  updateJwtToken(token: string){
    this.jwtService.updateJwtToken(token);
  }

  public getLoggedInStatus(): Observable<boolean>{
    return this.isLoggedIn$;
  }

  public updateLoggedInStatus(token: string){
    if(token !== ``){
      this.jwtService.updateJwtToken(token);
      this.loggedInSubject.next(true);
    }else{
      this.jwtService.deleteJwtToken();
      this.loggedInSubject.next(false);
    }
  }

  logout(){
    this.jwtService.deleteJwtToken();
    this.loggedInSubject.next(false);
  }
}
