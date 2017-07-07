import { NgModule } from '@angular/core';
import { routing } from './auth.routes';


import {MdInputModule,MdCheckboxModule} from "@angular/material"
import {LoginComponent} from './login/login.component'
import {RegisterComponent} from './register/register.component'
import { FormsModule }   from '@angular/forms';


@NgModule({
  declarations: [
    LoginComponent,RegisterComponent
  ],
  imports: [
    routing, MdInputModule, MdCheckboxModule, FormsModule//, MdCheckboxModule
  ]
})
export class AuthModule { }
