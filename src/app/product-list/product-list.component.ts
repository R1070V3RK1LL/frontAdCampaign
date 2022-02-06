import { Component, OnInit } from '@angular/core';
import {appState} from "../store/app.state";
import {Store} from "@ngrx/store";
import { Product } from '../models/product.model'
import {productInBasket} from "../models/basket.model";
import {AddToBasket} from "../store/actions/product.actions";
import { ProductController } from '../controllers/productsController';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class productListComponent implements OnInit {

  products: Product[]= [];
  public Form = this.formBuilder.group({});
  private id:number=0;
	// I initialize the app-component.
	constructor( //private store: Store<appState>,
    private formBuilder:FormBuilder,
    private productController:ProductController
    ) {
      this.productController=productController;
      this.Form=this.formBuilder.group({
        id: this.id,
      });
	}


  ngOnInit(): void {
    //this.products = Product.getProducts;
    this.productController.loadProducts();
  }
  findProduct():void{
    var id=this.Form.get('id')?.value;
    this.productController.findProduct(id);
  }
  addToCampaign(selectedProduct: Product) : void {
    console.log({selectedProduct})
    this.productController.addProduct(selectedProduct.name,selectedProduct.price,selectedProduct.brand,selectedProduct.img,selectedProduct.quantity);

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
