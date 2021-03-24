import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GelPage } from './gel.page';

const routes: Routes = [
  {
    path: '',
    component: GelPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GelPageRoutingModule {}
