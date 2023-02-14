import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-add-product-modal',
  templateUrl: './add-product-modal.component.html',
  styleUrls: ['./add-product-modal.component.scss']
})
export class AddProductModalComponent implements OnInit {
  constructor(private ngbActiveModal: NgbActiveModal,
  ) { }
  ngOnInit(): void {

  }
  addProductForm = new FormGroup({
    product_name: new FormControl('', [Validators.required]),
    prod_price: new FormControl('', [Validators.required]),
    prod_category: new FormControl('', [Validators.required]),
    prod_brand: new FormControl('', [Validators.required]),
    prod_image: new FormControl('')
  });
  dismiss() {
    this.ngbActiveModal.dismiss();
  }
}
