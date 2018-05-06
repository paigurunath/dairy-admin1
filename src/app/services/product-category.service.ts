import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { ProductCategory } from '../model/ProductCategory';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class ProductCategoryService {

  private addProductCategoryUrl = 'http://localhost:3000/secure/api/addCatagory';
  private updateProductCategoryUrl = 'http://localhost:3000/secure/api/updateCatagory';
  private deleteProductCategoryUrl = 'http://localhost:3000/secure/api/deleteCatagory';
  private getAllProductCategoriesUrl = 'http://localhost:3000/secure/api/getAllCategory';

  constructor(private http: HttpClient) {}

  saveProductCategory(productCategory: ProductCategory) {
    return this.http.post<any>(this.addProductCategoryUrl, productCategory).subscribe(res => console.log('Done'));
  }

  updateProductCategory(productCategory: ProductCategory) {
    return this.http.post<any>(this.updateProductCategoryUrl, productCategory).subscribe(res => console.log('Done'));
  }

  getProductCategories() {
    return this.http.get<any>(this.getAllProductCategoriesUrl);
  }

  deleteProductCategories(productCategory: ProductCategory) {
    return this.http.post<any>(this.deleteProductCategoryUrl, productCategory).subscribe(res => console.log('Done'));
  }
}
