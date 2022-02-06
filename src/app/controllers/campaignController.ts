import axios from 'axios';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
interface Campaign {
        id: number;
        name: string;
        budget: number;
        startingDate: string;
        endingDate: string;
}

@Injectable()
export class CampaignController {
        constructor(private http: HttpClient) {

        }
        // list of campaigns.
        public loadCampaigns(): Observable<any> {


                return this.http.get<Campaign>('http://localhost:8090/api/campaigns');

        }

        // find campaign.
        public findCampaignForCompany(id: number): Observable<any> {

                return this.http.get<Campaign>(`http://localhost:8090/api/campaigns/${id}`);


        }
        // add campaign.
        public addCampaign(name: string, budget: number, startingDate: string, endingDate: string): Observable<any> {

                var body = {
                        name,
                        budget,
                        startingDate,
                        endingDate,
                }
                return this.http.post<Campaign>("http://localhost:8090/api/campaigns", body);

        }
        // update campaign.
        public updateCampaign(id: number, name: string, budget: number, endingDate: string): Observable<any> {

                var body = {
                        name,
                        budget,
                        endingDate,
                }
                return this.http.put<Campaign>(`http://localhost:8090/api/campaigns/${id}`, body);


        }
        // delete campaign.
        public deleteCampaign(id: number): Observable<any> {

                return this.http.delete<Campaign>(`http://localhost:8090/api/campaigns/${id}`);

        }
}