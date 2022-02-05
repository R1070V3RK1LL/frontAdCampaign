import { Component, OnInit } from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {Product} from "../models/product.model";
import { CartService } from '../services/cart.service';
import{HttpClient} from '@angular/common/http';
import { ApiClient } from '../controllers/apiClient';
import { CampaignController } from '../controllers/campaignController';
@Component({
  selector: 'app-campaign',
  templateUrl: './campaign.component.html',
  styleUrls: ['./campaign.component.css']
})
export class CampaignComponent implements OnInit {


  productsInCampaign$: Observable<Product[]> | undefined;
  private campaignController:CampaignController;

  ngOnInit(): void {
    this.campaignController.loadCampaigns();
  }
  constructor(private cartService: CartService) { }
  //shippingPrices=this.cartService.getShippingPrices();
  //shippingNames=this.cartService.getShippingNames();
  //shippingBrands=this.cartService.getShippingBrands();
}