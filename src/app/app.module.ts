import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {AppRoutingModule} from "./app-routing.module";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActionReducerMap, StoreModule} from "@ngrx/store";
import {ProductReducer} from "./store/reducers/product.reducer";
import {HttpClientModule} from '@angular/common/http';

import { ContactComponent } from "./contact/contact.component";
import { AppComponent } from './app.component';
import { productListComponent } from './product-list/product-list.component';
import { BasketComponent } from './basket/basket.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CampaignComponent } from './campaign/campaign.component';
import { SignupComponent } from './signup/signup.component';

@NgModule({
  declarations: [
    AppComponent,
    productListComponent,
    BasketComponent,
    NavbarComponent,
    ContactComponent,
    CampaignComponent,
    SignupComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    StoreModule.forRoot({product: ProductReducer} as ActionReducerMap<any,any> ),
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
