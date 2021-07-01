import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderproductService } from '../orderproduct.service';
import { Orderproducts } from '../orderproducts';

//  @author Atanu Chowdhury  
//  @Version : 1.0
//  @Description : This Component Class cancels order
//  @Date: 25/6/2021

@Component({
  selector: 'app-cancelorder',
  templateUrl: './cancelorder.component.html',
  styleUrls: ['./cancelorder.component.css']
})
export class CancelorderComponent implements OnInit {
  msg:string;
  orderproduct:Orderproducts=undefined;


  constructor(private orderproductservice:OrderproductService,private route:ActivatedRoute,private router:Router) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params=>{
      console.log(params);
      let orderid:number=parseInt(params.get("orderid"));
      this.orderproductservice.cancelOrder(orderid).subscribe(
        data=>{
          console.log(data);
          this.orderproduct=data;
          this.msg=undefined;
        },
        error=>{
          this.msg=error.error.message;
          console.log(error);
        }
      )
    })
  }

}