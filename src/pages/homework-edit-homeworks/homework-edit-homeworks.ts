import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { HomeworkEditHomeworkDetailPage } from '../homework-edit-homework-detail/homework-edit-homework-detail';
import { AlertController } from 'ionic-angular';
import { HomeworkDetailPage } from '../homework-detail/homework-detail';
import { AddHomeworkPage } from '../add-homework/add-homework';

/**
 * Generated class for the HomeworkEditHomeworksPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-homework-edit-homeworks',
  templateUrl: 'homework-edit-homeworks.html',
})
export class HomeworkEditHomeworksPage {

  items = [
    '11 Eylül - 17 Eylül',
    '18 Eylül - 24 Eylül',
    '25 Eylül - 1 Ekim',
    '2 Ekim - 8 Ekim',
    '9 Ekim - 15 Ekim',
    '23 Ekim - 29 Ekim',
    '30 Ekim - 5 Kasım',
    '6 Kasım - 12 Kasım',
    '13 Kasım - 19 Kasım'
  ];

  constructor(public alertCtrl: AlertController, public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomeworkEditHomeworksPage');
    //this.presentLoading();
  }

  goToHomeworkDetail() {
    this.navCtrl.push(HomeworkEditHomeworkDetailPage);
  }

  presentLoading() {
    let loader = this.loadingCtrl.create({
      content: "Lütfen bekleyin...",
      duration: 3000
    });
    loader.present();
  }

  deleteHomework(){
    this.showAlert("İşlem Başarılı!", "Silme işlemi başarılı bir şekilde gerçekleştirildi.");
  }

  editHomework(){
    //this.showAlert("İşlem Başarılı!", "Düzenleme işlemi başarılı bir şekilde gerçekleştirildi.");
    this.navCtrl.push(AddHomeworkPage);
  }

  lookHomework(){
    //this.showAlert("İşlem Başarılı!", "Önizleme işlemi başarılı bir şekilde gerçekleştirildi.");
    this.navCtrl.push(HomeworkDetailPage);
  }

  showAlert(alertTitle: string, alertSubtitle: string) {
    let alert = this.alertCtrl.create({
      title: alertTitle,
      subTitle: alertSubtitle,
      buttons: ['Tamam']
    });
    alert.present();
  }

}
