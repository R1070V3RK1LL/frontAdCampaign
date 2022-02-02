import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {BasketService} from "../services/basket.service";
import {Product} from "../models/product.model";
import {productInBasket} from "../models/basket.model";
import {Store} from "@ngrx/store";
import {appState} from "../store/app.state";
import {RemoveFromBasket} from "../store/actions/product.actions";

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent implements OnInit {

  productsInBasket$: Observable<Product[]> | undefined;

  constructor(private store: Store<appState>) {}

  ngOnInit(): void {
    this.productsInBasket$ = this.store.select(store => store.product)
    console.log(this.productsInBasket$)
  }

  removeproductFromBasket(id: number) : void {
    this.store.dispatch(new RemoveFromBasket(id))
  }
}
