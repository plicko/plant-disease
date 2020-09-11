import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CoronaNewsPageRoutingModule } from './corona-news-routing.module';

import { CoronaNewsPage } from './corona-news.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CoronaNewsPageRoutingModule
  ],
  declarations: [CoronaNewsPage]
})
export class CoronaNewsPageModule {}
