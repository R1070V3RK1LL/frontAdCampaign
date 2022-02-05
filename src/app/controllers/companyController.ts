import axios from 'axios';
import { ApiClient } from './apiClient';
interface Company {
    id: number;
    name: string;
}

export class CompanyController {

    private companies: Array<Company>;
    private apiClient: ApiClient;
    private Id:number=0;

    constructor( apiClient: ApiClient ) {

		this.apiClient = apiClient;
		this.companies = [];
		document.cookie = "XSRF-TOKEN=server-generated-token";

	}
    // list of companies.
    public async loadCompanies(): Promise<void> {

        try {
            this.companies = await this.apiClient.get<Company[]>({
                url: "http://localhost:8090/api/companies",
                params: {
                    limit: 10
                }
            });

        } catch (error) {

            console.error(error);

        }
    }

    // find company
    public async findCompany(): Promise<void> {

        try {
            this.companies = await this.apiClient.get<Company[]>({
                url: "http://localhost:8090/api/companies/{id}",
                params: {
                    limit: 10
                }
            });

        } catch (error) {

            console.error(error);

        }
    }
    // add company
    public async addCompany(): Promise<void> {

        try {
            this.companies = await this.apiClient.post<Company[]>({
                url: "http://localhost:8090/api/companies",
                params: {
                    limit: 10
                }
            });

        } catch (error) {

            console.error(error);

        }
    }
    // update company
    public async updateCompany(): Promise<void> {

        try {
            this.companies = await this.apiClient.put<Company[]>({
                url: "http://localhost:8090/api/companies/{id}",
                params: {
                    limit: 10
                }
            });

        } catch (error) {

            console.error(error);

        }
    }
    // delete company.
    public async deleteCompany(): Promise<void> {

        try {
            this.companies = await this.apiClient.delete<Company[]>({
                url: "http://localhost:8090/api/companies/{id}",
                params: {
                    limit: 10
                }
            });

        } catch (error) {

            console.error(error);

        }
    }
}