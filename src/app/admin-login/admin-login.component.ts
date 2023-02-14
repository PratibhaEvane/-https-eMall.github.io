import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../service/admin.service';
import { Admin } from '../service/data-type';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  constructor(private adminService: AdminService, private router: Router) { }
  ngOnInit(): void {

  }
  adminLogin(data: Admin) {

    this.router.navigate(['admin-home']);
    alert('login success!');

  }
}
