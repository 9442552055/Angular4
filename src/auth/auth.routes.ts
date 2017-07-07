import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import {RegisterComponent} from './register/register.component'
import {PasswordRecoveryComponent} from './passwordRecovery/passwordRecovery.component'

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'recover-password', component: PasswordRecoveryComponent }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);