import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Condition } from '../../models/condition.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConditionService {

  constructor(private http: HttpClient) { }

  private _url: string = `https://backend-serv-d5gugpfwcvf6c7bd.northeurope-01.azurewebsites.net/conditions`;

  getConditions(): Observable<Condition[]>{
    return this.http.get<Condition[]>(this._url);
  }
}
