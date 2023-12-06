import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Order } from './order';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private restUrl = 'http://localhost:8080/order'; 

  constructor(private http: HttpClient) { }

  getAllOrders(): Observable<Order[]> {
    const response= this.http.get<Order[]>(`${this.restUrl}/getall`,{responseType:'json'});
    console.log(response);
    return response;
  }

  getOrderById(orderId: number): Observable<Object> {
    return this.http.get(`${this.restUrl}/${orderId}`,{responseType:"text"});
  }

  insertOrder(customerId: number, order: Order): Observable<Object> {
    return this.http.post(`${this.restUrl}/insert/${customerId}`, order,{responseType:"text"});
  }

  updateOrder(order: Order): Observable<Object> {
    return this.http.put(`${this.restUrl}/update`, order,{responseType:"text"});
  }

  deleteOrder(orderId: number): Observable<Object> {
    return this.http.delete(`${this.restUrl}/delete/${orderId}`,{responseType:"text"});
  }

}
