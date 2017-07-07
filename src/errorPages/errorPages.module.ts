import { NgModule } from '@angular/core';
import { routing } from './errorPages.routes';


import { PageNotFoundComponent } from './pageNotFound.component';

@NgModule({
  declarations: [PageNotFoundComponent],
  imports: [routing]
})
export class ErrorPagesModule { }
