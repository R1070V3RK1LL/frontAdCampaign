import {Product} from "./product.model";

export class Campaign {
  id:number;
  name: string;
  description: string;
  budget: number;
  startingDate:string;
  endingDate:string;
  products:Product[];

  constructor() {
    this.id = 0;
    this.name = '';
    this.description = '';
    this.budget=0.0;
    this.endingDate="";
    this.startingDate="";
    this.products=[];
  }
}
