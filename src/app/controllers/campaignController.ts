import axios from 'axios';
import {HttpClient} from '@angular/common/http';
import {Injectable}from '@angular/core';
interface Campaign {
    id: number;
    name: string;
    budget: number;
    startingDate:string;
    endingDate:string;
}

@Injectable()
export class CampaignController {
    constructor(private  http: HttpClient ) {

	}
    // list of campaigns.
    public async loadCampaigns(){

        try {
            return this.http.get<Campaign>('http://localhost:8090/api/campaigns');

        } catch (error) {

            console.error(error);
            return;
        }
    }

    // find campaign.
    public async findCampaignForCompany(id:number){

        try {
            return this.http.get<Campaign>(`http://localhost:8090/api/campaigns/${id}`);

        } catch (error) {

            console.error(error);
            return;
        }
    }
    // add campaign.
    public async addCampaign(name:string,budget:number,startingDate:string, endingDate:string){

        try {
            var body={
                name,
                budget,
                startingDate,
                endingDate,
            }
            return this.http.post<Campaign>("http://localhost:8090/api/campaigns", body);


        } catch (error) {

            console.error(error);
            return;
        }
    }
    // update campaign.
    public async updateCampaign(id:number,name:string,budget:number, endingDate:string){

        try {
            var body={
                name,
                budget,
                endingDate,
            }
            return this.http.put<Campaign>(`http://localhost:8090/api/campaigns/${id}`, body);


        } catch (error) {

            console.error(error);
            return;
        }
    }
    // delete campaign.
    public async deleteCampaign(id:number){

            try {
                return this.http.delete<Campaign>(`http://localhost:8090/api/campaigns/${id}`);

            } catch (error) {

                console.error(error);
                return;
            }
        }
}