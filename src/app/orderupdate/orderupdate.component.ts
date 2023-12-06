import { Component,OnInit ,Input} from '@angular/core';
import { Order } from '../order';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-orderupdate',
  templateUrl: './orderupdate.component.html',
  styleUrls: ['./orderupdate.component.css']
})
export class OrderupdateComponent implements OnInit{
  order: any={};
  msg: string = "";
  constructor(private orderService: OrderService) { }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  setPaymentMethod(method: string) {
    this.order.paymentMethod = method;
  }

  private generateTransactionId(): string {
    const randomString = Math.random().toString(36).substring(2, 15) +
                         Math.random().toString(36).substring(2, 15);
    return randomString;
  }
  
  orderUpdate(){
    this.order.paymentStatus='Paid';
    this.order.transactionId=this.generateTransactionId();

    this.orderService.updateOrder(this.order).subscribe(
      (data: any) => {
        this.msg = data;
      },
      (error) => {
        console.error('Error updating order:', error);
        this.msg = 'Error updating order. Please try again.';
      }
    );
  }
}
