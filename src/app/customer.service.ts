import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Customer } from './customer';
@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private restUrl='http://localhost:8080/customers'

  constructor(private httpClient:HttpClient) {}

  getCustomers():Observable<Customer[]>
  {
    return this.httpClient.get<Customer[]>(`${this.restUrl}/getall`,{responseType:'json'});

  }

  saveCustomer(customer:Customer):Observable<Object>
  {
    return this.httpClient.post(`${this.restUrl}/insert`,customer,{responseType:"text"});
  }

  updateCustomer(customer:Customer):Observable<Object>
  {
    return this.httpClient.put(`${this.restUrl}/update`,customer,{responseType:"text"});
  }
}
