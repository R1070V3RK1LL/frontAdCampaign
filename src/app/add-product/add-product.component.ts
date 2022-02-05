import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Campaign } from '../models/campaign.model';
import { Product } from '../models/product.model';
import { ProductController } from '../controllers/productsController';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  private productController: ProductController;

  constructor(private formBuilder: FormBuilder, productController: ProductController) { this.productController = productController; }
  private name: string = "";
  private description: string = "";
  private price: number = 0.0;
  private image: string = "";
  private brand: string = "";
  private quantity: number = 0;
  private product: Product = new Product;
  private adcampaign: Campaign = new Campaign;

  addProductForm = this.formBuilder.group({
    name: this.name,
    price: this.price,
    image: this.image,
    brand: this.brand,
    quantity: this.quantity,
    description: this.description,
    product: this.product,
    adcampaign: this.adcampaign,
  });



  ngOnInit(): void {
  }

  submit() {

    var name = this.addProductForm.get('name')?.value;
    var price = this.addProductForm.get('price')?.value;
    var quantity = this.addProductForm.get('quantity')?.value;
    var description = this.addProductForm.get('description')?.value;
    var image = this.addProductForm.get('image')?.value;
    var brand = this.addProductForm.get('brand')?.value;
    this.productController.addProduct(name, description, price, brand, image, quantity)
    window.alert(
      name + '\n' +
      "Product added"
    )
  }
}
