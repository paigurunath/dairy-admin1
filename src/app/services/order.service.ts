import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Order } from '../model/Order';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class OrderService {

  private getAllOrdersUrl = 'http://localhost:3000/secure/api/getAllOrders';

  constructor(private http: HttpClient) { }

  getAllOrders() {
    return this.http.get<any>(this.getAllOrdersUrl);
  }
}
