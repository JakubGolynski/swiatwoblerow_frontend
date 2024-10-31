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

  ngOnInit(){
    let id: number;
    this.router.params.pipe(map(param => param['id'])).subscribe({
      next: id => this.product.id = id,
      error: err => console.log(err)
    });
    if(this.product.id !== undefined && this.product.id !== null){
      this.getProduct(this.product.id);
    }
  }

  product: Product = {};

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
}
