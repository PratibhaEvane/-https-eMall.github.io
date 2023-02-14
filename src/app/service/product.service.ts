import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductList, CategoryList, BrandList } from './data-type';
import { forkJoin, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  // funtion to get all product list from api
  getProductListFromApi() {
    return this.http.get<ProductList[]>("http://apps.codebetter.in:8082/emall/api/product/list");
  }

  // funtion to get all product-category list from api;
  getCategoryListFromApi() {
    return this.http.get<CategoryList[]>('http://apps.codebetter.in:8082/emall/api/category/list');
  }
  // funtion to get all product - brands list from api;
  getBrandsListFromApi() {
    return this.http.get<BrandList[]>('http://apps.codebetter.in:8082/emall/api/brand/list');
  }
  // requestDataFromMultipleSources(): Observable<any[]> {
  //   let category = this.http.get('http://apps.codebetter.in:8082/emall/api/category/list');
  //   let brand = this.http.get('http://apps.codebetter.in:8082/emall/api/brand/list');
  //   // Observable.forkJoin (RxJS 5) changes to just forkJoin() in RxJS 6
  //   return forkJoin([category, brand]);
  // }
}
