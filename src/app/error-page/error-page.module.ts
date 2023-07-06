import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ErrorPagePageRoutingModule } from './error-page-routing.module';
import { QRCodeModule } from 'angularx-qrcode';

import { ErrorPagePage } from './error-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QRCodeModule,
    ErrorPagePageRoutingModule
  ],
  declarations: [ErrorPagePage]
})
export class ErrorPagePageModule {}
