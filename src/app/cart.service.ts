import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cart } from './cart';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CartService {

  private restUrl = 'http://localhost:8080/cart'; 

  constructor(private http: HttpClient) { }

  getAllCartItems():Observable<Cart[]>{
    const response=this.http.get<Cart[]>(`${this.restUrl}/getall`,{responseType:'json'});
    console.log(response);
    return response;
  }
  insertcart(orderId: number,productId:number,cartItem: Cart): Observable<Object> {
    return this.http.post(`${this.restUrl}/insert/${orderId}/${productId}`, cartItem,{responseType:"json"});
  }

  updatecart(cartItem: Cart): Observable<Object> {
    return this.http.put(`${this.restUrl}/update`, cartItem,{responseType:"text"});
  }

  deletecart(cartId: number): Observable<Object> {
    return this.http.delete(`${this.restUrl}/delete/${cartId}`,{responseType:"json"});
  }

}
