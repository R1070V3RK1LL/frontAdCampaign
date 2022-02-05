import {Product} from "./product.model";

export class Campaign {
  name: string;
  description: string;
  budget: number;
  startingDate:string;
  endingDate:string;
  products:Product[];

  constructor() {
    this.name = '';
    this.description = '';
    this.budget=0.0;
    this.endingDate="";
    this.startingDate="";
    this.products=[];
  }
}
