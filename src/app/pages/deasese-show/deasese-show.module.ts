import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DeaseseShowPageRoutingModule } from './deasese-show-routing.module';

import { DeaseseShowPage } from './deasese-show.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DeaseseShowPageRoutingModule
  ],
  declarations: [DeaseseShowPage]
})
export class DeaseseShowPageModule {}
