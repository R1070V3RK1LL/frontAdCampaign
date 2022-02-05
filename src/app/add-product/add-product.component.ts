import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Campaign } from '../models/campaign.model';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }
  private name: string = "";
  private description: string = "";
  private price: number=0.0;
  private quantity:number=0;
  private product:Product=new Product;
  private adcampaign:Campaign=new Campaign;

  addProductForm = this.formBuilder.group({
    name: this.name,
    price:this.price,
    quantity:this.quantity,
    description:this.description,
    product:this.product,
    adcampaign:this.adcampaign,
  });



  ngOnInit(): void {
  }

  submit() {
    window.alert(
      this.addProductForm.get('name')?.value + '\n' +
      "Product added"
    )
  }
}
