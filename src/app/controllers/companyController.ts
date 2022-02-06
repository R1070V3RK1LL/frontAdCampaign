import axios from 'axios';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
interface Company {
        id: number;
        name: string;
}
@Injectable()
export class companyController {


        constructor(private http: HttpClient) {

        }
        // list of companies.
        public loadCompanies(): Observable<any> {


                return this.http.get<Company>('http://localhost:8090/api/companies');


        }

        // find company.
        public findcompany(id: number): Observable<any> {


                return this.http.get<Company>(`http://localhost:8090/api/companies/${id}`);
        }
        // add company.
        public addCompany(name: string): Observable<any> {


                let body = {
                        name,
                }
                return this.http.post<Company>("http://localhost:8090/api/companies", body);


        }
        // update company.
        public updateCompany(id: number, name: string): Observable<any> {

                var body = {
                        name,
                }
                return this.http.put<Company>(`http://localhost:8090/api/companies/${id}`, body);


        }
        // delete company.
        public deleteCompany(id: number): Observable<any> {


                return this.http.delete<Company>(`http://localhost:8090/api/companies/${id}`);

        }
}