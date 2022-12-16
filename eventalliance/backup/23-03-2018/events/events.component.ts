import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { Helpers } from '../../../../helpers';
import { ScriptLoaderService } from '../../../../_services/script-loader.service';


import { EventService } from './events.service';
import { Event } from './event';
import { EventDataTable  } from "./events.datatable";
import { Budgets } from './budgets';
import { ArtistNumbers } from './artistnumbers';

import { WSResponse } from "../../../../ws-response";


import * as $ from "jquery";


declare var jQuery: any;



@Component({
    selector: "app-events",
    templateUrl: "./events.component.html",
    encapsulation: ViewEncapsulation.None,
    providers: [EventService, EventDataTable], 
})

export class EventsComponent implements OnInit {

    public formData:Event;
    public amounts:Array<Budgets>;
    activatedMenu:number = 1;
    public modalTitle: string;
    //public eventTime: Date;
    public reviewEnabale:number = null; 
    public eventDateRange: string = null;
    public selectedBudgetId: number;
    public selectedArtistNumber: number;
    public _number_of_artists:Array<ArtistNumbers>;


    constructor(private _script: ScriptLoaderService, private _eventDataTable: EventDataTable, private _eventService: EventService) {
        this.formData = new Event();
    }

    public TableClick($e:any){
        var target = $e.target || $e.srcElement || $e.currentTarget;

        console.log(target);

        if(jQuery(target).hasClass("modal-activator")){
            this._getEventDetails(jQuery(target).data("id"));
            $e.preventDefault();
        } else {
            var parent = jQuery(target).parent();
            if(parent.hasClass("modal-activator")){
                this._getEventDetails(parent.data("id"));
                $e.preventDefault();
            }
        }
    }

    private _getEventDetails(eventId:number){
        this.formData.reset();
        var i:number;
        var _eventList:Array<Event> = this._eventService.getEventList();
        console.log(_eventList);
        for(i=0; i<_eventList.length; i++){
            if(_eventList[i].id == eventId){
                Object.assign(this.formData, _eventList[i]);
                this.modalTitle = "Edit Event: " + this.formData.name;
                this.reviewEnabale = this.formData.review_enable; 

                // Event date range
                var start_date_time = new Date(this.formData.start_date);
                var startDate = (start_date_time.getMonth() + 1) + '/' + start_date_time.getDate() + '/' +  start_date_time.getFullYear();
                var end_date_time = new Date(this.formData.end_date);
                var endDate = (end_date_time.getMonth() + 1) + '/' + end_date_time.getDate() + '/' +  end_date_time.getFullYear();
                this.eventDateRange =  startDate + ' - ' + endDate ;   
                
                
                jQuery("#editEvent").modal("show");
                break;
            }
        }
        
    }

    
    ngOnInit() {

    }

    ngAfterViewInit() {       

        // Fetach Budgets data from service
        this._eventService.getBudgets().subscribe((data:Array<Budgets>) => {
            var firstSelectElement = new Budgets();
            firstSelectElement.id = 0;
            firstSelectElement.amount = "-- Select --";
            this.amounts = data;
            this.amounts.splice(0, 0, firstSelectElement);
            this.selectedBudgetId = 0;
        },(err) => {

        });

        // Fetach Number of artist data from service
        this._eventService.getArtistNumbers().subscribe((data:Array<ArtistNumbers>) => {
            var firstSelectElement_AN = new ArtistNumbers();
            firstSelectElement_AN.id = 0;
            firstSelectElement_AN.number_of_artist = "-- Select --";
            this._number_of_artists = data;
            this._number_of_artists.splice(0, 0, firstSelectElement_AN);
            this.selectedBudgetId = 0;
        },(err) => {

        });

        //Initialize the bootstrap modals;
        jQuery("#editEvent").modal({show: false}).on("hidden.bs.modal", (e) => {
            this.formData.reset();
        });
        this._eventDataTable.load();
    }

    toggleMenu(value) {
        this.activatedMenu=value;
    }

}