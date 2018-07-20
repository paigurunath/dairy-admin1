import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Product } from '../model/Product';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class ProductService {

  private addProductUrl = 'http://localhost:3000/secure/api/addProduct';
  private updateProductUrl = 'http://localhost:3000/secure/api/updateProduct';
  private deleteProductUrl = 'http://localhost:3000/secure/api/deleteProduct';
  private productListAllService = 'http://localhost:3000/secure/api/getAllOrderProduct';

  constructor(private http: HttpClient) { }

  // getProducts() {
  //   return this.http.get<any>(this.productListAllService,{});
  // }

  getProducts() {
    return this.http.get<any>(this.productListAllService,{});
  }

  saveProduct(product: Product) {
    return this.http.post<any>(this.addProductUrl, product).subscribe(res => console.log('Done'));
  }

  updateProduct(product: Product) {
    return this.http.post<any>(this.updateProductUrl, product).subscribe(res => console.log('Done'));
  }

  deleteProduct(product: Product) {
    return this.http.post<any>(this.deleteProductUrl, product).subscribe(res => console.log('Done'));
  }
}
