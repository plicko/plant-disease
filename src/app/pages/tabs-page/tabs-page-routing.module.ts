import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs-page';
import { HomePage } from '../home/home.page';


const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'home',
        children: [
         
          {
            path: '',
            loadChildren: () => import('../home/home.module').then(m => m.HomePageModule)
          }
        ]
      },
      {
        path: 'about',
        children: [
         
          {
            path: '',
            loadChildren: () => import('../about/about.module').then(m => m.AboutPageModule)
          }
        ]
      },
      {
        path: 'news',
        children: [
         
          {
            path: '',
            loadChildren: () => import('../corona-news/corona-news.module').then(m => m.CoronaNewsPageModule)
          }
        ]
      },
      {
        path: 'prevention',
        children: [
         
          {
            path: '',
            loadChildren: () => import('../prevention/prevention.module').then(m => m.PreventionPageModule)
          }
        ]
      },
      {
        path: ' admin',
        children: [
         
          {
            path: '',
            loadChildren: () => import('../prevention/prevention.module').then(m => m.PreventionPageModule)
          }
        ]
      },
      
      {
        path: 'tomato_diseases_info',
        children: [
         
          {
            path: '',
            loadChildren: () => import('../deasese-show/deasese-show.module').then(m => m.DeaseseShowPageModule)
          }
        ]
      },
      
      {
        path: 'detail_info',
        children: [
         
          {
            path: '',
            loadChildren: () => import('../deasese-show/deasese-show.module').then(m => m.DeaseseShowPageModule)
          }
        ]
      },
      {
        path: 'tutorial',
        children: [
         
          {
            path: '',
            loadChildren: () => import('../tutorial/tutorial.module').then(m => m.TutorialModule)
          }
        ]
      },
      {
        path: 'share',
        children: [
          {
            path: '',
            loadChildren: () => import('../share/share.module').then(m => m.SharePageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/app/tabs/tutorial',
        pathMatch: 'full'
      },
    
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule { }

