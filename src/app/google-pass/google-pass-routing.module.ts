import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GooglePassPage } from './google-pass.page';

const routes: Routes = [
  {
    path: '',
    component: GooglePassPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GooglePassPageRoutingModule {}
