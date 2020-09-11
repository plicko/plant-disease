import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DeaseseShowIndetailPageRoutingModule } from './deasese-show-indetail-routing.module';

import { DeaseseShowIndetailPage } from './deasese-show-indetail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DeaseseShowIndetailPageRoutingModule
  ],
  declarations: [DeaseseShowIndetailPage]
})
export class DeaseseShowIndetailPageModule {}
