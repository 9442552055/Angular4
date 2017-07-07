import { NgModule } from '@angular/core';
import { routing } from './auth.routes';

import {MdInputModule,MdCheckboxModule} from "@angular/material"
import { FormsModule }   from '@angular/forms';

import {LoginComponent} from './login/login.component'
import {RegisterComponent} from './register/register.component'
import {PasswordRecoveryComponent} from './passwordRecovery/passwordRecovery.component'


@NgModule({
  declarations: [
    LoginComponent,RegisterComponent,PasswordRecoveryComponent
  ],
  imports: [
    routing, MdInputModule, MdCheckboxModule, FormsModule//, MdCheckboxModule
  ]
})
export class AuthModule { }
