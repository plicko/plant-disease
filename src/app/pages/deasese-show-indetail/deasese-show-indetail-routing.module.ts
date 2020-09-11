import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DeaseseShowIndetailPage } from './deasese-show-indetail.page';

const routes: Routes = [
  {
    path: '',
    component: DeaseseShowIndetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DeaseseShowIndetailPageRoutingModule {}
