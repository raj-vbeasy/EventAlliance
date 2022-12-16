import { Injectable } from '@angular/core';  
import { Http,  Response ,RequestOptions,Headers} from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { TeamsModule } from './teams.module';
import { Team } from './teams';
@Injectable()
export class TeamService {  
    http: Http;
    postResponse:any ;
    posts_Url: string = 'https://jsonplaceholder.typicode.com/posts';
    teamName: string;
    teamData: JSON;
    private userUrl: any = 'http://internalmail.com/saheb-php/fetchjsondata.php';//'https://jsonplaceholder.typicode.com/users'; // URL to web api
    
    constructor(public _http: Http) {
    	
    }
 
   /*insertTeamData() {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post('http://localhost:1234/dus/mypage.php',JSON.stringify({firstName:'Joe',lastName:'Smith333'}),{headers:headers})
    .map((res: Response) => res.json())
    .subscribe((res:'') => this.postResponse = res);
   }*/ 

    insertTeamData(teamData:TeamsModule) {
       //ensure imports are included
        //import { Http, Response } from '@angular/http';
        //import 'rxjs/add/operator/map';
        let body = JSON.stringify(this.teamData);
	    let headers = new Headers();
	    headers.append('Content-Type', 'application/json');    //
	   // const requestHeaders = new HttpHeaders().set('Content-Type', 'application/json');
    
       return this.http.post(this.posts_Url, body, { 
        })
       .map(res =>  res.json());     	    
    }  

    getUsers(): Observable<Team[]>{
    	
        return this._http.get(this.userUrl)
            .map(res => <Team[]>res.json());
    }
    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }

}
