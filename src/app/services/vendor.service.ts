import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Vendor } from '../model/Vendor';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class VendorService {

  private addVendorUrl = 'http://localhost:3000/secure/api/addVendor';
  private updateVendorUrl = 'http://localhost:3000/secure/api/updateVendor';
  private deleteVendorUrl = 'http://localhost:3000/secure/api/deleteVendor';
  private getAllVendorsUrl = 'http://localhost:3000/secure/api/getAllVendor';

  constructor(private http: HttpClient) {}

  saveVendor(vendor: Vendor) {
    return this.http.post<any>(this.addVendorUrl, vendor).subscribe(res => console.log('Done'));
  }

  updateVendor(vendor: Vendor) {
    return this.http.post<any>(this.updateVendorUrl, vendor).subscribe(res => console.log('Done'));
  }

  getAllVendors() {
    return this.http.get<any>(this.getAllVendorsUrl);
  }

  deleteVendor(vendor: Vendor) {
    return this.http.post<any>(this.deleteVendorUrl, vendor).subscribe(res => console.log('Done'));
  }
}
