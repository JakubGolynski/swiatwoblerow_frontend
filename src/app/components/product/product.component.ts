import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product/product.service';
import { ProductFilter } from '../models/filter/product-filter.model';
import { Product } from '../models/product.model';
import { CountryService } from '../services/country/country.service';
import { Country } from '../models/country.model';
import { Condition } from '../models/condition.model';
import { ConditionService } from '../services/condition/condition.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private productService: ProductService,
              private countryService: CountryService,
              private conditionService: ConditionService
  ) { }

  products: Product[] = [];
  productFilter: ProductFilter = {size:20,page:0,sort:`name`, conditions: []};
  countries: Country[] = [];
  conditions: Condition[] = [];

  ngOnInit(): void {
    this.getProducts();
    this.getCountries();
    this.getConditions();
  }

  getProducts(){
    this.productService.getProducts(this.productFilter).subscribe({
      next: products => this.products = products,
      error: err => console.log(err)
    });
  }

  getCountries(){
    this.countryService.getCountries().subscribe({
      next: countries => this.countries = countries,
      error: err => console.log("Could not fetch countries")
    });
  }

  getConditions(){
    this.conditionService.getConditions().subscribe({
      next: conditions => this.conditions = conditions,
      error: err => console.log("Could not fetch conditions")
    });
  }

  onInputChange(){
    this.getProducts();
  }

  getNextPage(){
    this.productFilter.page = this.productFilter.page+1;
    this.scrollToTop();
    this.getProducts();
  }

  getPreviousPage(){
    this.productFilter.page = this.productFilter.page-1;
    if(this.productFilter.page<0){
      this.productFilter.page = 0;
    }
    this.scrollToTop();
    this.getProducts();
  }

  onConditionChange(conditionName: string){
    if(this.productFilter.conditions.includes(conditionName)){
      const index = this.productFilter.conditions?.indexOf(conditionName);
      if(index > -1){
        this.productFilter.conditions.splice(index,1);
      }
    }else{
      this.productFilter.conditions.push(conditionName);
    }
    this.getProducts();
  }

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  formatDate(date: Date | null): string{
    if(date!== null)
      return date.toLocaleDateString();
    else
      return '';
  }
}
