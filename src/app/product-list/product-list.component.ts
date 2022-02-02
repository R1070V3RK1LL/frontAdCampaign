import { Component, OnInit } from '@angular/core';
import {appState} from "../store/app.state";
import {Store} from "@ngrx/store";
import { Product } from '../models/product.model'
import {productInBasket} from "../models/basket.model";
import {AddToBasket} from "../store/actions/product.actions";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class productListComponent implements OnInit {

  products: Product[]= [];

  constructor(private store: Store<appState>) {
  }


  ngOnInit(): void {
    this.products = Product.getProducts;
  }

  addToCart(selectedProduct: Product) : void {
    const newProductInBasket = {
      product: selectedProduct
    } as productInBasket;

    this.store.dispatch(new AddToBasket(newProductInBasket))
    console.log(newProductInBasket)
  }
}
