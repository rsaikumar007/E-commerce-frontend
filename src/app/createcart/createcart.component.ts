import { Component,OnInit } from '@angular/core';
import { CartService } from '../cart.service';
@Component({
  selector: 'app-createcart',
  templateUrl: './createcart.component.html',
  styleUrls: ['./createcart.component.css']
})
export class CreatecartComponent implements OnInit{
 cartItemId:any={};
 msg:string="";

constructor(private cartService:CartService){}

 ngOnInit(): void {
  throw new Error('Method not implemented.');
 }

 createcart(){
  const orderId=1;
  const productId=1;

this.cartService.insertcart(this.cartItemId.orderId,this.cartItemId.productId,this.cartItemId).subscribe(
  Response=>{
    console.log('Cart item inserted successfully',Response);
    this.msg = 'Cart item inserted successfully'; 

  },
  error=>{
    console.error('Error inserting item to cart:',error);
    this.msg = 'Error inserting item to cart'; 

  }
);
 }
}
