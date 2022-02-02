import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor( private http: HttpClient) { }
  getShippingPrices(){
    return this.http.get<{type: string, price: number}[]>('../products.json')
  }
  getShippingNames(){
    return this.http.get<{type: string, name: string}[]>('../products.json')
  }
  getShippingBrands(){
    return this.http.get<{type: string, brand: string}[]>('../products.json')
  }
}
