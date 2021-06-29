import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewpaymentComponent } from './viewpayment/viewpayment.component';
import { PfPipe } from './pf.pipe';
import { FormsModule } from '@angular/forms';
import { MakepaymentComponent } from './makepayment/makepayment.component';
import { ViewbycustidComponent } from './viewbycustid/viewbycustid.component';
import { VieworderbycustidComponent } from './vieworderbycustid/vieworderbycustid.component';
import { ViewitemsbycustComponent } from './viewitemsbycust/viewitemsbycust.component';
import { AdditemsinbasketComponent } from './additemsinbasket/additemsinbasket.component';
import { CreateorderComponent } from './createorder/createorder.component';
import { CancelorderComponent } from './cancelorder/cancelorder.component';
import { AddcategoryComponent } from './addcategory/addcategory.component';
import { AddproductsComponent } from './addproducts/addproducts.component';
import { ViewallcategoryComponent } from './viewallcategory/viewallcategory.component';
import { ViewproductsbycategorynameComponent } from './viewproductsbycategoryname/viewproductsbycategoryname.component';
import { ViewproductsbyproductIdComponent } from './viewproductsbyproduct-id/viewproductsbyproduct-id.component';
import { ViewproductspecsbyproductidComponent } from './viewproductspecsbyproductid/viewproductspecsbyproductid.component';
import { ViewproductspecsbyspecidComponent } from './viewproductspecsbyspecid/viewproductspecsbyspecid.component';

import { LoginComponent } from './login/login.component';
import { AddproductspecsComponent } from './addproductspecs/addproductspecs.component';

@NgModule({
  declarations: [
    AppComponent,
    ViewpaymentComponent,
    PfPipe,
    MakepaymentComponent,
    ViewbycustidComponent,
    VieworderbycustidComponent,
    ViewitemsbycustComponent,
    AdditemsinbasketComponent,
    CreateorderComponent,
    CancelorderComponent,
    AddcategoryComponent,
    AddproductsComponent,
    ViewallcategoryComponent,
    ViewproductsbycategorynameComponent,
    ViewproductsbyproductIdComponent,
    AddproductspecsComponent,
    ViewproductspecsbyproductidComponent,
    ViewproductspecsbyspecidComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
