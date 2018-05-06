import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { ContactUs } from '../model/ContactUs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class ContactUsService {

  private getAllContactUsUrl = 'http://localhost:3000/secure/api/contactUsAll';

  constructor(private http: HttpClient) {}

  getAllContactUs() {
    return this.http.get<any>(this.getAllContactUsUrl);
  }
}
