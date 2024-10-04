import { Component, OnInit } from '@angular/core';
import { CountryService } from './country.service';
import { CountryInterface } from '../../models/country.model';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {

  countries: CountryInterface[] = [];
  

  constructor(private countryService: CountryService) { }

  ngOnInit(): void {
    this.getCountries();
  }

  getCountries(){
    this.countryService.getCountries().subscribe(
      countries => this.countries = countries
    );
  }
  

}
