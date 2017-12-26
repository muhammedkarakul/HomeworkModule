import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CheckHomeworkPage } from './check-homework';

@NgModule({
  declarations: [
    CheckHomeworkPage,
  ],
  imports: [
    IonicPageModule.forChild(CheckHomeworkPage),
  ],
})
export class CheckHomeworkPageModule {}
