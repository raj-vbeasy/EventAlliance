import { Component, OnInit, ViewEncapsulation,  AfterViewInit, Input } from '@angular/core';
import { Http,  Response ,RequestOptions, Headers} from '@angular/http';

/*import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';*/
// v2
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Helpers } from '../../../../helpers';
import { ScriptLoaderService } from '../../../../_services/script-loader.service';

import { TeamService } from './teams.service'
import { Team } from './teams';


@Component({
    selector: "app-teams",
    templateUrl: "./teams.component.html",
    encapsulation: ViewEncapsulation.None,
    providers: [TeamService],
})
export class TeamsComponent implements OnInit, AfterViewInit {

	//userForm: FormGroup; // our model driven form
  	public payLoad: string;
  	public teamName: string;
    public teamname: string;
    
    users: Team[];

    //v2
    teamForm: FormGroup;
    formUserID = [];


  	
    constructor(private _script: ScriptLoaderService, private _teamService: TeamService, private fb: FormBuilder) {    	
    }
    

    ngOnInit() { 
    	this.getUsers();

    	this.teamForm = this.fb.group({
	     	teamName: '',
	     	formUserID: ''	      	
    	});
    }

    getUsers() {   
     
     this._teamService.getUsers()
      .subscribe(users => this.users = users);

    }
    ngAfterViewInit() {
        this._script.loadScripts(
            'app-teams', [
                'assets/eventalliance/custom/components/datatables/base/data-ajax.js'
            ]);

    }

    eaInsertTeam(value) {
    	//console.log('zzzzzzzzzzzzzzzzzzzz');
    	console.dir(this);



    	/*let teamname: Team ={ teamName: teamName }
    	console.log('Test' +teamName);
    	console.dir(this); 
    	//this._teamService.insertTeamData(teamname);
    	//console.log("submit Post click happend " + this.team.name)
       this._teamService.insertTeamData(teamname).subscribe(
           data => console.log(teamname),
           err => console.log(err),
           () => console.log('Request Completed')
        ); 
       // this.status = true; */ 
    }

   /* getHeroes() {
        this._teamService.getHeroes()
            .subscribe(
            value => this.heroes = value,
            error => this.errorMessage = <any>error);
    }*/

}