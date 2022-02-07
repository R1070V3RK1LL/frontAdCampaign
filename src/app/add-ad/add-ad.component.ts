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

  constructor(private formBuilder: FormBuilder, private campaignController:CampaignController, private productController:ProductController) { }
   product:Product=new Product;

  public products: Product[]=[];
  public campaigns: Campaign[]=[];
  private id:number=0;

  addAdForm = this.formBuilder.group({
    id:0,
    product:this.product,
  });



 
  ngOnInit(): void {
    console.log(JSON.parse(localStorage.getItem("currentProduct") as string))
    this.product = JSON.parse(localStorage.getItem("currentProduct") as string)
    this.loadCampaigns();
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

    let id = this.addAdForm.get('id')?.value;
    let campaign = this.campaigns.find(obj => {
      return obj.id === id
    })
    console.log('id', id)
    this.productController.addProductCampaign(id, campaign as Campaign).subscribe(
      (response) => {
        console.log('response received', response)
      },
      (error) => {
        console.error('Request failed with error', error)
      })

  }
}