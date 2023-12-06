import { Component,OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Cart } from '../cart';
@Component({
  selector: 'app-updatecart',
  templateUrl: './updatecart.component.html',
  styleUrls: ['./updatecart.component.css']
})
export class UpdatecartComponent implements OnInit{

  cartItemId:Cart= new Cart();
 msg:any="";

constructor(private cartService:CartService){}

 ngOnInit(): void {
  throw new Error('Method not implemented.');

 }

 updatecart(): void {
  this.cartService.updatecart(this.cartItemId)
    .subscribe(
      (response) => {
        console.log('Update successful', response);
        // Handle successful update, if needed
      },
      (error) => {
        console.error('Update failed', error);
        // Handle error, if needed
      }
    );
}
}
