import axios from 'axios';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Campaign } from '../models/campaign.model';
interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  brand: string;
  img: string;
  quantity: number;
  nbClicks: number;
  nbViews: number;
  nbSales: number;
}

@Injectable()
export class ProductController {
  constructor(private http: HttpClient) { }
  // list of products.
  public loadProducts(): Observable<any> {
    return this.http.get<Product>('http://localhost:8090/api/products');
  }

  // find product.
  public findProduct(id: number): Observable<any> {
    return this.http.get<Product>(`http://localhost:8090/api/products/${id}`);
  }
  // add product.
  public addProduct(
    name: string,
    price: number,
    brand: string,
    img: string,
    quantity: number
  ): Observable<any> {
    var body = {
      name,
      price,
      brand,
      img,
      quantity,
    };
    return this.http.post<Product>('http://localhost:8090/api/products', body);
  }
  // add product to campaign.
  public addProductToCampaign(
    name: string,
    bid: number,
    description: string,
    adcampaign:Campaign,
    product: Product,

  ): Observable<any> {
    var body = {
      name,
      bid,
      description,
      adcampaign,
      product,
    };
    return this.http.post<Product>('http://localhost:8090/api/products', body);
  }
  // update product.
  public updateProduct(
    id: number,
    name: string,
    price: number,
    brand: string,
    img: string,
    quantity: number
  ): Observable<any> {
    var body = {
      name,
      price,
      brand,
      img,
      quantity,
    };
    return this.http.put<Product>(
      `http://localhost:8090/api/products/${id}`,
      body
    );
  }
  // delete product.
  public deleteProduct(id: number): Observable<any> {
    return this.http.delete<Product>(
      `http://localhost:8090/api/products/${id}`
    );
  }
    // search for products.
    public getSearchProducts(filter: string): Observable<any> {
      return this.http.post<Product>(
        `http://localhost:8090/api/products/search`,filter
      );
    }

       // add product to campaign.
   public addProductCampaign(
    id:number,
    campaign: Campaign
  ): Observable<any> {

    console.log({campaign})
    return this.http.post<Campaign>(
      `http://localhost:8090/api/products/campaign/${id}/`,
      campaign
    );
  }
}
