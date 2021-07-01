import { Component, OnInit } from '@angular/core';
import { Basket } from '../basket';
import { BasketService } from '../basket.service';

//  @author Sukanya Biswas
//  @Version : 1.0
//  @Description : This Component Class views items in the basket of an user
//  @Date: 25/6/2021

@Component({
  selector: 'app-viewitemsbycust',
  templateUrl: './viewitemsbycust.component.html',
  styleUrls: ['./viewitemsbycust.component.css']
})
export class ViewitemsbycustComponent implements OnInit {
  items:Basket[]=undefined;
  cid:number;
  msg:string;
  flag:string;
  totalcost:number=0;
  constructor(public basketservice:BasketService) { 
    this.flag=" ";
  }

  ngOnInit() {
    this.getById();
  }

  getById():void{
    // if(this.cid==undefined || this.cid==null || this.cid<=0)
    // {
    //   this.msg="enter valid employee id";
    //   return ;
    // }
    this.cid=parseInt(localStorage.getItem("userId"));
    this.basketservice.viewitemsbycust(this.cid).subscribe(data=>{console.log(data);this.items=data; 
      this.msg=undefined; this.getTotalCost();},
      error=>{console.log(error);this.msg=error.error.message;this.items=undefined});
  }

  deletebyid(bid:number,cid:number):void{
    this.basketservice.deleteitems(bid).subscribe(data=>{
      console.log("inside delete");

    this.msg="Delete confirm for Id "+cid;
    this.getById();
    this.getTotalCost();},
    // this.basketservice.viewitemsbycust(cid).subscribe(data=>{console.log("inside delete view");
    // this.items=data;});},
    
    error=>{console.log(error);
      console.log("inside delete error");
      this.msg="Basket is Empty";});
  }

  getTotalCost():void{
    this.totalcost=0;
    this.items.forEach(element => {
    this.totalcost=element.productDetails.price+this.totalcost; 
    });
  }
  // reset():void{
  //   //this.totalcost=0;
  //   this.msg=undefined;
  //   this.items=undefined;
  //   //this.custid=undefined;
  //   //this.creatorderId=undefined;
  //   //this.createOrderMsg=undefined;
  // }

}
