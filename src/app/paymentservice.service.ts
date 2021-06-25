import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Paymentdto } from './paymentdto';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PaymentserviceService {
  constructor(public http:HttpClient){
  }

makePayment(details:Paymentdto):Observable<any>{
    return this.http.post("http://localhost:8082/elecapp/makepayment",details);
  }
  viewall(trnxid:number):Observable<any> {
    return this.http.get("http://localhost:8082/elecapp/viewpayment/"+trnxid);
  }
  viewpaymentbycustid(custid:number):Observable<any>{
    return this.http.get("http://localhost:8082/elecapp/viewpaymentbycustid/"+custid)
  }
}
