import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Refresher2Page } from './refresher2.page';

const routes: Routes = [
  {
    path: '',
    component: Refresher2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Refresher2PageRoutingModule {}
