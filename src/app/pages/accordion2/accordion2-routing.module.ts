import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Accordion2Page } from './accordion2.page';

const routes: Routes = [
  {
    path: '',
    component: Accordion2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Accordion2PageRoutingModule {}
