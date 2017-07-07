import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', redirectTo: 'auth', pathMatch: 'full' },
  { path: 'auth', loadChildren: '../auth/auth.module#AuthModule' },
   { path: 'error',  loadChildren: '../errorPages/errorPages.module#ErrorPagesModule' },
    { path: '**',  redirectTo: 'error', pathMatch: 'full' }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);