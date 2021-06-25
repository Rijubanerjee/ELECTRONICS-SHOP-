import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Orderproducts } from './orderproducts';

@Injectable({
  providedIn: 'root'
})
export class OrderproductService {

  constructor(public http:HttpClient) { }

  viewOrdersById(custid:number):Observable<any>{
    return this.http.get("http://localhost:8082/elecapp/viewordersbycustid/"+custid);
  }
  makeOrderById(custid:number):Observable<any>{
    return this.http.get("http://localhost:8082/elecapp/addorderproduct/"+custid)
  }
  cancelOrder(orderid:number):Observable<any>{
    return this.http.get("http://localhost:8082/elecapp/cancelorder/"+orderid)
  }
  
}