import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BasketDto } from './basket-dto';

@Injectable({
  providedIn: 'root'
})
export class BasketService {
  userName : string;
  constructor(private http : HttpClient) { }

  public additems(basketdto : BasketDto):Observable <any>{
    return this.http.post("http://localhost:8082/elecapp/additemsinbasket",basketdto,{responseType:'text'});
  }

  public viewitemsbycust(cuid:number):Observable <any>{
    return this.http.get("http://localhost:8082/elecapp/viewitems/"+cuid);
  }

  public viewallitems():Observable <any>{
    return this.http.get("http://localhost:8082/elecapp/viewallitems/");
  }

  public deleteitems(bid:number):Observable <any>{
    return this.http.delete("http://localhost:8082/elecapp/deleteitembycartid/"+bid ,{responseType:'text'});
}
}
