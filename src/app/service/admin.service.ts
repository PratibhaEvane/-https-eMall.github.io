import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Admin } from './data-type';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }

  // this function is for admin login via api

  adminLogin(adminid: string, password: string) {
    if (adminid === 'admin@gmail.com' && password === '12345') {
      return 200;
      this.http.post("http://apps.codebetter.in:8082/emall/user/adminlogin", adminid);

    } else {
      return 403;
    }
  }
}
