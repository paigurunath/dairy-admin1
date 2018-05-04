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

  private productListAllService = 'http://localhost:3000/secure/api/getAllOrderProduct';

  constructor(private http: HttpClient) { }

  getProducts() {
    // return this.http.get<Product[]>(this.productListAllService).map(
    //   (data) => {
    //     console.log('data');
    //     console.log(data);
    //     return data['products'];
    //     }
    // );

    return this.http.get<any>(this.productListAllService);
  }

}
