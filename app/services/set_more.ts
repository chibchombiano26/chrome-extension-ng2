import {Injectable, OnInit, Inject} from "@angular/core";
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import { SetMoreUser } from '../models/SetMoreUser';

@Injectable()
export class setMoreService{

    private headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    private baseUrl = "https://my.setmore.com/";

    constructor(private http: Http) {
    
    }

    getServices() : Observable<Response>{
        return this.http.get(this.baseUrl + "Services");
    }

    getStaff() : Observable<Response>{
        return this.http.get(this.baseUrl + "Staff");
    }

    getCustomers(){        
        return this.http.get(this.baseUrl + "customers/fetchCustomers?pageNo=1&limit=50&orderBy=FirstName+asc&filter=&tags=");
    }

    login(user: SetMoreUser) : Observable<Response>{ 
        let options = new RequestOptions({ headers: this.headers, method: "post" });
        let body = 'username=' + user.username + '&password=' + user.password;

        return this.http.post(this.baseUrl + "Login.do", body, options);
    }

}