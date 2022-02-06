import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { productListComponent } from "./product-list/product-list.component";
import { CampaignComponent } from "./campaign/campaign.component";
import { AddProductComponent } from './add-product/add-product.component';
import { AddAdCampaignComponent } from './add-ad-campaign/add-ad-campaign.component';
import { ModifyAdComponent } from './modify-ad/modify-ad.component';
import {SigninComponent } from './signin/signin.component';
import {SignupComponent} from './signup/signup.component';
import { AuthGuard } from './auth.guard';
import { AdminGuard } from './admin.guard';

const routes: Routes = [
  { path: 'store', component: productListComponent,canActivate : [AuthGuard] },
  { path: 'campaign', component: CampaignComponent,canActivate : [AuthGuard] },
  {path: 'addProduct', component:AddProductComponent,canActivate : [AdminGuard]},
  {path: 'addAdCampaign', component:AddAdCampaignComponent,canActivate : [AdminGuard]},
  {path: 'modifyAdCampaign', component:ModifyAdComponent,canActivate : [AdminGuard]},
  {path: 'signin', component:SigninComponent},
  {path: 'signup', component:SignupComponent},
  { path: '',redirectTo:'/signin',pathMatch: 'full'},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],



  exports: [RouterModule]
})
export class AppRoutingModule { }
