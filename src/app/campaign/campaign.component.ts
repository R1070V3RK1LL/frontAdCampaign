import { Component, OnInit } from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {Product} from "../models/product.model";
import { CartService } from '../services/cart.service';
import{HttpClient} from '@angular/common/http';

const subject= new BehaviorSubject(0);
@Component({
  selector: 'app-campaign',
  templateUrl: './campaign.component.html',
  styleUrls: ['./campaign.component.css']
})
export class CampaignComponent implements OnInit {

  productsInCampaign$: Observable<Product[]> | undefined;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
  }
  shippingPrices=this.cartService.getShippingPrices();
  shippingNames=this.cartService.getShippingNames();
  shippingBrands=this.cartService.getShippingBrands();
}
