import { Component, Input } from '@angular/core';
import { ProductService } from '../services/product/product.service';
import { Product } from '../models/product.model';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent {

  constructor(private productService: ProductService,
              private router: ActivatedRoute
  ){}

  product: Product = {};
  order: number = 1;

  ngOnInit(){
    let id: number;
    this.router.params.pipe(map(param => param['id'])).subscribe({
      next: id => {
        this.product.id = id;
        if(this.product.id !== undefined && this.product.id !== null){
          this.getProduct(this.product.id);
        }
      },
      error: err => console.log(err)
    });
  }

  getProduct(id: number){
    this.productService.getProduct(id).subscribe({
      next: product => this.product = product,
      error: err => console.log(err)
    });
  }

  @Input()
  set id(id: number) {
    this.getProduct(id);
  }

  addOrder(){
    if(this.product.quantity !== undefined && this.product.quantity !== null){
      if(this.order < this.product.quantity){
        this.order = this.order+1;   
      }
    }
  }

  subtractOrder(){
    if(this.order > 1){
      this.order = this.order-1;   
    }
  }

  existReviews(): boolean{
    if(this.product.quantityReviews !== undefined && this.product.quantityReviews !== null){
      if(this.product.quantityReviews>0){
        return true;
      }
    }
    return false;
  }
 
}
