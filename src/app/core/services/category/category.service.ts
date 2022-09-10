import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CategoryInterface } from '../../models/category.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private url = "http://localhost:8080/categories"

  constructor(private http: HttpClient) { }

  getCategories(): Observable<CategoryInterface[]>{
    return this.http.get<CategoryInterface[]>(this.url);
  }
  
}
