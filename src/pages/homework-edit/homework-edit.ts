import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomeworkEditHomeworksPage } from '../homework-edit-homeworks/homework-edit-homeworks';

/**
 * Generated class for the HomeworkEditPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-homework-edit',
  templateUrl: 'homework-edit.html',
})
export class HomeworkEditPage {

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
    console.log('ionViewDidLoad HomeworkEditPage');
  }

  goToHomeworks() {
    this.navCtrl.push(HomeworkEditHomeworksPage);
  }

}
