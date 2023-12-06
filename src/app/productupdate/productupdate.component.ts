import { Component,OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';
@Component({
  selector: 'app-productupdate',
  templateUrl: './productupdate.component.html',
  styleUrls: ['./productupdate.component.css']
})
export class ProductupdateComponent implements OnInit{

  product:Product=new Product();
  msg:any="";

  constructor(private productService:ProductService){}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  productUpdate()
  {
    this.productService.updateProduct(this.product).subscribe(data=>{this.msg=data;});
  }
}

