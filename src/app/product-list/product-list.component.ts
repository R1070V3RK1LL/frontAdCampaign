import { Component, OnInit } from '@angular/core';
import {appState} from "../store/app.state";
import {Store} from "@ngrx/store";
import { Product } from '../models/product.model'
import {productInBasket} from "../models/basket.model";
import {AddToBasket} from "../store/actions/product.actions";
import { ProductController } from '../controllers/productsController';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class productListComponent implements OnInit {

  products: Product[]= [];
  private productController:ProductController;

	// I initialize the app-component.
	constructor( //private store: Store<appState>,
    productController:ProductController
    ) {
      this.productController=productController;
	}


  ngOnInit(): void {
    //this.products = Product.getProducts;
    this.productController.loadProducts();
  }
  addToCampaign(selectedProduct: Product) : void {
    this.productController.addProduct(selectedProduct.name,selectedProduct.description,selectedProduct.price,selectedProduct.brand,selectedProduct.img,selectedProduct.quantity);

  }
  /*
  addToCart(selectedProduct: Product) : void {
    const newProductInBasket = {
      product: selectedProduct
    } as productInBasket;

    this.store.dispatch(new AddToBasket(newProductInBasket))
    console.log(newProductInBasket)
  }
  */
}
