import {Injectable} from "@angular/core";
import products from '../products.json'
import {Product} from "../models/product.model";


@Injectable(
  {providedIn: 'root',}
)
export class BookListService {

  constructor() {}

  getBooks(): Product[] {
    return [products
    ] as Product[];
  }
}
