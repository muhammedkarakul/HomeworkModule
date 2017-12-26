import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { Http } from '@angular/http';

import { HomeworksPage } from '../pages/homeworks/homeworks';
import { AddHomeworkPage } from '../pages/add-homework/add-homework';
import { LessonPage } from '../pages/lesson/lesson';
import { HomeworkDetailPage } from '../pages/homework-detail/homework-detail';
import { HomeworkEditPage } from '../pages/homework-edit/homework-edit';
import { HomeworkEditHomeworksPage } from '../pages/homework-edit-homeworks/homework-edit-homeworks';
import { HomeworkEditHomeworkDetailPage } from '../pages/homework-edit-homework-detail/homework-edit-homework-detail';
import { CheckHomeworkPage } from '../pages/check-homework/check-homework';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HttpModule } from '@angular/http';


@NgModule({
  declarations: [
    MyApp,
    HomeworksPage,
    AddHomeworkPage,
    LessonPage,
    HomeworkDetailPage,
    HomeworkEditPage,
    HomeworkEditHomeworksPage,
    HomeworkEditHomeworkDetailPage,
    CheckHomeworkPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomeworksPage,
    AddHomeworkPage,
    LessonPage,
    HomeworkDetailPage,
    HomeworkEditPage,
    HomeworkEditHomeworksPage,
    HomeworkEditHomeworkDetailPage,
    CheckHomeworkPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
