import axios from 'axios';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
interface User {
    id: number
    firstName: string
    lastName: string
    email: string
    password: string
    birthday: string
    subscriptionDate: string
}
@Injectable()
export class userController {

    constructor(private http: HttpClient) {
    }
    // list of users.
    public loadUsers(): Observable<any> {

        return this.http.get<User>('http://localhost:8090/api/users');


    }

    // find user.
    public finduserInCompany(id: number): Observable<any> {

        return this.http.get<User>(`http://localhost:8090/api/users/${id}`);


    }
    // add user.
    public addUser(
        firstName: string,
        lastName: string,
        email: string,
        password: string,
        birthday: string,
        subscriptionDate: string): Observable<any> {

        var body = {
            firstName,
            lastName,
            email,
            password,
            birthday,
            subscriptionDate
        }
        return this.http.post<User>("http://localhost:8090/api/users", body);

    }
    // update user.
    public updateuser(id: number,
        firstName: string,
        lastName: string,
        email: string,
        password: string,
        birthday: string,
        subscriptionDate: string): Observable<any> {


        let body = {
            firstName,
            lastName,
            email,
            password,
            birthday,
            subscriptionDate
        }
        return this.http.put<User>(`http://localhost:8090/api/users/${id}`, body);

    }
    // delete user.
    public deleteUser(id: number): Observable<any> {

        return this.http.delete<User>(`http://localhost:8090/api/users/${id}`);


    }
}