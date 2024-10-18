import { HttpClient, HttpErrorResponse, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, catchError, Observable, throwError } from 'rxjs';
import { User } from '../../models/classes/user';
import {distinctUntilChanged, map, tap} from 'rxjs/operators';
import { JwtService } from '../jwt/jwt.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient,
              private jwtService: JwtService) {}

  private url = "http://localhost:8080/login";

  private loggedInSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(localStorage.getItem(`jwtToken`) === null ? false : true);

  public isLoggedIn$: Observable<boolean> = this.loggedInSubject.asObservable();

  login(user: User): Observable<User>{
     return this.httpClient.post<User>(this.url,{username: user.username, password: user.password}).pipe(
      tap(response => {
        if(response.jwtToken !== null){
          console.log("jwt");
          this.jwtService.updateJwtToken(response.jwtToken);
        }else{
          console.log("err");
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
}
