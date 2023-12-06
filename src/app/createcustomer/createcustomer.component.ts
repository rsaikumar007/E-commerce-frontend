import { Component,OnInit } from '@angular/core';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';
@Component({
  selector: 'app-createcustomer',
  templateUrl: './createcustomer.component.html',
  styleUrls: ['./createcustomer.component.css']
})
export class CreatecustomerComponent implements OnInit{
  constructor(private customerService:CustomerService){}

  customer:Customer=new Customer();
  msg:any="";

    ngOnInit(): void {
      throw new Error('Method not implemented.');
    }

  createCustomer()
  {
    this.customerService.saveCustomer(this.customer).subscribe(data=>{this.msg=data;});
  }


}
