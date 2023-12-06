import { Component,OnInit } from '@angular/core';
import { Cart } from '../cart';
import { CartService } from '../cart.service';
@Component({
  selector: 'app-cartlist',
  templateUrl: './cartlist.component.html',
  styleUrls: ['./cartlist.component.css']
})
export class CartlistComponent implements OnInit{
  carts:Cart[]=[];
constructor(private cartService:CartService){}
ngOnInit(): void {
  this.getCartItems();
}

getCartItems(){
  this.cartService.getAllCartItems().subscribe(data=>
    {
      console.log(data);
      this.carts=data;
    })
}
}
