import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SafePagePage } from './safe-page.page';

const routes: Routes = [
  {
    path: '',
    component: SafePagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SafePagePageRoutingModule {}
