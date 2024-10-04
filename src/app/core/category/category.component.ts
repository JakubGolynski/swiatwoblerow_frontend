import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../services/category/category.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CategoryInterface } from '../models/category.model';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  private categories: CategoryInterface[] = [];

  private url = "http://localhost:8080/categories";

  constructor(private categoryService: CategoryService
  ) { }

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories(){
    this.categoryService.getCategories().subscribe({
      next: data => {
        this.categories = data;
      },
      error: err => console.log(err.message)
    });
  }

}
