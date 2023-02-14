import { Component, OnInit } from '@angular/core';
import { ProductList } from '../service/data-type';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
  public productList: undefined | ProductList[];

  constructor(private productService: ProductService) { }
  ngOnInit(): void {
    this.productService.getProductListFromApi().subscribe((list) => {
      console.log(list);
      this.productList = list;
    });
  }
}
