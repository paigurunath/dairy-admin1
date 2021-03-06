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
  // It maintains table row index based on selection.
  selectedRow: number;

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
      this.productCategoryService.updateProductCategory(this.productCategoryModel);
    }
    // Hide registration entry section.
    this.showNew = false;
  }

  // This method associate to Edit Button.
  onEdit(productCategory: ProductCategory, index: number) {
    // Assign selected table row index.
    this.selectedRow = index;
    // Initiate new registration.
    this.productCategoryModel = new ProductCategory();
    // Retrieve selected registration from list and assign to model.
    this.productCategoryModel = Object.assign({}, this.productCategorylist[this.selectedRow]);
    // Change submitType to Update.
    this.submitType = 'Update';
    // Display registration entry section.
    this.showNew = true;
  }

  // This method associate to Delete Button.
  onDelete(productCategory: ProductCategory, index: number) {
    // Delete the corresponding registration entry from the list.
    this.productCategoryService.deleteProductCategories(productCategory);
  }
}
