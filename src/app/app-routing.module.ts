import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { productListComponent } from "./product-list/product-list.component";
import { BasketComponent } from "./basket/basket.component";
import { WelcomeComponent } from "./welcome/welcome.component";
import { CampaignComponent } from "./campaign/campaign.component";
import { AdminPageComponent } from './admin-page/admin-page.component';
import { AddProductComponent } from './add-product/add-product.component';
import { AddAdCampaignComponent } from './add-ad-campaign/add-ad-campaign.component';
import { ModifyAdComponent } from './modify-ad/modify-ad.component';
import { LoginPageComponent } from './login-page/login-page.component';
import {SigninComponent } from './signin/signin.component';
import {SignupComponent} from './signup/signup.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  { path: 'store', component: productListComponent,canActivate : [AuthGuard] },
  { path: 'basket', component: BasketComponent,canActivate : [AuthGuard] },
  { path: 'campaign', component: CampaignComponent,canActivate : [AuthGuard] },
  {path: 'addProduct', component:AddProductComponent,canActivate : [AuthGuard]},
  {path: 'addAdCampaign', component:AddAdCampaignComponent,canActivate : [AuthGuard]},
  {path: 'modifyAdCampaign', component:ModifyAdComponent,canActivate : [AuthGuard]},
  {path: 'signin', component:SigninComponent},
  {path: 'signup', component:SignupComponent},
  { path: '',redirectTo:'/signin',pathMatch: 'full'},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],



  exports: [RouterModule]
})
export class AppRoutingModule { }
