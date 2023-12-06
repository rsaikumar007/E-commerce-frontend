import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CreateproductComponent } from './createproduct/createproduct.component';
import { ProductupdateComponent } from './productupdate/productupdate.component';
import { ProductlistComponent } from './productlist/productlist.component';
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
@NgModule({
  declarations: [
    AppComponent,
    CreateproductComponent,
    ProductupdateComponent,
    ProductlistComponent,
    ProductdeleteComponent,
    CreatecustomerComponent,
    CustomerlistComponent,
    CustomerupdateComponent,
    CreateorderComponent,
    OrderupdateComponent,
    OrderdeleteComponent,
    CreatecartComponent,
    UpdatecartComponent,
    DeletecartComponent,
    OrderlistComponent,
    CartlistComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule, 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
