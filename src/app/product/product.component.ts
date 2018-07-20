import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../model/Product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  productlist: any = [];
  // It maintains registration Model
  productModel: Product;
  // It maintains registration form display status. By default it will be false.
  showNew: Boolean = false;
  // It will be either 'Save' or 'Update' based on operation.
  submitType: String = 'Save';
  // It maintains table row index based on selection.
  selectedRow: number;

  constructor(private productService: ProductService) {
  }

  ngOnInit() {
    this.productService.getProducts().subscribe(
      data => {
        console.log(data);
        this.productlist  = data['products']; }
     );
  }

   // This method associate toCancel Button.
   onCancel() {
    // Hide registration entry section.
    this.showNew = false;
  }

  // This method associate to New Button.
  onNew() {
    // Initiate new registration.
    this.productModel = new Product();
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
      this.productService.saveProduct(this.productModel);
    } else {
      this.productService.updateProduct(this.productModel);
    }
    // Hide registration entry section.
    this.showNew = false;
  }

  // This method associate to Edit Button.
  onEdit(product: Product, index: number) {
    // Assign selected table row index.
    this.selectedRow = index;
    // Initiate new registration.
    this.productModel = new Product();
    // Retrieve selected registration from list and assign to model.
    this.productModel = Object.assign({}, this.productlist[this.selectedRow]);
    // Change submitType to Update.
    this.submitType = 'Update';
    // Display registration entry section.
    this.showNew = true;
  }

  // This method associate to Delete Button.
  onDelete(product: Product, index: number) {
    // Delete the corresponding registration entry from the list.
    this.productService.deleteProduct(product);
  }
}
