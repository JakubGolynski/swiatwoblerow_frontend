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
  ){
    // console.log("constructor", this.productId);
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log("onchange",this.productId);
  }

  // productId = input.required<number>();

  reviews: Review[] = []
  reviewFilter: ReviewFilter = {page:0,size:5};
  @Input() productId: number | null | undefined;
  //   console.log("inout",value);
  //   if(value !== undefined && value !== null){
  //     this.productId = value;
  //     this.getReviews(value);
  //   }

  // }

  // ngOnChanges(){
  //   console.log("ngonit", this.productId);
  //   if(this.productId !== undefined && this.productId !== null){
  //     this.getReviews(this.productId);
  //     console.log("ngonit", this.productId);
  //   }
  // }
  ngOnInit(){
    console.log("start");
    if(this.productId !== null && this.productId !== undefined){
      console.log("done");
      this.getReviews(this.productId);
    }
  }

  getReviews(productId: number){
    this.reviewService.getReviews(productId, this.reviewFilter).subscribe({
      next: reviews => this.reviews = reviews,
      error: err => console.log(err)
    });
  }

}
