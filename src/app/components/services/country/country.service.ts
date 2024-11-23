import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../../models/country.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  countries: Country[] = [];

  private url = environment.apiUrl+'/countries';

  constructor(private httpClient: HttpClient) { }

  getCountries() : Observable<Country[]>{
    return this.httpClient.get<Country[]>(this.url);
  }

}
