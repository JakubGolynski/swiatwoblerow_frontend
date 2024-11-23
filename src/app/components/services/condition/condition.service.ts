import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Condition } from '../../models/condition.model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ConditionService {

  constructor(private http: HttpClient) { }

  private _url: string = environment.apiUrl+'/conditions';

  getConditions(): Observable<Condition[]>{
    return this.http.get<Condition[]>(this._url);
  }
}
