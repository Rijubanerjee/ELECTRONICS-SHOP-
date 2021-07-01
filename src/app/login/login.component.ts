import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Logindto } from '../logindto';
import { OrderproductService } from '../orderproduct.service';
import { StorageService } from '../storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login:Logindto=new Logindto();

  constructor(public router:Router, public storageservice:StorageService,public orderservice:OrderproductService) { }

  ngOnInit() {

  }
  doLogin():void{
    // this.login.password=this.orderservice.encryptString(this.login.password);
    // console.log(this.login.password);
    this.orderservice.doLogin(this.login).subscribe(
      data=>{localStorage.setItem("userinfo",JSON.stringify(data));
      this.storageservice.loginflag=true;
      this.storageservice.username=JSON.parse(localStorage.getItem("userinfo")).userName;
      this.router.navigateByUrl("/");
      this.storageservice.msg=undefined;
      localStorage.setItem("userId",this.login.userId+"")},
      error=>{this.storageservice.msg="Incorrect username & password";
      this.storageservice.loginflag=false;
      this.router.navigateByUrl("/login");}
    );
     
  }
}
