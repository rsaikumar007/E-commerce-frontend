import { Component,Input } from '@angular/core';
import { ProductService } from '../product.service';
@Component({
  selector: 'app-productdelete',
  templateUrl: './productdelete.component.html',
  styleUrls: ['./productdelete.component.css']
})
export class ProductdeleteComponent {
 @Input() productId:number=0;
  msg:string="";


  constructor(private productService:ProductService){}

  deleteProduct():void{
    if (this.productId) {
      this.productService.deleteProduct(this.productId).subscribe(
        () => {
          this.msg = "Product deleted successfully";
        },
        error => {
          console.error('Error deleting product:', error);
          this.msg = "Error deleting product";
        }
      );
    } else {
      console.error('Product ID not provided');
      this.msg = "Product ID not provided";
    }
  }
}