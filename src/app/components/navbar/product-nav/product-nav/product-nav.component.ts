import { Component } from '@angular/core';
import { ProductService } from 'src/app/components/services/product/product.service';

@Component({
  selector: 'app-product-nav',
  templateUrl: './product-nav.component.html',
  styleUrl: './product-nav.component.css'
})
export class ProductNavComponent {

  constructor(private productService: ProductService){}


  getProducts(){
    this.productService.getProducts({});
  }
}
