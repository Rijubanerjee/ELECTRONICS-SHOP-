import { Component, OnInit } from '@angular/core';
import { PaymentserviceService } from '../paymentservice.service';

@Component({
  selector: 'app-viewpayment',
  templateUrl: './viewpayment.component.html',
  styleUrls: ['./viewpayment.component.css']
})
export class ViewpaymentComponent implements OnInit {
  transactionid:number;
  msg:string;
  transaction:any=undefined;
  constructor(public service:PaymentserviceService) { }

  ngOnInit() {
  }

  viewall():void{
    if(this.transactionid==undefined || this.transactionid==null || this.transactionid<=0)
    {
      this.msg="enter the transaction id must be greater than 0";
      return ;
    }
    this.service.viewall(this.transactionid).subscribe(data=>{
      console.log(data);
      this.transaction=data;
      this.msg=undefined;
      },
      error=>{
        console.log(error);
        this.msg=error.error.message;
        this.transaction=undefined;
      });
  }

}
