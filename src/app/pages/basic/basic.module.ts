import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { BasicPage } from './basic.page';
import { DotComponent } from '../../components/dot/dot.component';

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
  declarations: [BasicPage, DotComponent],
})
export class BasicModule {}
