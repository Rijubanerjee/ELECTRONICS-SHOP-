import { Component, OnInit } from '@angular/core';
import { Banktransaction } from '../banktransaction';
import { PaymentserviceService } from '../paymentservice.service';

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
  }
  viewbycustid():void{
    if(this.custid==undefined || this.custid==null || this.custid<=0)
    {
      this.msg="enter the employee id greater than 0";
      return ;
    }
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
