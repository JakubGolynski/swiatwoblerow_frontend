import { NgModule, provideAppInitializer } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { AppRoutingModule, routes } from './app-routing.module'; // CLI imports 
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AuthComponent } from './components/auth/auth.component';
import { CategoryComponent } from './components/category/category.component';
import { ProductComponent } from './components/product/product.component';
import { AuthInterceptorService } from './components/services/auth/interceptor/auth-interceptor.service';
import { AuthStatusComponent } from './components/navbar/auth-status/auth-status.component';
import { ProductNavComponent } from './components/navbar/product-nav/product-nav/product-nav.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ReviewComponent } from './components/review/review.component';
import { localStorageInitializer } from './components/services/jwt/local.storage.initializer';
import { UserComponent } from './components/user/user.component';



@NgModule({ declarations: [
        AppComponent,
        HomeComponent,
        AuthComponent,
        CategoryComponent,
        ProductComponent,
        UserComponent,
        AuthStatusComponent,
        ProductNavComponent,
        ProductDetailComponent,
        ReviewComponent,
    ],
    bootstrap: [AppComponent], imports: [BrowserModule,
    FormsModule,
    AppRoutingModule], providers: [
        provideAppInitializer((() => localStorageInitializer)()),
        {
            provide: HTTP_INTERCEPTORS,
            useClass: AuthInterceptorService,
            multi: true
        },
        provideHttpClient(withInterceptorsFromDi())
    ] })
export class AppModule { }