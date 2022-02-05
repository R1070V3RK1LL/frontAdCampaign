import { Component, OnInit } from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {Product} from "../models/product.model";
import { CartService } from '../services/cart.service';
import{HttpClient} from '@angular/common/http';
import { CampaignController } from '../controllers/campaignController';
@Component({
  selector: 'app-campaign',
  templateUrl: './campaign.component.html',
  styleUrls: ['./campaign.component.css']
})
export class CampaignComponent implements OnInit {


  productsInCampaign$: Observable<Product[]> | undefined;
  private campaignController:CampaignController;

	// I initialize the app-component.
	constructor(campaignController:CampaignController ) {

    this.campaignController=campaignController;

		// In order to demonstrate that Axios will engage the XSRF protection, let's
		// set an XSRF-TOKEN cookie.
		// --
		// NOTE: This would normally be some unpredictable value set by the server.
		document.cookie = "XSRF-TOKEN=server-generated-token";

	}

  ngOnInit(): void {
    this.campaignController.loadCampaigns();
  }
  //constructor(private cartService: CartService) { }
  //shippingPrices=this.cartService.getShippingPrices();
  //shippingNames=this.cartService.getShippingNames();
  //shippingBrands=this.cartService.getShippingBrands();
}