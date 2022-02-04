import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {productListComponent} from "./product-list/product-list.component";
import {BasketComponent} from "./basket/basket.component";
import {ContactComponent} from "./contact/contact.component";
import {SignupComponent} from "./signup/signup.component";
import {WelcomeComponent} from "./welcome/welcome.component";
import {CampaignComponent} from "./campaign/campaign.component";


const routes: Routes=[
  {path: '', component:WelcomeComponent},
  {path: 'store', component: productListComponent},
  {path: 'basket', component: BasketComponent},
  {path: 'campaign', component: CampaignComponent},
  {path: 'signin', component:ContactComponent},
  {path: 'signup', component:SignupComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
