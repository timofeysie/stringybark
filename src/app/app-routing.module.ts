import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
import { BasicPage } from './pages/basic/basic.page';
import { LinesPage } from './pages/lines/lines.page';

const appRoutes: Routes = [
  { path: 'basic', component: BasicPage },
  { path: 'lines', component: LinesPage }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
