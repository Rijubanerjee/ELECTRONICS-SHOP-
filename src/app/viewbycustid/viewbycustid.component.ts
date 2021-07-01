import { Component, OnInit } from '@angular/core';
import { Banktransaction } from '../banktransaction';
import { PaymentserviceService } from '../paymentservice.service';

//  @author Wriju Banerjee
//  @Version : 1.0
//  @Description : This Component Class to see payment details of an user
//  @Date: 25/6/2021

@Component({
  selector: 'app-viewbycustid',
  templateUrl: './viewbycustid.component.html',
  styleUrls: ['./viewbycustid.component.css']
})
export class ViewbycustidComponent implements OnInit {
  payment:Banktransaction[] = undefined;
  msg:string;
  msgflag:boolean;
  custid:number;
  constructor(public service:PaymentserviceService) { }

  ngOnInit() {
    this.viewbycustid();
  }
  viewbycustid():void{
    this.custid=parseInt(localStorage.getItem("userId"));
    this.service.viewpaymentbycustid(this.custid).subscribe(data=>{
      console.log(data);
      this.payment=data;
      this.msg=undefined;
      },
      error=>{
        console.log(error);
        this.msg=error.error.message;
        this.payment=undefined;
      });
  }
}
