import {Product} from "./product.model";

export class Campaign {
  name: string;
  description: string;
  budget: number;
  ending_date:Date;

  constructor() {
    this.name = '';
    this.description = '';
    this.budget=0.0;
    this.ending_date=new Date(0);
  }
}
