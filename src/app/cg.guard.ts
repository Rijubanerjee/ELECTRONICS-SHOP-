import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class CgGuard implements CanActivate {
  constructor(public storageservice:StorageService,public router:Router){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    let user =JSON.parse(localStorage.getItem("userinfo"));

    if(user!=null && next.data.role==undefined)
      return true;
    
    if(user!=null && user.role!=null && next.data.role==user.role){
      //this.storageservice.msg=undefined;
      return true;
    }
     this.storageservice.msg="you are not Authenticated/authorized";
     
     this.router.navigateByUrl('/login'); 
     return false;
  }
}

