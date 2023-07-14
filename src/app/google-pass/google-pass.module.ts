import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GooglePassPageRoutingModule } from './google-pass-routing.module';

import { GooglePassPage } from './google-pass.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GooglePassPageRoutingModule
  ],
  declarations: [GooglePassPage]
})
export class GooglePassPageModule {}
