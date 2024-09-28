import { HttpClient, HttpErrorResponse, HttpHeaders, HttpResponse } from '@angular/common/http';
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

  constructor(private httpClient: HttpClient,
              private jwtService: JwtService) {}

  private loginUrl = "http://localhost:8080/login"

  login(user: User){
     return this.httpClient.post(this.loginUrl,{username: user.username, password: user.password});
  }

  errorHandler(error: HttpErrorResponse){
    return throwError(() => new Error('Something go wrong. Please try again.'));
  }

  getJwtToken(){
    return this.jwtService.getJwtToken();
  }
}
