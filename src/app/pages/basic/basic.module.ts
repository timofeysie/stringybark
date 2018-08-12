import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { BasicPage } from './basic.page';

const routes: Routes = [
  {
    path: 'basic',
    component: BasicPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [BasicPage]
})
export class BasicModule {}
