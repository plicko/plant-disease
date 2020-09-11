import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DeaseseShowPage } from './deasese-show.page';

const routes: Routes = [
  {
    path: '',
    component: DeaseseShowPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DeaseseShowPageRoutingModule {}
