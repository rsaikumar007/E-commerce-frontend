import { Component,Input } from '@angular/core';
import { OrderService } from '../order.service';
@Component({
  selector: 'app-orderdelete',
  templateUrl: './orderdelete.component.html',
  styleUrls: ['./orderdelete.component.css']
})
export class OrderdeleteComponent {

  @Input() orderId:number=0;
  msg:string="";


  constructor(private orderService:OrderService){}

  deleteOrder():void{
    if (this.orderId) {
      this.orderService.deleteOrder(this.orderId).subscribe(
        () => {
          this.msg = "Order deleted successfully";
        },
        error => {
          console.error('Error deleting order:', error);
          this.msg = "Error deleting order";
        }
      );
    } else {
      console.error('Order ID not provided');
      this.msg = "Order ID not provided";
    }
  }
}
