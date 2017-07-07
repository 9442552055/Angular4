import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MaterialModule } from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {NavModule} from '../navigator/nav.module';
import {  RouterModule } from '@angular/router';

import { LayoutComponent } from './layout.component';


@NgModule({
  declarations: [
    LayoutComponent//,NavComponent
  ],
  imports: [
    BrowserModule, BrowserAnimationsModule,MaterialModule,
     NavModule, RouterModule
  ],
  providers: [],
  bootstrap: [LayoutComponent]
})
export class LayoutModule { }
