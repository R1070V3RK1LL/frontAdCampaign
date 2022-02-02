import products from "../products.json";

export class Product {
  id: number
  name: string
  description: string
  price: number
  brand: string
  img: string
  category: string

  constructor() {
    this.id = 0;
    this.name = ''
    this.description = ''
    this.price = 0
    this.brand = ''
    this.img = ''
    this.category = ''
  }

  static get getProducts(): Product[] {
    return [...products
    ] as Product[];
}
}
