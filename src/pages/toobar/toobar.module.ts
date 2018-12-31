import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ToobarPage } from './toobar';

@NgModule({
  declarations: [
    ToobarPage,
  ],
  imports: [
    IonicPageModule.forChild(ToobarPage),
  ],
})
export class ToobarPageModule {}
