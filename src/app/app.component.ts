import { Component, ViewChild } from '@angular/core';

import { Platform, MenuController, Nav } from 'ionic-angular';

import { AddHomeworkPage } from '../pages/add-homework/add-homework';
import { LessonPage } from '../pages/lesson/lesson';
import { HomeworkEditPage } from '../pages/homework-edit/homework-edit';
import { CheckHomeworkPage } from '../pages/check-homework/check-homework';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  // make HelloIonicPage the root (or first) page
  rootPage = LessonPage;
  pages: Array<{title: string, component: any}>;

  constructor(
    public platform: Platform,
    public menu: MenuController,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen
  ) {
    this.initializeApp();

    // set our app's pages
    this.pages = [
      { title: 'Dersler', component: LessonPage },
      { title: 'Ödev Ekle', component: AddHomeworkPage},
      { title: 'Ödev Düzenle', component: HomeworkEditPage},
      { title: 'Ödev Kontrolü', component: CheckHomeworkPage}
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    this.nav.setRoot(page.component);
  }
}
