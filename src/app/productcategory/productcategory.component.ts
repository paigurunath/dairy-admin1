import { Component, OnInit } from '@angular/core';
import { ProductCategory } from '../model/ProductCategory';
import { ProductCategoryService } from '../services/product-category.service';

@Component({
  selector: 'app-productcategory',
  templateUrl: './productcategory.component.html',
  styleUrls: ['./productcategory.component.css']
})
export class ProductcategoryComponent implements OnInit {

  productCategorylist: any = [];
  // It maintains registration Model
  productCategoryModel: ProductCategory;
  // It will be either 'Save' or 'Update' based on operation.
  submitType: String = 'Save';
  // It maintains registration form display status. By default it will be false.
  showNew: Boolean = false;

  constructor(private productCategoryService: ProductCategoryService) { }

  ngOnInit() {
    this.productCategoryService.getProductCategories().subscribe(
      data => {
        this.productCategorylist  = data; }
     );
  }

  onNew() {
    // Initiate new registration.
    this.productCategoryModel = new ProductCategory();
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
      this.productCategoryService.saveProductCategory(this.productCategoryModel);
    } else {
      // Update the existing properties values based on model.
      // this.registrations[this.selectedRow].firstName = this.regModel.firstName;
      // this.registrations[this.selectedRow].lastName = this.regModel.lastName;
      // this.registrations[this.selectedRow].dob = this.regModel.dob;
      // this.registrations[this.selectedRow].email = this.regModel.email;
      // this.registrations[this.selectedRow].password = this.regModel.password;
      // this.registrations[this.selectedRow].country = this.regModel.country;
    }
    // Hide registration entry section.
    this.showNew = false;
  }
}
