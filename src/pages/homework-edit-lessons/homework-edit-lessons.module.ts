import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomeworkEditLessonsPage } from './homework-edit-lessons';

@NgModule({
  declarations: [
    HomeworkEditLessonsPage,
  ],
  imports: [
    IonicPageModule.forChild(HomeworkEditLessonsPage),
  ],
})
export class HomeworkEditLessonsPageModule {}
