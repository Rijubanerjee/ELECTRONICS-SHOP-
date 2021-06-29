import { Component, OnInit,ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProductService } from '../product.service';
import { SpecDto } from '../spec-dto';

@Component({
  selector: 'app-addproductspecs',
  templateUrl: './addproductspecs.component.html',
  styleUrls: ['./addproductspecs.component.css']
})
export class AddproductspecsComponent implements OnInit {

  specs:SpecDto=new SpecDto();
  msg:string;
  @ViewChild("specform")
  form:NgForm;
  msgflag:boolean;
  constructor(public productservice:ProductService) { }

  ngOnInit() {
  }

  addspecs():void
  {
    this.productservice.addproductspecs(this.specs).subscribe
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
