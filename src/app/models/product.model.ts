import products from "../products.json";

export class Product {
  id: number
  name: string
  description: string
  price: number
  brand: string
  img: string
  quantity: number
  nbClicks:number
  nbViews:number
  nbSales:number

  constructor() {
    this.id = 0;
    this.name = ''
    this.description = ''
    this.price = 0
    this.brand = ''
    this.img = ''
    this.quantity=0
    this.nbSales=0
    this.nbClicks=0
    this.nbViews=0
  }

  static get getProducts(): Product[] {
    return [...products
    ] as Product[];
}
}
