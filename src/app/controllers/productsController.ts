import axios from 'axios';
import { ApiClient } from './apiClient';
interface Product {
    id: number;
    name: string;
    budget: number;
}

export class ProductsController {

    private products: Array<Product>;
    private apiClient: ApiClient;

    constructor( apiClient: ApiClient ) {

		this.apiClient = apiClient;
		this.products = [];
		document.cookie = "XSRF-TOKEN=server-generated-token";

	}
    // list of products
    public async loadProducts(): Promise<void> {

        try {
            this.products = await this.apiClient.get<Product[]>({
                url: "http://localhost:8090/api/products",
                params: {
                    limit: 10
                }
            });

        } catch (error) {

            console.error(error);

        }
    }


    // find product.
    public async findProductInCampaign(): Promise<void> {

        try {
            this.products = await this.apiClient.get<Product[]>({
                url: "http://localhost:8090/api/products/{id}",
                params: {
                    limit: 10
                }
            });

        } catch (error) {

            console.error(error);

        }
    }
    // add product.
    public async addProduct(): Promise<void> {

        try {
            this.products = await this.apiClient.post<Product[]>({
                url: "http://localhost:8090/api/products",
                params: {
                    limit: 10
                }
            });

        } catch (error) {

            console.error(error);

        }
    }
    // update product.
    public async updateProduct(): Promise<void> {

        try {
            this.products = await this.apiClient.put<Product[]>({
                url: "http://localhost:8090/api/products/{id}",
                params: {
                    limit: 10
                }
            });

        } catch (error) {

            console.error(error);

        }
    }
    // delete product.
    public async deleteProduct(): Promise<void> {

        try {
            this.products = await this.apiClient.delete<Product[]>({
                url: "http://localhost:8090/api/products/{id}",
                params: {
                    limit: 10
                }
            });

        } catch (error) {

            console.error(error);

        }
    }
}