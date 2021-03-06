import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActionReducerMap, StoreModule } from '@ngrx/store';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { productListComponent } from './product-list/product-list.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CampaignComponent } from './campaign/campaign.component';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { AddProductComponent } from './add-product/add-product.component';
import { AddAdCampaignComponent } from './add-ad-campaign/add-ad-campaign.component';
import { ModifyAdComponent } from './modify-ad/modify-ad.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { CampaignController } from './controllers/campaignController';
import { ProductController } from './controllers/productsController';
import { AuthGuard } from './auth.guard';
import { authInterceptorProviders } from './auth.interceptor';
import { AddAdComponent } from './add-ad/add-ad.component';

@NgModule({
  declarations: [
    AppComponent,
    productListComponent,
    NavbarComponent,
    CampaignComponent,
    SignupComponent,
    SigninComponent,
    ModifyAdComponent,
    AddProductComponent,
    AddAdCampaignComponent,
    LoginPageComponent,
    AdminPageComponent,
    AddAdComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [
    CampaignController,
    ProductController,
    AuthGuard,
    authInterceptorProviders,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
