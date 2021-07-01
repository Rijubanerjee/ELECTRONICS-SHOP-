import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

//  @author Alangkrita Chakrabarti 
//  @Version : 1.0
//  @Description : This Component Class views all category 
//  @Date: 25/6/2021

@Component({
  selector: 'app-viewallcategory',
  templateUrl: './viewallcategory.component.html',
  styleUrls: ['./viewallcategory.component.css']
})
export class ViewallcategoryComponent implements OnInit {
   cat:any=[];

  constructor(public productservice:ProductService) { }

  ngOnInit() {
    this.productservice.viewallcategories().subscribe
    (
      data=>
      {
        console.log(data);
        this.cat=data;
      },
      error=>
      {
        console.log(error);
        this.cat=undefined;
      }
    )
  }

   
}