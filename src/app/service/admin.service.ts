import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Admin } from './data-type';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }

  // this function is for admin login via api
  adminLogin(admin: Admin) {
    console.log(admin);
    // this.http.post("http://apps.codebetter.in:8082/emall/user/adminlogin", admin);
    return this.http.post(`http://apps.codebetter.in:8082/emall/user/adminlogin?adminid=${admin.adminid}&password=${admin.password}`, admin,
      { observe: 'response' }).subscribe((data: any) => {
        console.log(data);
        if (data && data.body && data.body.length) {
          console.log('login success');
        }
        else {
          console.log('login failed');
        }
      });

  }
}
