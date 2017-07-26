import { NgModule }      from '../node_modules/@angular/core';
import { BrowserModule } from '../node_modules/@angular/platform-browser';
import { FormsModule }   from '../node_modules/@angular/forms';
import { HttpModule } from '@angular/http';
import { tree }  from './app/list.component';
import { app }  from './app/app.component';

import { HttpService } from './app/http.service';


@NgModule({
    imports:      [ BrowserModule, FormsModule, HttpModule],
    declarations: [ app, tree],
    providers: [HttpService],
    bootstrap:    [ app ]
})
export class AppModule { }