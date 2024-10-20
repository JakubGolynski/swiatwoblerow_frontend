import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AuthComponent } from './components/auth/auth.component';
import { CategoryComponent } from './components/category/category.component';
import { AuthGuardService } from './components/services/auth/guard/auth-guard.service';
import { ProductComponent } from './components/product/product.component';


const routes: Routes = [

  { path: 'home', component: HomeComponent, },
  { path: 'login', component: AuthComponent},
  { path: 'products', component: ProductComponent},
  { path: 'home', component: CategoryComponent, outlet: 'categories'},
  { path: '', redirectTo: 'home', pathMatch: 'full'}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }