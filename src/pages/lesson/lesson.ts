import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomeworksPage } from '../homeworks/homeworks';
import { LoadingController } from 'ionic-angular';

/**
 * Generated class for the LessonPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-lesson',
  templateUrl: 'lesson.html',
})
export class LessonPage {

  items = [
    'Diferansiyel Denklemler',
    'Elektrik Elektronik Devreler',
    'İstatistik ve Olasılık',
    'Mobil Uygulama Geliştirme',
    'Teknik İngilizce I',
    'Veri Yapıları Laboratuvarı',
    'Veri Yapıları ve Algortimalar',
    'Yaratıcı Drama',
    'Yönetim ve Organizasyon'
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LessonPage');
    //this.presentLoading();
  }

  itemSelected(item: string) {
    console.log("Selected Item", item);
  }

  goToHomeworks() {
    this.navCtrl.push(HomeworksPage);
  }

  presentLoading() {
    let loader = this.loadingCtrl.create({
      content: "Lütfen bekleyin...",
      duration: 3000
    });
    loader.present();
  }

}
