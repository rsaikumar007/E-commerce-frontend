import { Component,OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-createproduct',
  templateUrl: './createproduct.component.html',
  styleUrls: ['./createproduct.component.css']
})
export class CreateproductComponent implements OnInit {

  constructor(private productService:ProductService){}

  product:Product=new Product();
  msg:any="";

    ngOnInit(): void {
      throw new Error('Method not implemented.');
    }

    

  createProduct()
  {
    this.productService.saveProduct(this.product).subscribe(data=>{this.msg=data;});
  }

}