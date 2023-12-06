import { Component,OnInit,Input } from '@angular/core';
import { Order } from '../order';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-createorder',
  templateUrl: './createorder.component.html',
  styleUrls: ['./createorder.component.css']
})
export class CreateorderComponent implements OnInit{
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
  
  createOrder(){
    this.order.paymentStatus='Paid';
    this.order.transactionId=this.generateTransactionId();

    this.orderService.insertOrder(this.order.customerId, this.order).subscribe(
      (data: any) => {
        this.msg = data;
      },
      (error) => {
        console.error('Error creating order:', error);
        this.msg = 'Error creating order. Please try again.';
      }
    );
  }
}
