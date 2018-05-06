import { Component, OnInit } from '@angular/core';
import { ContactUs } from '../model/ContactUs';
import { ContactUsService } from '../services/contact-us.service';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {

  contactUslist: any = [];
  // It will be either 'Save' or 'Update' based on operation.
  submitType: String = 'Save';
  // It maintains registration form display status. By default it will be false.
  showNew: Boolean = false;
  // It maintains table row index based on selection.
  selectedRow: number;

  constructor(private contactUsService: ContactUsService) { }

  ngOnInit() {
    this.contactUsService.getAllContactUs().subscribe(
      data => {
        this.contactUslist = data;
      }
    );
  }

}
