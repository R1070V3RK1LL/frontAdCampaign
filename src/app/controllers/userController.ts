import axios from 'axios';
import {HttpClient} from '@angular/common/http';
interface User {
    id: number
    firstName: string
    lastName: string
    email: string
    password: string
    birthday: string
    subscriptionDate: string
}

export class userController {

    private users: Array<User>;

    constructor(private  http: HttpClient ) {

		this.http= http;
		this.users = [];
		document.cookie = "XSRF-TOKEN=server-generated-token";

	}
    // list of users.
    public async loadUsers(){

        try {
            return this.http.get<User>('http://localhost:8090/api/users');

        } catch (error) {

            console.error(error);
            return;
        }
    }

    // find user.
    public async finduserInCompany(id:number){

        try {
            return this.http.get<User>(`http://localhost:8090/api/users/${id}`);

        } catch (error) {

            console.error(error);
            return;
        }
    }
    // add user.
    public async addUser(
        firstName: string,
        lastName: string,
        email: string,
        password: string,
        birthday: string,
        subscriptionDate: string){

        try {
            var body={
                firstName,
                lastName,
                email,
                password,
                birthday,
                subscriptionDate
            }
            return this.http.post<User>("http://localhost:8090/api/users", body);


        } catch (error) {

            console.error(error);
            return;
        }
    }
    // update user.
    public async updateuser(  id: number,
        firstName: string,
        lastName: string,
        email: string,
        password: string,
        birthday: string,
        subscriptionDate: string){

        try {
            var body={
                firstName,
                lastName,
                email,
                password,
                birthday,
                subscriptionDate
            }
            return this.http.put<User>(`http://localhost:8090/api/users/${id}`, body);



        } catch (error) {
            console.error(error);
            return;

        }
    }
    // delete user.
    public async deleteUser(id:number){

            try {
                return this.http.delete<User>(`http://localhost:8090/api/users/${id}`);

            } catch (error) {

                console.error(error);
                return;

            }
        }
}