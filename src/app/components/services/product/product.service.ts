import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProductFilter } from '../../models/filter/product-filter.model';
import { Product } from '../../models/product.model';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  private _url: string = environment.apiUrl+`/products`; 

  getProducts(productFilter: ProductFilter): Observable<Product[]>{

    let productFilterMap = new Map<string,any>(Object.entries(productFilter));
    let params = new HttpParams();

    productFilterMap.forEach((value,key) => {
      if(Array.isArray(value)){
        value.forEach(name => {
          if(name !== undefined && name !== null && name !== ``){
            params = params.append(key,name);
          }
        })
      }else if(value !== undefined && value !== null && value !== ``){
        params = params.set(key,value);
      }
    });

    return this.http.get<Product[]>(this._url, {params});
  }

  getProduct(id: number): Observable<Product> {
    return this.http.get<Product>(this._url+`/${id}`);
  }
}
