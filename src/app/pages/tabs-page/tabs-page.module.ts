import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { TabsPage } from './tabs-page';
import { TabsPageRoutingModule } from './tabs-page-routing.module';
import { HomePageModule } from '../home/home.module';
import { AdminPageModule } from '../admin/admin.module';
import { PreventionPageModule } from '../prevention/prevention.module';
import { TutorialModule } from '../tutorial/tutorial.module';
import { AboutPageModule } from '../about/about.module';
import { CoronaNewsPageModule } from '../corona-news/corona-news.module';
import { SharePageModule } from '../share/share.module';
import { DeaseseShowPageModule } from '../deasese-show/deasese-show.module';
import { DeaseseShowIndetailPageModule } from '../deasese-show-indetail/deasese-show-indetail.module';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    DeaseseShowPageModule,
    DeaseseShowIndetailPageModule,
    HomePageModule,
    AdminPageModule,
    SharePageModule,
    PreventionPageModule,
    TabsPageRoutingModule,
    AboutPageModule,
    TutorialModule,
    CoronaNewsPageModule
  ],
  declarations: [
    TabsPage,
  ]
})
export class TabsModule { }
