import { Component,OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';
@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit{

  products:Product[]=[];
   product:Product=new Product();
   constructor(private productService:ProductService){}

  ngOnInit(): void {
    this.getAllProducts();
  }

  getAllProducts()
  {
    this.productService.getProducts().subscribe(data=>{this.products=data;});
  }

}

