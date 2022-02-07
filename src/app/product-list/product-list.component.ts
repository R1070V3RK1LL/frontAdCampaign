import { Component, OnInit } from '@angular/core';
import { appState } from '../store/app.state';
import { Store } from '@ngrx/store';
import { Product } from '../models/product.model';
import { productInBasket } from '../models/basket.model';
import { AddToBasket } from '../store/actions/product.actions';
import { ProductController } from '../controllers/productsController';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class productListComponent implements OnInit {
  products: Product[] = [];
  private productController: ProductController;

  constructor(
    productController: ProductController
  ) {
    this.productController = productController;
  }

  ngOnInit(): void {
    this.productController.loadProducts().subscribe(
      (response) => {
        this.products = response;
        console.log('response received', response);
      },
      (error) => {
        console.error('Request failed with error', error);
      }
    );
  }
  getSearchedProducts(filter: string):void{
    console.log({filter})
    this.productController.getSearchProducts(filter).subscribe((response) => {
      console.log({response})
      this.products = response;
    })
  }
  addToCampaign(selectedProduct: Product): void {
    console.log({ selectedProduct });
    this.productController
      .addProduct(
        selectedProduct.name,
        selectedProduct.price,
        selectedProduct.brand,
        selectedProduct.image,
        selectedProduct.quantity
      )
      .subscribe(
        (response) => {
          this.products = response;
          console.log('response received', response);
        },
        (error) => {
          console.error('Request failed with error', error);
        }
      );
  }
}
