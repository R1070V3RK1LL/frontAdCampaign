import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {AppRoutingModule} from "./app-routing.module";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActionReducerMap, StoreModule} from "@ngrx/store";
import {ProductReducer} from "./store/reducers/product.reducer";
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { productListComponent } from './product-list/product-list.component';
import { BasketComponent } from './basket/basket.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CampaignComponent } from './campaign/campaign.component';
import { SignupComponent } from './signup/signup.component';
import { ContactComponent } from './contact/contact.component';
import { AddProductComponent } from './add-product/add-product.component';
import { AddAdCampaignComponent } from './add-ad-campaign/add-ad-campaign.component';
import { ModifyAdComponent } from './modify-ad/modify-ad.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { CampaignController } from './controllers/campaignController';
import { ProductController } from './controllers/productsController';


@NgModule({
  declarations: [
    AppComponent,
    productListComponent,
    BasketComponent,
    NavbarComponent,
    CampaignComponent,
    SignupComponent,
    ContactComponent,
    ModifyAdComponent,
    AddProductComponent,
    AddAdCampaignComponent,
    LoginPageComponent,
    AdminPageComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    StoreModule.forRoot({product: ProductReducer} as ActionReducerMap<any,any> ),
  ],
  providers: [CampaignController,ProductController],
  bootstrap: [AppComponent]
})

export class AppModule { }
