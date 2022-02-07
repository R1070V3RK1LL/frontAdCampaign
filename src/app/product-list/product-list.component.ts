import { Component, OnInit } from '@angular/core';
import { appState } from '../store/app.state';
import { Store } from '@ngrx/store';
import { Product } from '../models/product.model';
import { productInBasket } from '../models/basket.model';
import { AddToBasket } from '../store/actions/product.actions';
import { ProductController } from '../controllers/productsController';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class productListComponent implements OnInit {
  isAdmin : boolean = false;
  products: Product[] = [];
  private productController: ProductController;
  private router: Router;
  
  constructor(productController: ProductController, router: Router) {
    this.productController = productController;
    this.router = router;
  }

  ngOnInit(): void {
    this.isAdmin = localStorage.getItem('isAdmin') == "true";
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
  getSearchedProducts(filter: string): void {
    console.log(filter !== "");
    if (filter == "") {
      this.productController.loadProducts().subscribe((response) => {
        console.log({ response });
        this.products = response;
      });
    } else {
      console.log({ filter });
      this.productController.getSearchProducts(filter).subscribe((response) => {
        console.log({ response });
        this.products = response;
      });
    }
  }
  deleteProduct(id:number):void{
    this.productController.deleteProduct(id).subscribe(
      (response) => {
        console.log("product deleted successfully", response)
      }
    )
    window.location.reload();
  }
  addToCampaign(selectedProduct: Product): void {
    console.log({ selectedProduct });
    this.router.navigate(["add-product-compaign"]);
    localStorage.setItem("currentProduct", JSON.stringify(selectedProduct))
  }
}
