import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ProductsComponent } from './components/products/products.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ClientComponent } from './layout/client/client.component';
import { AdminComponent } from './layout/admin/admin.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { SigninComponent } from './page/client/auth/signin/signin.component';
import { SignupComponent } from './page/client/auth/signup/signup.component';
import { ListProductComponent } from './page/client/list-product/list-product.component';
import { HomePageComponent } from './page/client/home-page/home-page.component';
import { DetailProductComponent } from './page/client/detail-product/detail-product.component';
import { ProductComponent } from './page/admin/product/product.component';
import { DashboardComponent } from './page/admin/dashboard/dashboard.component';
import { AddProductComponent } from './page/admin/add-product/add-product.component';
// import

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductsComponent,
    ClientComponent,
    AdminComponent,
    NotFoundComponent,
    SigninComponent,
    SignupComponent,
    ListProductComponent,
    HomePageComponent,
    DetailProductComponent,
    ProductComponent,
    DashboardComponent,
    AddProductComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
