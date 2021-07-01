import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Category } from '../category';
import { ProductService } from '../product.service';

//  @author Alangkrita Chakrabarti 
//  @Version : 1.0
//  @Description : This Component Class adds category
//  @Date: 25/6/2021
@Component({
  selector: 'app-addcategory',
  templateUrl: './addcategory.component.html',
  styleUrls: ['./addcategory.component.css']
})
export class AddcategoryComponent implements OnInit {
    cat:Category=new Category();
    msg:string;
    @ViewChild("catform")
    form:NgForm;
    msgflag:boolean;
  constructor(public productservice:ProductService) { }

  ngOnInit() {
  }
addcat():void{
  this.productservice.addcategory(this.cat).subscribe
    (
      data=>
      {
        console.log(data);
        this.msg=data.message;
        this.form.reset();
        this.msgflag=true;
      },
      error=>
      {
        console.log(error);
        this.msg=error.error.message;
        this.msgflag=false;
      }
    )
}
}