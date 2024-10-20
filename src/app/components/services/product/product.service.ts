import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProductFilter } from '../../models/filter/product-filter.model';
import { Product } from '../../models/product.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  private _url: string = `http://localhost:8080/products`; 

  getProducts(productFilter: ProductFilter): Observable<Product[]>{
    return this.http.get<Product[]>(this._url);
      // , {
      //   options: {
      //     params: new HttpParams().append()
      //   }
      // }
  }

}
