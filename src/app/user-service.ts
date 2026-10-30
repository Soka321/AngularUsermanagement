import { Service } from '@angular/core';
import { Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';



    @Injectable({
    providedIn: 'root'
})


export class UserService {
     
    

    constructor(private client: HttpClient){}

    AddUser( credentials: any)
    {
        return this.client.post('https://localhost:7115/User/AddUser', credentials);
    }

}
