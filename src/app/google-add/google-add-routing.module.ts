import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GoogleAddPage } from './google-add.page';

const routes: Routes = [
  {
    path: '',
    component: GoogleAddPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GoogleAddPageRoutingModule {}
