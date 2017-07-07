import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { NavComponent } from './nav.component';

import { routing } from '../app.routes';

import {HashLocationStrategy,  LocationStrategy} from '@angular/common';
import { MdMenuModule, MdButtonModule} from '@angular/material';

debugger;
@NgModule({
  declarations: [NavComponent],
  imports: [routing,BrowserModule, MdMenuModule, MdButtonModule],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  exports:[NavComponent]
})

export class NavModule { 
  //public components:any[]=[NavComponent]
};


