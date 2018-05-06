import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { RegistrationComponent } from './registration/registration.component';
import { FormsModule } from '@angular/forms';
import { ProductComponent } from './product/product.component';
import { HttpClientModule } from '@angular/common/http';

import { ProductService } from './services/product.service';
import { ProductCategoryService } from './services/product-category.service';
import { VendorService } from './services/vendor.service';

import { ProductcategoryComponent } from './productcategory/productcategory.component';
import { VendorComponent } from './vendor/vendor.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    RegistrationComponent,
    ProductComponent,
    ProductcategoryComponent,
    VendorComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule.forRoot(),
    FormsModule
  ],
  providers: [ProductService, ProductCategoryService, VendorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
