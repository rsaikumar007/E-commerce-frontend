import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import{Product} from './product';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private restUrl='http://localhost:8080/product'

  constructor(private httpClient:HttpClient) {}

  getProducts():Observable<Product[]>
  {
    return this.httpClient.get<Product[]>(`${this.restUrl}/getall`,{responseType:'json'});

  }

  saveProduct(product:Product):Observable<Object>
  {
    return this.httpClient.post(`${this.restUrl}/insert`,product,{responseType:"text"});
  }

  updateProduct(product:Product):Observable<Object>
  {
    return this.httpClient.put(`${this.restUrl}/update`,product,{responseType:"text"});
  }

  deleteProduct(id:number):Observable<Object>
  {
    return this.httpClient.delete(`${this.restUrl}/delete/${id}`,{responseType:"text"});
  }

}