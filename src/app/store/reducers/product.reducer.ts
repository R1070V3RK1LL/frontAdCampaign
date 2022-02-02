import {Product} from '../../models/product.model'

import * as StoreActions from '../actions/product.actions'

const initialState : Product[] = []

export function ProductReducer(state: Product[] = initialState, action: StoreActions.Actions){
  switch (action.type){
    case "[Product] Add":
      console.log([...state, action.payload])
      return [...state, action.payload];
    case "[Product] Remove":
      state.splice(action.payload, 1)
      return state
    default:
      return state;
  }

}
