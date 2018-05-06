import { Component, OnInit } from '@angular/core';
import { Shopper } from '../model/Shopper';
import { ShopperService } from '../services/shopper.service';

@Component({
  selector: 'app-shopper',
  templateUrl: './shopper.component.html',
  styleUrls: ['./shopper.component.css']
})
export class ShopperComponent implements OnInit {

  shopperlist: any = [];
  // It maintains registration Model
  shopperModel: Shopper;
  // It will be either 'Save' or 'Update' based on operation.
  submitType: String = 'Save';
  // It maintains registration form display status. By default it will be false.
  showNew: Boolean = false;
  // It maintains table row index based on selection.
  selectedRow: number;

  constructor(private shopperService: ShopperService) { }

  ngOnInit() {
    this.shopperService.getAllShopper().subscribe(
      data => {
        this.shopperlist  = data; }
     );
  }

  onNew() {
    // Initiate new registration.
    this.shopperModel = new Shopper();
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
      this.shopperService.saveShopper(this.shopperModel);
    } else {
      this.shopperService.updateShopper(this.shopperModel);
    }
    // Hide registration entry section.
    this.showNew = false;
  }

  // This method associate to Edit Button.
  onEdit(shopper: Shopper, index: number) {
    // Assign selected table row index.
    this.selectedRow = index;
    // Initiate new registration.
    this.shopperModel = new Shopper();
    // Retrieve selected registration from list and assign to model.
    this.shopperModel = Object.assign({}, this.shopperlist[this.selectedRow]);
    // Change submitType to Update.
    this.submitType = 'Update';
    // Display registration entry section.
    this.showNew = true;
  }

  // This method associate to Delete Button.
  onDelete(shopper: Shopper, index: number) {
    // Delete the corresponding registration entry from the list.
    this.shopperService.deleteShopper(shopper);
  }
}
