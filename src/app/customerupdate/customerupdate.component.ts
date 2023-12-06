import { Component,OnInit } from '@angular/core';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-customerupdate',
  templateUrl: './customerupdate.component.html',
  styleUrls: ['./customerupdate.component.css']
})
export class CustomerupdateComponent implements OnInit{

  customer:Customer=new Customer();
  msg:any="";

  constructor(private customerService:CustomerService){}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  customerUpdate()
  {
    this.customerService.updateCustomer(this.customer).subscribe(data=>{this.msg=data;});
  }
}
