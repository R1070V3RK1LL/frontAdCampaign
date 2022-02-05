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
import { ContactComponent } from './contact/contact.component';
import {SignupComponent} from './signup/signup.component';

const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'store', component: productListComponent },
  { path: 'basket', component: BasketComponent },
  { path: 'campaign', component: CampaignComponent },
  {path: 'addProduct', component:AddProductComponent},
  {path: 'addAdCampaign', component:AddAdCampaignComponent},
  {path: 'modifyAdCampaign', component:ModifyAdComponent},
  {path: 'signin', component:ContactComponent},
  {path: 'singup', component:SignupComponent},
  {
    path: 'adminPage', component: AdminPageComponent,
    children: [
      {
        path: 'addProduct',
        component: AddProductComponent
      },
      {
        path: 'addAdCampaign',
        component: AddAdCampaignComponent
      },
      {
        path: 'modifyAdCampaign',
        component: ModifyAdComponent
      },
    ]
  },
  { path: 'loginPage', component: LoginPageComponent,
  children: [
    {
      path: 'signin',
      component: ContactComponent
    },
    {
      path: 'signup',
      component: SignupComponent
    }]
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],



  exports: [RouterModule]
})
export class AppRoutingModule { }
