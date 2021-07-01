import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Paymentdto } from '../paymentdto';
import { PaymentserviceService } from '../paymentservice.service';

//  @author Wriju Banerjee 
//  @Version : 1.0
//  @Description : This Component Class makes payment 
//  @Date: 25/6/2021

@Component({
  selector: 'app-makepayment',
  templateUrl: './makepayment.component.html',
  styleUrls: ['./makepayment.component.css']
})
export class MakepaymentComponent implements OnInit {
  payment:Paymentdto = new Paymentdto();
  msg:string;
  msgflag:boolean;
  @ViewChild("frm")
  form:NgForm;
  orderid:number;
  constructor(public service:PaymentserviceService , public route:ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params=>{
     this.payment.orderId = parseInt(params.get("orderid"));
    });
  }
  makepayment():void{
    this.service.makePayment(this.payment).subscribe(
      data=>{
        console.log(data);
        this.msg=data.message;
        this.form.reset();
        this.msgflag=true;
      },
      error=>{
        console.log(error);
        this.msg=error.error.messages;
        this.msgflag=false;
      }
    );
    // console.log(this.payment);
  }

}
