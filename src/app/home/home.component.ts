import { Component, OnInit } from '@angular/core';
import { CategoryInterface } from '../core/models/category.model';
import { CategoryService } from '../core/services/category/category.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  categories:CategoryInterface[] = [];
  currentCategory = null;

  constructor(private categoryService:CategoryService) { 
  }

  ngOnInit() {
    this.getCategories();
  }

  getCategories() {
    this.categoryService.getCategories().subscribe(
      categories => this.categories = categories);
  }
}
