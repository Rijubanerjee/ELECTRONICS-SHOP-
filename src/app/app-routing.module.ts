import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddcategoryComponent } from './addcategory/addcategory.component';
import { AdditemsinbasketComponent } from './additemsinbasket/additemsinbasket.component';
import { AddproductsComponent } from './addproducts/addproducts.component';
import { AddproductspecsComponent } from './addproductspecs/addproductspecs.component.spec';
import { CancelorderComponent } from './cancelorder/cancelorder.component';
import { CreateorderComponent } from './createorder/createorder.component';
import { MakepaymentComponent } from './makepayment/makepayment.component';
import { ViewallcategoryComponent } from './viewallcategory/viewallcategory.component';
import { ViewbycustidComponent } from './viewbycustid/viewbycustid.component';
import { ViewitemsbycustComponent } from './viewitemsbycust/viewitemsbycust.component';
import { VieworderbycustidComponent } from './vieworderbycustid/vieworderbycustid.component';
import { ViewpaymentComponent } from './viewpayment/viewpayment.component';
import { ViewproductsbycategorynameComponent } from './viewproductsbycategoryname/viewproductsbycategoryname.component';
import { ViewproductsbyproductIdComponent } from './viewproductsbyproduct-id/viewproductsbyproduct-id.component';
import { ViewproductspecsbyproductidComponent } from './viewproductspecsbyproductid/viewproductspecsbyproductid.component';
import { ViewproductspecsbyspecidComponent } from './viewproductspecsbyspecid/viewproductspecsbyspecid.component';

const routes: Routes = [{path:'vieworders/bycustid/makepayment/:orderid',component:MakepaymentComponent},
                        {path:'viewpayment',component:ViewpaymentComponent},
                        {path:'viewpaymentbycustid',component:ViewbycustidComponent},
                        {path:"vieworders",
                          children:[{path:'bycustid',component:VieworderbycustidComponent},
                                    ]},
                                    {path:'viewall/viewall/viewbycategoryname/:catName',component:ViewproductsbycategorynameComponent},
                                    {path:'viewbyproductId',component:ViewproductsbyproductIdComponent},
                                    {path:'addproducts',component:AddproductsComponent},
                                    {path:'addcategory',component:AddcategoryComponent},
                                   {path:'viewall',component:ViewallcategoryComponent},
                                   {path:"viewall/viewall/viewbycategoryname/:catName/viewbycategoryname/additemsinbasket/:prodid", component:AdditemsinbasketComponent},
                                   {path:"getitemsbycustid", component:ViewitemsbycustComponent},
                                   {path:'viewbycategoryname',component:ViewproductsbycategorynameComponent},
                                   {path:'viewbyproductId',component:ViewproductsbyproductIdComponent},
                                   {path:'getitemsbycustid/createorder/:custid',component:CreateorderComponent},
                                   {path:"getitemsbycustid", component:ViewitemsbycustComponent},
                                    {path:'getitemsbycustid/createorder/:custid',component:CreateorderComponent},
                                    {path:"vieworders/bycustid/removeorder/:orderid",component:CancelorderComponent},
                                    {path:'viewall/viewall/viewbycategoryname/:catName/viewbycategoryname/viewproductspecsbyproductid/:prodId',component:ViewproductspecsbyproductidComponent},
                                    {path:'viewproductspecsbyspecid',component:ViewproductspecsbyspecidComponent},                      
                                    { path:'addproductspecs',component:AddproductspecsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
