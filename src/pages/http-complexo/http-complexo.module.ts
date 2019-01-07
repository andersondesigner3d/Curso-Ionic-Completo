import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HttpComplexoPage } from './http-complexo';

@NgModule({
  declarations: [
    HttpComplexoPage,
  ],
  imports: [
    IonicPageModule.forChild(HttpComplexoPage),
  ],
})
export class HttpComplexoPageModule {}
