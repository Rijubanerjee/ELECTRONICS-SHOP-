import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';
import { SpecDto } from '../spec-dto';

//  @author Souhardya Ray
//  @Version : 1.0
//  @Description : This Component Class views product specifications by product id
//  @Date: 25/6/2021


@Component({
  selector: 'app-viewproductspecsbyproductid',
  templateUrl: './viewproductspecsbyproductid.component.html',
  styleUrls: ['./viewproductspecsbyproductid.component.css']
})
export class ViewproductspecsbyproductidComponent implements OnInit {

  productid:number;
  msg:String;
  specs:any=[];
  constructor(public productservice:ProductService,public route:ActivatedRoute) { }

  ngOnInit() 
  {
    this.route.paramMap.subscribe(params=>{
      console.log(params);
      this.specs.productId= parseInt(params.get("prodId"));
     });

  }

  viewbyproductid():void
  {
    if(this.specs.productId==undefined||this.specs.productId==null||this.specs.productId<=0)
    {
      this.msg="Enter the Product Id greater than 0";
      return ;
    }
    this.productservice.viewproductspecsbyproductid(this.specs.productId).subscribe
    (
      data=>
      {
        console.log(data);
        this.specs=data;
        this.msg=undefined;
      },
      error=>
      {
        console.log(error);
        this.msg=error.error.message;
        console.log(this.msg);
        this.specs=undefined;
      }
    )
  }
}