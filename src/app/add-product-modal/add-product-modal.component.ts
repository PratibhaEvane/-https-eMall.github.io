import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { ProductService } from '../service/product.service';
import { ProductList } from '../service/data-type';
@Component({
  selector: 'app-add-product-modal',
  templateUrl: './add-product-modal.component.html',
  styleUrls: ['./add-product-modal.component.scss']
})
export class AddProductModalComponent implements OnInit {
  constructor(private ngbActiveModal: NgbActiveModal, private productService: ProductService
  ) { }
  ngOnInit(): void {

  }
  //  this.addProductForm = this.formBuilder.group({
  //     product_name: ['', [Validators.required]],
  //     prod_price: ['', [Validators.required]],
  //     prod_category: ['', [Validators.required]],
  //     prod_brand: ['', [Validators.required]],
  //     prod_image: ['']
  //   });
  addProductForm = new FormGroup({
    product_name: new FormControl('', [Validators.required]),
    prod_price: new FormControl('', [Validators.required]),
    prod_category: new FormControl('', [Validators.required]),
    prod_brand: new FormControl('', [Validators.required]),
    prod_image: new FormControl('')
  });
  addProduct() {
    console.log(this.addProductForm.value);
    this.productService.addProductOnApi(this.addProductForm.value).subscribe((data) => {
      console.log(data);
    });
  }
  dismiss() {
    this.ngbActiveModal.dismiss();
  }
}
