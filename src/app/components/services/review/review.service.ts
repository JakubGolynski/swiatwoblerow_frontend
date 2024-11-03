import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Review } from '../../models/review.model';
import { ReviewFilter } from '../../models/filter/review-filter.model';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {

  constructor(private http: HttpClient) { }


  getReviews(productId: number, reviewFilter: ReviewFilter) {
    console.log("rew_serv");
    let _url: string = `http://localhost:8080/products/${productId}/reviews`;
    return this.http.get<Review[]>(_url);
  }
}
