//v2
//import { BrowserModule } from '@angular/platform-browser';

import { NgModule } from '@angular/core';
import { Http,  Response ,RequestOptions, Headers} from '@angular/http';
//import { ReactiveFormsModule, FormsModule } from '@angular/forms';

//v2
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { TeamsComponent } from './teams.component';
import { LayoutModule } from '../../../layouts/layout.module';
import { DefaultComponent } from '../default.component';

const routes: Routes = [
    {
        "path": "",
        "component": DefaultComponent,
        "children": [
            {
                "path": "",
                "component": TeamsComponent
            }
        ]
    }
];
@NgModule({
    imports: [
        CommonModule, 
        RouterModule.forChild(routes), 
        LayoutModule,
        // v2
        //BrowserModule,
        FormsModule,
        ReactiveFormsModule

    ], exports: [
        RouterModule
    ], declarations: [
        TeamsComponent
    ]
})
export class TeamsModule {
}