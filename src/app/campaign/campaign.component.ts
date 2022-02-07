import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Product } from '../models/product.model';
import { CartService } from '../services/cart.service';
import { HttpClient } from '@angular/common/http';
import { CampaignController } from '../controllers/campaignController';
import { Campaign } from '../models/campaign.model';
@Component({
  selector: 'app-campaign',
  templateUrl: './campaign.component.html',
  styleUrls: ['./campaign.component.css'],
})
export class CampaignComponent implements OnInit {
  productsInCampaign$: Observable<Product[]> | undefined;
  private campaignController: CampaignController;
  campaigns: Campaign[] = [];
  constructor(campaignController: CampaignController) {
    this.campaignController = campaignController;
    document.cookie = 'XSRF-TOKEN=server-generated-token';
  }

  ngOnInit(): void {
    this.campaignController.loadCampaigns().subscribe(
      (response) => {
        this.campaigns = response;
        console.log('response received', response);
      },
      (error) => {
        console.error('Request failed with error', error);
      }
    );
  }
}
