import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { BasketDto } from '../basket-dto';
import { BasketService } from '../basket.service';
import { Customer } from '../customer';

//  @author Sukanya Biswas  
//  @Version : 1.0
//  @Description : This Component Class adds Items to the basket
//  @Date: 25/6/2021

@Component({
  selector: 'app-additemsinbasket',
  templateUrl: './additemsinbasket.component.html',
  styleUrls: ['./additemsinbasket.component.css']
})
export class AdditemsinbasketComponent implements OnInit {
  basket:BasketDto=new BasketDto();
  customers:Customer[]=[];
  msg:string;
  errorMsg:string;
  userName=this.basketservice.userName;
  errors:string[];
  @ViewChild('frm')
  form:NgForm;


  constructor(public basketservice:BasketService , public route: ActivatedRoute) {
    this.basket.custId=parseInt(localStorage.getItem("userId"));
   }

  ngOnInit() {
    this.route.paramMap.subscribe(params=>{
      console.log(params);
      this.basket.prodId= parseInt(params.get("prodid"));
     });
  }

  additemsinbasket():void{
    
    this.basketservice.additems(this.basket).subscribe((data)=>{console.log("data",data);
                                                               this.msg="Product successfully added";
                                                               this.errorMsg=undefined;this.errors=undefined;
                                                               this.basket=new BasketDto(); this.form.reset()},

                  error=>{console.log(error);
                  this.errorMsg=JSON.parse(error.error).message;
                  this.errorMsg=undefined;
                  this.errorMsg=JSON.parse(error.error).messages});
  }
}
