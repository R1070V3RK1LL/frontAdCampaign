import axios from 'axios';
import {HttpClient} from '@angular/common/http';
interface Product {
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
}

export class ProductController {

    private products: Array<Product>;

    constructor(private  http: HttpClient ) {

		this.http= http;
		this.products = [];
		document.cookie = "XSRF-TOKEN=server-generated-token";

	}
    // list of products.
    public async loadProducts(){

        try {
            return this.http.get<Product>('http://localhost:8090/api/products');

        } catch (error) {

            console.error(error);
            return;
        }
    }

    // find product.
    public async findProduct(id:number){

        try {
            return this.http.get<Product>(`http://localhost:8090/api/products/${id}`);

        } catch (error) {

            console.error(error);
            return;
        }
    }
    // add product.
    public async addProduct(
        name: string,
        description: string,
        price: number,
        brand: string,
        img: string,
        quantity: number,
){

        try {
            var body={
                name,
                description,
                price,
                brand,
                img,
                quantity,
            }
            return this.http.post<Product>("http://localhost:8090/api/products", body);


        } catch (error) {

            console.error(error);
            return;
        }
    }
    // update product.
    public async updateProduct(id:number,
        name: string,
        description: string,
        price: number,
        brand: string,
        img: string,
        quantity: number,
){

        try {
            var body={
                name,
                description,
                price,
                brand,
                img,
                quantity,
            }
            return this.http.put<Product>(`http://localhost:8090/api/products/${id}`, body);


        } catch (error) {

            console.error(error);
            return;
        }
    }
    // delete product.
    public async deleteProduct(id:number){

            try {
                return this.http.delete<Product>(`http://localhost:8090/api/products/${id}`);

            } catch (error) {

                console.error(error);
                return;
            }
        }
}