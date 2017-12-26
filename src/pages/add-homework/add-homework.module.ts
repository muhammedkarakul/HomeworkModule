import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddHomeworkPage } from './add-homework';
import { DatePicker } from '@ionic-native/date-picker';

@NgModule({
  declarations: [
    AddHomeworkPage,
  ],
  imports: [
    IonicPageModule.forChild(AddHomeworkPage),
  ],
  providers: [
    DatePicker
  ]
})
export class AddHomeworkPageModule {}
