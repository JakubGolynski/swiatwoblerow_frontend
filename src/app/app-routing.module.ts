import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { HomeComponent } from './home/home.component';
import { CountryComponent } from './core/services/country/country.component';
import { CategoryComponent } from './core/category/category.component';

const routes: Routes = [

  { path: 'home', component: HomeComponent },
  { path: 'login', component: AuthComponent},
  //{ path: 'products', component: ProductComponent},
  { path: 'categories', component: CategoryComponent, outlet: 'categories'},
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }