import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ProductController } from '../controllers/productsController';
import { Campaign } from '../models/campaign.model';
import { Product } from '../models/product.model';
import { CampaignController } from './../controllers/campaignController';

@Component({
  selector: 'app-add-ad',
  templateUrl: './add-ad.component.html',
  styleUrls: ['./add-ad.component.css']
})
export class AddAdComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private productController: ProductController, private campaignController:CampaignController) { }
  private name: string = "";
  private bid: number = 0.0;
  private adcampaign: Campaign = new Campaign;
  private product:Product=new Product;
  private description:string="";

  public products: Product[]=[];
  public campaigns: Campaign[]=[];

  addAdForm = this.formBuilder.group({
    name: this.name,
    bid: this.bid,
    adcampaign: this.adcampaign,
    product:this.product,
    description:this.description,
  });



  ngOnInit(): void {
  }
  loadProducts(){
    this.productController.loadProducts().subscribe(
      (response) => {
        this.products=response;
        console.log('response received', response)
      },
      (error) => {
        console.error('Request failed with error', error)
      })
  }
  loadCampaigns(){
    this.campaignController.loadCampaigns().subscribe(
      (response) => {
        this.campaigns=response;
        console.log('response received', response)
      },
      (error) => {
        console.error('Request failed with error', error)
      })
  }
  submit() {

    var name = this.addAdForm.get('name')?.value;
    var price = this.addAdForm.get('price')?.value;
    var description = this.addAdForm.get('description')?.value;
    var adcampaign = this.addAdForm.get('adcampaign')?.value;
    var product = this.addAdForm.get('product')?.value;
    this.productController.addProductToCampaign(name, price,description,adcampaign,product).subscribe(
      (response) => {
        console.log('response received', response)
      },
      (error) => {
        console.error('Request failed with error', error)
      })

  }
}