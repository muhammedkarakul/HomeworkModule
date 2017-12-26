import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomeworkDetailPage } from '../homework-detail/homework-detail';
import { selector } from 'rxjs/operator/publish';
import { LoadingController } from 'ionic-angular';

/**
 * Generated class for the HomeworksPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-homeworks',
  templateUrl: 'homeworks.html',
})
export class HomeworksPage {

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

  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomeworksPage');
    //this.presentLoading();
  }

  itemSelected(item: string) {
    console.log("Selected Item", item);
  }

  goToHomeworkDetail() {
    this.navCtrl.push(HomeworkDetailPage);
  }

  presentLoading() {
    let loader = this.loadingCtrl.create({
      content: "Lütfen bekleyin...",
      duration: 3000
    });
    loader.present();
  }

}
