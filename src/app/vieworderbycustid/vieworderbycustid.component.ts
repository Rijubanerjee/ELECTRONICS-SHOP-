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
  }
  viewOrdersById():void{
    if(this.custid==null || this.custid==undefined || this.custid<=0){
      this.msg="Enter Proper Customer Id"

    }
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