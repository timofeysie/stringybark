import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LinesPage } from './lines.page';

const routes: Routes = [
  {
    path: 'lines',
    component: LinesPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [LinesPage],
})
export class LinesModule {}
