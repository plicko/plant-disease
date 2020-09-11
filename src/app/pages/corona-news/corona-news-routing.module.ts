import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CoronaNewsPage } from './corona-news.page';

const routes: Routes = [
  {
    path: '',
    component: CoronaNewsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoronaNewsPageRoutingModule {}
