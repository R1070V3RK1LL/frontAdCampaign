import axios from 'axios';
import { ApiClient } from './apiClient';
interface User {
    id: number;
    name: string;
    budget: number;
}

export class userController {

    private users: Array<User>;
    private apiClient: ApiClient;

    constructor( apiClient: ApiClient ) {

		this.apiClient = apiClient;
		this.users = [];
		document.cookie = "XSRF-TOKEN=server-generated-token";

	}
    // list of users
    public async loadUsers(): Promise<void> {

        try {
            this.users = await this.apiClient.get<User[]>({
                url: "http://localhost:8090/api/users",
                params: {
                    limit: 10
                }
            });

        } catch (error) {

            console.error(error);

        }
    }


    // find user.
    public async findUserInCompany(): Promise<void> {

        try {
            this.users = await this.apiClient.get<User[]>({
                url: "http://localhost:8090/api/users/{id}",
                params: {
                    limit: 10
                }
            });

        } catch (error) {

            console.error(error);

        }
    }
    // add user.
    public async addUser(): Promise<void> {

        try {
            this.users = await this.apiClient.post<User[]>({
                url: "http://localhost:8090/api/users",
                params: {
                    limit: 10
                }
            });

        } catch (error) {

            console.error(error);

        }
    }
    // update user.
    public async updateUser(): Promise<void> {

        try {
            this.users = await this.apiClient.put<User[]>({
                url: "http://localhost:8090/api/users{id}",
                params: {
                    limit: 10
                }
            });

        } catch (error) {

            console.error(error);

        }
    }
    // delete user.
    public async deleteUser(): Promise<void> {

        try {
            this.users = await this.apiClient.delete<User[]>({
                url: "http://localhost:8090/api/users{id}",
                params: {
                    limit: 10
                }
            });

        } catch (error) {

            console.error(error);

        }
    }
}