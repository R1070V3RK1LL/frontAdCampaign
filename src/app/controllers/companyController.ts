import axios from 'axios';
import {HttpClient} from '@angular/common/http';
import {Injectable}from '@angular/core';
interface Company {
    id: number;
    name: string;
}
@Injectable()
export class companyController {


    constructor(private  http: HttpClient ) {

	}
    // list of companies.
    public async loadCompanies(){

        try {
            return this.http.get<Company>('http://localhost:8090/api/companies');

        } catch (error) {

            console.error(error);
            return;
        }
    }

    // find company.
    public async findcompany(id:number){

        try {
            return this.http.get<Company>(`http://localhost:8090/api/companies/${id}`);

        } catch (error) {

            console.error(error);
            return;
        }
    }
    // add company.
    public async addCompany(name:string){

        try {
            var body={
                name,
            }
            return this.http.post<Company>("http://localhost:8090/api/companies", body);


        } catch (error) {

            console.error(error);
            return;
        }
    }
    // update company.
    public async updateCompany(id:number,name:string){

        try {
            var body={
                name,
            }
            return this.http.put<Company>(`http://localhost:8090/api/companies/${id}`, body);


        } catch (error) {

            console.error(error);
            return;
        }
    }
    // delete company.
    public async deleteCompany(id:number){

            try {
                return this.http.delete<Company>(`http://localhost:8090/api/companies/${id}`);

            } catch (error) {

                console.error(error);
                return;
            }
        }
}