import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomeworkEditHomeworkDetailPage } from './homework-edit-homework-detail';

@NgModule({
  declarations: [
    HomeworkEditHomeworkDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(HomeworkEditHomeworkDetailPage),
  ],
})
export class HomeworkEditHomeworkDetailPageModule {}
