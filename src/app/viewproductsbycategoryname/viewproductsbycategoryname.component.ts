import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';

//  @author Alangkrita Chakrabarty
//  @Version : 1.0
//  @Description : This Component Class views products by category name
//  @Date: 25/6/2021


@Component({
  selector: 'app-viewproductsbycategoryname',
  templateUrl: './viewproductsbycategoryname.component.html',
  styleUrls: ['./viewproductsbycategoryname.component.css']
})
export class ViewproductsbycategorynameComponent implements OnInit {
  prods:any=[];
  msg:string;
  catName:string;
  constructor(public productservice:ProductService,public route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params=>{
      console.log(params);
      //this.prods.catName= parseInt(params.get("categoryName"));
      this.prods.name= (params.get("catName"));
    });
    this.viewbycatName();
  }

  viewbycatName():void {
    if(this.prods.name==undefined||this.prods.name==null)
    {
      this.msg="Enter the Category Name";
      return ;
    }
    this.productservice.viewproductsbycategoryName(this.prods.name).subscribe
    (
      data=>
      {
        console.log(data);
        this.prods=data;
        this.msg=undefined;
      },
      error=>
      {
        console.log(error);
        this.msg=error.error.message;
        this.prods=undefined;
      }
    )
  }
}