import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Logindto } from './logindto';
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
  doLogin(login:Logindto):Observable<any>{
    return this.http.post("http://localhost:8082/elecapp/login",login);

  }
  doLogout():Observable<any>{
    let token:string=JSON.parse(localStorage.getItem("userinfo")).token;
    console.log(token);
    const httpheaders=new HttpHeaders({"token-id":token});
    //httpheaders.set("token-id",token);
    return this.http.get("http://localhost:8082/elecapp/logout",{headers:httpheaders});
  }
  // encryptString(pwd:string):string{
  //   let str:string="";
  //   for(let idx=0; idx<pwd.length;++idx)
  //   {
  //     str += String.fromCharCode( pwd.charCodeAt(idx)-3);
  //   }
  //   return str;
  // }
}