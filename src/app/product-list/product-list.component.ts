import { Component, OnInit } from '@angular/core';
import {appState} from "../store/app.state";
import {Store} from "@ngrx/store";
import { Product } from '../models/product.model'
import {productInBasket} from "../models/basket.model";
import {productInCampaign} from "../models/campaign.model";
import {AddToBasket} from "../store/actions/product.actions";
import { ProductsController } from '../controllers/productsController';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class productListComponent implements OnInit {

  products: Product[]= [];
  private productsController:ProductsController;

	// I initialize the app-component.
	constructor( private store: Store<appState>, productsController:ProductsController ) {

    this.productsController=productsController;

		// In order to demonstrate that Axios will engage the XSRF protection, let's
		// set an XSRF-TOKEN cookie.
		// --
		// NOTE: This would normally be some unpredictable value set by the server.
		document.cookie = "XSRF-TOKEN=server-generated-token";
	}


  ngOnInit(): void {
    this.products = Product.getProducts;
    this.productsController.loadProducts();
  }
  addToCampaign(selectedProduct: Product) : void {
    const newProductInCampaign={
      product: selectedProduct
    } as productInCampaign;

  }
  addToCart(selectedProduct: Product) : void {
    const newProductInBasket = {
      product: selectedProduct
    } as productInBasket;

    this.store.dispatch(new AddToBasket(newProductInBasket))
    console.log(newProductInBasket)
  }
}
