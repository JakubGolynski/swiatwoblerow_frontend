import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CountryInterface } from '../../models/country.model';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  countries: CountryInterface[] = [];

  private url = "http://localhost:8080/countries";

  constructor(private httpClient: HttpClient) { }

  getCountries(){
    return this.httpClient.get<CountryInterface[]>(this.url);
  }

}
