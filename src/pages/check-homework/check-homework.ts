import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomeworksPage } from '../homeworks/homeworks';

/**
 * Generated class for the CheckHomeworkPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-check-homework',
  templateUrl: 'check-homework.html',
})
export class CheckHomeworkPage {

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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CheckHomeworkPage');
  }

  goToHomeworks() {
    this.navCtrl.push(HomeworksPage);
  }

}
