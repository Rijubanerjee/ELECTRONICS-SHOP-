import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-viewproductspecsbyspecid',
  templateUrl: './viewproductspecsbyspecid.component.html',
  styleUrls: ['./viewproductspecsbyspecid.component.css']
})
export class ViewproductspecsbyspecidComponent implements OnInit {

  specid:number;
  msg:String;
  specs:any=undefined;
  constructor(public productservice:ProductService) { }

  ngOnInit() {
  }

  viewbyspecid():void
  {
    if(this.specid==undefined||this.specid==null||this.specid<=0)
    {
      this.msg="Enter the Spec Id greater than 0";
      return ;
    }
    this.productservice.viewproductspecsbyspecid(this.specid).subscribe
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
        this.specs=undefined;
      }
    )
  }
}