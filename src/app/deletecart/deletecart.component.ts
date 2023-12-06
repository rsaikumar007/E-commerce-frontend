import { Component,Input } from '@angular/core';
import { CartService } from '../cart.service';
@Component({
  selector: 'app-deletecart',
  templateUrl: './deletecart.component.html',
  styleUrls: ['./deletecart.component.css']
})
export class DeletecartComponent {

  @Input() cartItemId:number=0;
  msg:string="";


  constructor(private cartService:CartService){}

  deletecart():void{
    if (this.cartItemId) {
      this.cartService.deletecart(this.cartItemId).subscribe(
        () => {
          this.msg = "Item in cart deleted successfully";
        },
        error => {
          console.error('Error deleting item in cart:', error);
          this.msg = "Error deleting item in cart";
        }
      );
    } else {
      console.error('Cart Item ID not provided');
      this.msg = "Cart Item ID not provided";
    }
  }
}
