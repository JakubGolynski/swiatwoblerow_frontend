import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product/product.service';
import { ProductFilter } from '../models/filter/product-filter.model';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private productService: ProductService) { }

  products: Product[] = [];

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(){
    const productFilter: ProductFilter = {};
    this.productService.getProducts(productFilter).subscribe({
      next: products => this.products = products,
      error: err => console.log(err)
    });
  }

}
