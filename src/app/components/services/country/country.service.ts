import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../../models/country.model';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  countries: Country[] = [];

  private url = "https://backend-serv-d5gugpfwcvf6c7bd.northeurope-01.azurewebsites.net/countries";

  constructor(private httpClient: HttpClient) { }

  getCountries() : Observable<Country[]>{
    return this.httpClient.get<Country[]>(this.url);
  }

}
