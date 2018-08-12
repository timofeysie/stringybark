import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
import { BasicPage } from './pages/basic/basic.page';

const appRoutes: Routes = [
  { path: 'basic', component: BasicPage }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
