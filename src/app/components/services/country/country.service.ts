import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../../models/country.model';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  countries: Country[] = [];

  private url = "http://localhost:8080/countries";

  constructor(private httpClient: HttpClient) { }

  getCountries() : Observable<Country[]>{
    return this.httpClient.get<Country[]>(this.url);
  }

}
