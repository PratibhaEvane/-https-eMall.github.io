import { Component, OnInit } from '@angular/core';
import { CategoryList, BrandList } from '../service/data-type';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-admin-sidebar',
  templateUrl: './admin-sidebar.component.html',
  styleUrls: ['./admin-sidebar.component.css']
})
export class AdminSidebarComponent implements OnInit {
  public categoryList: undefined | CategoryList[];
  public brandList: undefined | BrandList[];
  constructor(private productService: ProductService) { }
  ngOnInit(): void {
    this.productService.getCategoryListFromApi().subscribe((cate_list) => {
      console.log('category list :', cate_list);
      this.categoryList = cate_list;
    });
    this.productService.getBrandsListFromApi().subscribe((brand_list) => {
      console.log('brand list :', brand_list);
      this.brandList = brand_list;
    });
    // this.productService.requestDataFromMultipleSources().subscribe(responseList => {
    //   this.categoryList = responseList[0];
    //   this.brandList = responseList[1];
    // });
  }

}
