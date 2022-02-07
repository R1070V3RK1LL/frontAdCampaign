import { Campaign } from "./campaign.model";

export class Product {
  id: number
  name: string
  description: string
  price: number
  brand: string
  image: string
  quantity: number
  nbClicks:number
  nbViews:number
  nbSales:number
  campaign: Campaign

  constructor() {
    this.id = 0;
    this.name = ''
    this.description = ''
    this.price = 0
    this.brand = ''
    this.image = ''
    this.quantity=0
    this.nbSales=0
    this.nbClicks=0
    this.nbViews=0
    this.campaign= new Campaign
  }

}
