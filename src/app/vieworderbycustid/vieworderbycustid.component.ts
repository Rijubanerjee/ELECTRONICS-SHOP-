import { Component, OnInit } from '@angular/core';
import { OrderproductService } from '../orderproduct.service';

@Component({
  selector: 'app-vieworderbycustid',
  templateUrl: './vieworderbycustid.component.html',
  styleUrls: ['./vieworderbycustid.component.css']
})
export class VieworderbycustidComponent implements OnInit {
  custid:number;
  orderproducts:any=undefined;
  msg:string;


  constructor(private orderproductservice:OrderproductService) { }

  ngOnInit() {
    this.viewOrdersById();
  }
  viewOrdersById():void{
    this.custid=parseInt(localStorage.getItem("userId"));
    this.orderproductservice.viewOrdersById(this.custid).subscribe(data=>{
      console.log(data);
      this.orderproducts=data;
      this.msg=undefined;
    },
    error=>{
      console.log(error);
      this.msg=error.error.message;
      this.orderproducts=undefined;
    });
  }

}