import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ScoreHomeworkPage } from './score-homework';

@NgModule({
  declarations: [
    ScoreHomeworkPage,
  ],
  imports: [
    IonicPageModule.forChild(ScoreHomeworkPage),
  ],
})
export class ScoreHomeworkPageModule {}
