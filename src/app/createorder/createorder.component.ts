import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderproductService } from '../orderproduct.service';

@Component({
  selector: 'app-createorder',
  templateUrl: './createorder.component.html',
  styleUrls: ['./createorder.component.css']
})
export class CreateorderComponent implements OnInit {
  msg:string;
  errorMsg:string;

  
  constructor(private orderproductservice:OrderproductService, private route:ActivatedRoute,private router:Router) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params=>{
      // let custid:number = parseInt(params.get(""))
      console.log(params);
      let custid:number=parseInt(params.get("custid"));
      this.orderproductservice.makeOrderById(custid).subscribe(data=>{
        console.log(data);
  
      },
      error=>{
        // this.reset();
        console.log(error);
        this.msg=error.error.message;
        
        // this.createOrderMsg=error.error.message
      })
    })

  }
   
  }
