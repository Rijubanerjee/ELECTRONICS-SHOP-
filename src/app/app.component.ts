import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { OrderproductService } from './orderproduct.service';
import { StorageService } from './storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'eshop-payment';
  constructor(public storageservice:StorageService,public orderservice:OrderproductService,public router:Router){}
  doLogout():void{
    this.orderservice.doLogout().subscribe(
      data=>{
        localStorage.removeItem("userinfo");
        this.storageservice.msg="you have logged out";
        this.storageservice.loginflag=false;
        this.router.navigateByUrl("/login");}
    );
  }
}
