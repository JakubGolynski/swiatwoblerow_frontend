import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Offer } from 'src/app/components/offer-details-get/offer'

const baseUrl = "http://localhost:8080/api/category/cars"

@Injectable({
  providedIn: 'root'
})
export class SwiatwoblerowFrontService {

  constructor(private http: HttpClient) { }

  findAll(): Observable<Offer[]>{
    return this.http.get<Offer[]>(baseUrl);
  }
}