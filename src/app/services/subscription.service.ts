import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Subscription } from '../model/Subscription';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class SubscriptionService {

  private getAllSubcriptionUrl = 'http://localhost:3000/secure/api/getAllSubscriptions';

  constructor(private http: HttpClient) {}

  getAllSubscriptions() {
    return this.http.get<any>(this.getAllSubcriptionUrl);
  }
}
