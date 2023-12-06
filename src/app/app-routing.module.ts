import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductlistComponent } from './productlist/productlist.component'; 
import { ProductupdateComponent } from './productupdate/productupdate.component'; 
import { CreateproductComponent } from './createproduct/createproduct.component';
import { ProductdeleteComponent } from './productdelete/productdelete.component'; 
import { CreatecustomerComponent } from './createcustomer/createcustomer.component';
import { CustomerlistComponent } from './customerlist/customerlist.component';
import { CustomerupdateComponent } from './customerupdate/customerupdate.component';
import { CreateorderComponent } from './createorder/createorder.component';
import { OrderupdateComponent } from './orderupdate/orderupdate.component';
import { OrderdeleteComponent } from './orderdelete/orderdelete.component';
import { CreatecartComponent } from './createcart/createcart.component';
import { UpdatecartComponent } from './updatecart/updatecart.component';
import { DeletecartComponent } from './deletecart/deletecart.component';
import { OrderlistComponent } from './orderlist/orderlist.component';
import { CartlistComponent } from './cartlist/cartlist.component';

const routes: Routes = [
  {path:'getproducts',component:ProductlistComponent},
  {path:'createproduct',component:CreateproductComponent},
  {path:'updateproduct',component:ProductupdateComponent},
  {path:'deleteproduct',component:ProductdeleteComponent},
  {path:'createcustomer',component:CreatecustomerComponent},
  {path:'getcustomers',component:CustomerlistComponent},
  {path:'updatecustomer',component:CustomerupdateComponent},
  {path:'insertOrder',component:CreateorderComponent},
  {path:'deleteOrder',component:OrderdeleteComponent},
  {path:'updateOrder',component:OrderupdateComponent},
  {path:'insertcart',component:CreatecartComponent},
  {path:'updatecart',component:UpdatecartComponent},
  {path:'deletecart',component:DeletecartComponent},
  {path:'getAllOrders',component:OrderlistComponent},
  {path:'getCartItems',component:CartlistComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
