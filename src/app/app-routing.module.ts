import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AuthComponent } from './components/auth/auth.component';
import { CategoryComponent } from './components/category/category.component';
import { AuthGuardService } from './components/services/auth/guard/auth-guard.service';
import { ProductComponent } from './components/product/product.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { UserComponent } from './components/user/user.component';


export const routes: Routes = [

  { path: 'home', component: HomeComponent, },
  { path: 'login', component: AuthComponent},
  { path: 'products/:id', component: ProductDetailComponent},
  { path: 'products', component: ProductComponent},
  { path: 'home', component: CategoryComponent, outlet: 'categories'},
  { path: 'customer/detail', component: UserComponent, canActivate: [AuthGuardService] },
  { path: '', redirectTo: 'home', pathMatch: 'full'}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }