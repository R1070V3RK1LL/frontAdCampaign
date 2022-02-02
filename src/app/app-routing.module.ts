import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {productListComponent} from "./product-list/product-list.component";
import {BasketComponent} from "./basket/basket.component";
import {ContactComponent} from "./contact/contact.component";
import {WelcomeComponent} from "./welcome/welcome.component";
import {SearchComponent} from "./search/search.component";
import {CampaignComponent} from "./campaign/campaign.component";


const routes: Routes=[
  {path: '', component:WelcomeComponent},
  {path: 'store', component: productListComponent},
  {path: 'basket', component: BasketComponent},
  {path: 'campaign', component: CampaignComponent},
  {path: 'contact', component:ContactComponent},
  {path:'search',component:SearchComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
