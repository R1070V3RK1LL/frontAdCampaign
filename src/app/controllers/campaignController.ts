import axios from 'axios';
import { ApiClient } from './apiClient';
interface Campaign {
    id: number;
    name: string;
    budget: number;
}

export class CampaignController {

    private campaigns: Array<Campaign>;
    private apiClient: ApiClient;

    constructor( apiClient: ApiClient ) {

		this.apiClient = apiClient;
		this.campaigns = [];
		document.cookie = "XSRF-TOKEN=server-generated-token";

	}
    // list of campaigns.
    public async loadCampaigns(): Promise<void> {

        try {
            this.campaigns = await this.apiClient.get<Campaign[]>({
                url: "http://localhost:8090/api/campaigns",
                params: {
                    limit: 10
                }
            });

        } catch (error) {

            console.error(error);

        }
    }

    // find campaign.
    public async findCampaignInCompany(): Promise<void> {

        try {
            this.campaigns = await this.apiClient.get<Campaign[]>({
                url: "http://localhost:8090/api/campaigns/{id}",
                params: {
                    limit: 10
                }
            });

        } catch (error) {

            console.error(error);

        }
    }
    // add campaign.
    public async addCampaign(): Promise<void> {

        try {
            this.campaigns = await this.apiClient.post<Campaign[]>({
                url: "http://localhost:8090/api/campaigns",
                params: {
                    limit: 10
                }
            });

        } catch (error) {

            console.error(error);

        }
    }
    // update campaign.
    public async updateCampaign(): Promise<void> {

        try {
            this.campaigns = await this.apiClient.put<Campaign[]>({
                url: "http://localhost:8090/api/campaigns/{id}",
                params: {
                    limit: 10
                }
            });

        } catch (error) {

            console.error(error);

        }
    }
    // delete campaign.
    public async deleteCampaign(): Promise<void> {

        try {
            this.campaigns = await this.apiClient.delete<Campaign[]>({
                url: "http://localhost:8090/api/campaigns/{id}",
                params: {
                    limit: 10
                }
            });

        } catch (error) {

            console.error(error);

        }
    }
}