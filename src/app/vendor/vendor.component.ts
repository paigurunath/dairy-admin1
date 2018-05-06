import { Component, OnInit } from '@angular/core';
import { Vendor } from '../model/Vendor';
import { VendorService } from '../services/vendor.service';

@Component({
  selector: 'app-vendor',
  templateUrl: './vendor.component.html',
  styleUrls: ['./vendor.component.css']
})
export class VendorComponent implements OnInit {

  vendorlist: any = [];
  // It maintains registration Model
  vendorModel: Vendor;
  // It will be either 'Save' or 'Update' based on operation.
  submitType: String = 'Save';
  // It maintains registration form display status. By default it will be false.
  showNew: Boolean = false;
  // It maintains table row index based on selection.
  selectedRow: number;

  constructor(private vendorService: VendorService) { }

  ngOnInit() {
    this.vendorService.getAllVendors().subscribe(
      data => {
        this.vendorlist = data;
      }
    );
  }

  onNew() {
    // Initiate new registration.
    this.vendorModel = new Vendor();
    // Change submitType to 'Save'.
    this.submitType = 'Save';
    // display registration entry section.
    this.showNew = true;
  }

  // This method associate to Save Button.
  onSave() {
    if (this.submitType === 'Save') {
      // Push registration model object into registration list.
      // this.registrations.push();
      // console.log(this.productCategoryModel);
      this.vendorService.saveVendor(this.vendorModel);
    } else {
      this.vendorService.updateVendor(this.vendorModel);
    }
    // Hide registration entry section.
    this.showNew = false;
  }

  // This method associate to Edit Button.
  onEdit(vendor: Vendor, index: number) {
    // Assign selected table row index.
    this.selectedRow = index;
    // Initiate new registration.
    this.vendorModel = new Vendor();
    // Retrieve selected registration from list and assign to model.
    this.vendorModel = Object.assign({}, this.vendorlist[this.selectedRow]);
    // Change submitType to Update.
    this.submitType = 'Update';
    // Display registration entry section.
    this.showNew = true;
  }

  // This method associate to Delete Button.
  onDelete(vendor: Vendor, index: number) {
    // Delete the corresponding registration entry from the list.
    this.vendorService.deleteVendor(vendor);
  }
}
