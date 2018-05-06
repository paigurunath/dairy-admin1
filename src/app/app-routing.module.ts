import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegistrationComponent } from './registration/registration.component';
import { ProductComponent } from './product/product.component';
import { ProductcategoryComponent } from './productcategory/productcategory.component';
import { VendorComponent } from './vendor/vendor.component';
import { ShopperComponent } from './shopper/shopper.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'registration',
    component: RegistrationComponent
  },
  {
    path: 'product',
    component: ProductComponent
  },
  {
    path: 'productcategory',
    component: ProductcategoryComponent
  },
  {
    path: 'vendor',
    component: VendorComponent
  },
  {
    path: 'shopper',
    component: ShopperComponent
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
