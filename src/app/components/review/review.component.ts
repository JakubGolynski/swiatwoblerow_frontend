import { Component, input, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ReviewService } from '../services/review/review.service';
import { Review } from '../models/review.model';
import { ReviewFilter } from '../models/filter/review-filter.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrl: './review.component.css'
})
export class ReviewComponent implements OnChanges{

  constructor(private reviewService: ReviewService,
              private router: ActivatedRoute,
  ){}


  ngOnChanges(changes: SimpleChanges): void {
    
  }

  reviewFilter: ReviewFilter = {page:0,size:1};
  reviews: Review[] = []

  @Input() productId: number | null | undefined;
  @Input() reviewQuantity: number | null | undefined = 0;

  ngOnInit(){
    if(this.productId !== null && this.productId !== undefined){ 
      this.getReviews(this.productId);
    }
  }

  getReviews(productId: number){
    this.reviewService.getReviews(productId,this.reviewFilter).subscribe({
      next: reviews => this.reviews = this.reviews.concat(reviews),
      error: err => console.log(err)
    });
  }

  getMoreReviews(){
    if(this.reviewFilter.page !== undefined){
      this.reviewFilter.page = this.reviewFilter.page+1;
    }
    if(this.productId !== null && this.productId !== undefined){ 
      this.getReviews(this.productId);
    }
  }

  existsMoreReviews(): boolean{
    if(this.reviewFilter.page !== null && this.reviewFilter.page !== undefined){
      if(this.reviewQuantity !== null && this.reviewQuantity !== undefined){
        return this.reviewFilter.page<(this.reviewQuantity-1)
      }
    }
    return false;
  }

  existsReviews(): boolean{
    if(this.reviewQuantity !== null && this.reviewQuantity !== undefined){
      return this.reviewQuantity>0;
    }
    return false;
  }

}
