import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CanalizePage } from './canalize.page';

const routes: Routes = [
  {
    path: '',
    component: CanalizePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CanalizePageRoutingModule {}
