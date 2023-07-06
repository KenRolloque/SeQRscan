import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainPage } from './main.page';

const routes: Routes = [
  {
    path: '',
    component: MainPage,
    children: [

      {
        path:'create',
        loadChildren:() => import('../tab1/tab1.module').then(m => m.Tab1PageModule)
      },{
        path:'scan',
        loadChildren:() => import('../tab2/tab2.module').then(m => m.Tab2PageModule)
      },{
        path:'history',
        loadChildren:() => import('../tab3/tab3.module').then(m => m.Tab3PageModule)
      },{
        path:'setting',
        loadChildren:() => import('../tab4/tab4.module').then(m => m.Tab4PageModule)

      },{
        path:'gallery',
        loadChildren:() => import('../gallery/gallery.module').then(m => m.GalleryPageModule)

      },


      // {
      //   path:'home',
      //   children: [
      //     {
      //       path:'',
      //       loadChildren: () =>
      //           import('../tab1/tab1.module').then(m => m.Tab1PageModule)
      //     },
      //     {
      //       path:'',
      //             loadChildren: () =>
      //                 import('../tab2/tab2.module').then(m => m.Tab2PageModule)
                 
      //     }
      //   ]
      // },
      // {
      //   path:'profile',
      //   children: [
      //     {
      //       path:'',
      //       loadChildren: () =>
      //           import('../tab2/tab2.module').then(m => m.Tab2PageModule)

      //     }
      //   ]
      // },
      // {
      //   path:'settings',
      //   children: [
      //     {
      //       path:'',
      //       loadChildren: () =>
      //           import('../tab3/tab3.module').then(m => m.Tab3PageModule)

      //     }
      //   ]
      // },
      {
      path:'',
      redirectTo: '/main/scan',
      pathMatch:'full'
     }
    ]
  },{

    path: '',
    redirectTo: '/main/scan',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainPageRoutingModule {}
