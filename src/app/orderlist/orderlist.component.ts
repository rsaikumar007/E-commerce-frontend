import { Component ,OnInit} from '@angular/core';
import { Order } from '../order';
import { OrderService } from '../order.service';
import { Customer } from '../customer';

@Component({
  selector: 'app-orderlist',
  templateUrl: './orderlist.component.html',
  styleUrls: ['./orderlist.component.css']
})
export class OrderlistComponent implements OnInit{

orders:Order[]=[];
constructor(private orderService:OrderService,  ){
}
ngOnInit(): void {
  this.getOrders();
}

getOrders(){
this.orderService.getAllOrders().subscribe(data=>{
  console.log(data);
  this.orders=data;});
}

}
