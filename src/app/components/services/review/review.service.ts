import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Review } from '../../models/review.model';
import { ReviewFilter } from '../../models/filter/review-filter.model';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {

  constructor(private http: HttpClient) { }

  private _url: string = environment.apiUrl;

  getReviews(productId: number, reviewFilter: ReviewFilter): Observable<Review[]> {
    let params = new HttpParams();

    if(reviewFilter.page !== undefined){
      params = params.set(`page`, reviewFilter.page);
    }
    if(reviewFilter.size !== undefined){
      params = params.set(`size`, reviewFilter.size);
    }

    let _url: string = this._url+`/products/${productId}/reviews`;

    return this.http.get<Review[]>(_url,{params});
  }
}
