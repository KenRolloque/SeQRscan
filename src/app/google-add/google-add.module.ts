import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GoogleAddPageRoutingModule } from './google-add-routing.module';

import { GoogleAddPage } from './google-add.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GoogleAddPageRoutingModule
  ],
  declarations: [GoogleAddPage]
})
export class GoogleAddPageModule {}
