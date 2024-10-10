import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../../models/classes/user';
import { UserInterface } from '../../models/user.model';
import {distinctUntilChanged} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url = "http://localhost:8080/customers"

  constructor(private http: HttpClient) { }

  getUsers(): Observable<UserInterface[]>{
    return this.http.get<UserInterface[]>(this.url);
  }

  getUser(id:number): Observable<UserInterface>{
    return this.http.get<UserInterface>(this.url+"/"+id);
  }
  
}
