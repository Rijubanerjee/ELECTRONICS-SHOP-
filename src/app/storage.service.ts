import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  msg:string;
  loginflag:boolean;
  username:string;
  constructor() { 
    if(localStorage.getItem("userinfo")!=null){
      this.loginflag=true;
      this.username=JSON.parse(localStorage.getItem("userinfo")).userName;
    }

  }
}
