import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Shopper } from '../model/Shopper';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class ShopperService {

  private addShopperUrl = 'http://localhost:3000/secure/api/addShopper';
  private updateShopperUrl = 'http://localhost:3000/secure/api/updateShopper';
  private deleteShopperUrl = 'http://localhost:3000/secure/api/deleteShopper';
  private getAllShopperUrl = 'http://localhost:3000/secure/api/getAllShoppers';

  constructor(private http: HttpClient) {}

  saveShopper(shopper: Shopper) {
    return this.http.post<any>(this.addShopperUrl, shopper).subscribe(res => console.log('Done'));
  }

  updateShopper(shopper: Shopper) {
    return this.http.post<any>(this.updateShopperUrl, shopper).subscribe(res => console.log('Done'));
  }

  getAllShopper() {
    return this.http.get<any>(this.getAllShopperUrl);
  }

  deleteShopper(shopper: Shopper) {
    return this.http.post<any>(this.deleteShopperUrl, shopper).subscribe(res => console.log('Done'));
  }
}
