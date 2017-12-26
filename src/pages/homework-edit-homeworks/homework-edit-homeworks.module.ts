import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomeworkEditHomeworksPage } from './homework-edit-homeworks';

@NgModule({
  declarations: [
    HomeworkEditHomeworksPage,
  ],
  imports: [
    IonicPageModule.forChild(HomeworkEditHomeworksPage),
  ],
})
export class HomeworkEditHomeworksPageModule {}
