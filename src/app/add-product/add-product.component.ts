import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Campaign } from '../models/campaign.model';
import { Product } from '../models/product.model';
import { ProductController } from '../controllers/productsController';
import { HttpClient } from '@angular/common/http';
import { CampaignController } from '../controllers/campaignController';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private productController: ProductController, private campaignController:CampaignController) { }
  private name: string = "";
  private price: number = 0.0;
  private image: string = "";
  private brand: string = "";
  private quantity: number = 0;
  private product: Product = new Product;
  private adcampaign: Campaign = new Campaign;
  campaigns : Campaign[] = []

  addProductForm = this.formBuilder.group({
    name: this.name,
    price: this.price,
    image: this.image,
    brand: this.brand,
    quantity: this.quantity,
    product: this.product,
    adcampaign: this.adcampaign,
  });



  ngOnInit(): void {
    this.campaignController.loadCampaigns().subscribe(
      (response) => {    
        this.campaigns = response;
        console.log('response received', response)
      },
      (error) => {                             
        console.error('Request failed with error', error)
      });
  }

  submit() {

    var name = this.addProductForm.get('name')?.value;
    var price = this.addProductForm.get('price')?.value;
    var quantity = this.addProductForm.get('quantity')?.value;

    var image = this.addProductForm.get('image')?.value;
    var brand = this.addProductForm.get('brand')?.value;
    console.log({name, price, brand, image, quantity})
    this.productController.addProduct(name, price, brand, image, quantity).subscribe(
      (response) => {                           
        console.log('response received', response)
      },
      (error) => {                             
        console.error('Request failed with error', error)
      })
  
  }
}
