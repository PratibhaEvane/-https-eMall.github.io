import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddProductModalComponent } from '../add-product-modal/add-product-modal.component';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent {
  constructor(private modalService: NgbModal,
  ) {

  }
  openAddProductModal() {
    const modal = this.modalService.open(AddProductModalComponent, { size: 'lg' });
  };
}
