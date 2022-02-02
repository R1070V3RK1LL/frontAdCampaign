import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {AppRoutingModule} from "./app-routing.module";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActionReducerMap, StoreModule} from "@ngrx/store";
import {ProductReducer} from "./store/reducers/product.reducer";

import { ContactComponent } from "./contact/contact.component";
import { AppComponent } from './app.component';
import { productListComponent } from './product-list/product-list.component';
import { BasketComponent } from './basket/basket.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SearchComponent } from './search/search.component'

@NgModule({
  declarations: [
    AppComponent,
    productListComponent,
    BasketComponent,
    NavbarComponent,
    ContactComponent,
    SearchComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    StoreModule.forRoot({product: ProductReducer} as ActionReducerMap<any,any> ),
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
