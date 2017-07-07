import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageNotFoundComponent } from './pageNotFound.component';

const routes: Routes = [
  { path: '**', redirectTo: '404' },
  { path: '', redirectTo: '404' },
  { path: '404', component: PageNotFoundComponent }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);