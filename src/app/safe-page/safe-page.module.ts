import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SafePagePageRoutingModule } from './safe-page-routing.module';
import { QRCodeModule } from 'angularx-qrcode';
import { SafePagePage } from './safe-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SafePagePageRoutingModule,
    QRCodeModule
  ],
  declarations: [SafePagePage]
})
export class SafePagePageModule {}
