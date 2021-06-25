import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from './category';
import { Productdto } from './productdto';
import { SpecDto } from './spec-dto';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(public http:HttpClient) {
  }

  viewproductsbyproductId(prodId:number):Observable<any>{
    return this.http.get("http://localhost:8082/elecapp/viewproductdetailbyproductid/"+ prodId );
  }
  viewproductsbycategoryName(catName:string):Observable<any>{
    return this.http.get("http://localhost:8082/elecapp/viewallproductsbycategory/"+ catName );
  }
  viewallcategories():Observable<any>{
    return this.http.get("http://localhost:8082/elecapp/viewallcategory");
  }
  addcategory(cat:Category):Observable<any>{
    return this.http.post("http://localhost:8082/elecapp/addcategory",cat);
  }
  addproducts(prods:Productdto):Observable<any>{
    return this.http.post("http://localhost:8082/elecapp/addproductdetails",prods);
  }
  viewproductspecsbyproductid(productid:number):Observable<any>
  {
    return this.http.get("http://localhost:8082/elecapp/viewspecsbyproductid/"+productid);
  }
  viewproductspecsbyspecid(specid:number):Observable<any>
  {
    return this.http.get("http://localhost:8082/elecapp/viewspecsbyspecid/"+specid);
  }
  addproductspecs(specs:SpecDto):Observable<any>
  {
    return this.http.post("http://localhost:8082/elecapp/addspecs",specs);
  }
}