import { Injectable } from '@angular/core'
import { Action } from '@ngrx/store'
import {Product} from '../../models/product.model'
import {productInBasket} from "../../models/basket.model";



export const ADD_TO_BASKET = '[Product] Add'
export const REMOVE_FROM_BASKET = '[Product] Remove'

export class AddToBasket implements Action {
  readonly type =  ADD_TO_BASKET;

  constructor(public payload: productInBasket) {}
}

export class RemoveFromBasket implements Action {
  readonly type =  REMOVE_FROM_BASKET;

  constructor(public payload: number) {}
}


export type Actions = AddToBasket | RemoveFromBasket
