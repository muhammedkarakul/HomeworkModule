import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { ActionSheetController } from 'ionic-angular';

/**
 * Generated class for the AddHomeworkPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-homework',
  templateUrl: 'add-homework.html',
})
export class AddHomeworkPage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public toastCtrl: ToastController,
    public actionSheetCtrl: ActionSheetController
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddHomeworkPage');
  }

  presentToast(message: string) {
    let toast = this.toastCtrl.create({
      message: message,
      duration: 3000,
      position: 'top'
    });
  
    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });
  
    toast.present();
  }

  presentActionSheet() {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Kaynak Seçin',
      buttons: [
        {
          text: 'Galeri',
          // role: 'destructive',
          handler: () => {
            console.log('Galeriden dosya seçildi.');
            this.presentToast('Galeriden dosya seçildi.');
          }
        },{
          text: 'Dosyalar',
          handler: () => {
            console.log('Archive clicked');
            this.presentToast('Dosya seçimi başarılı.');
          }
        },{
          text: 'Vazgeç',
          role: 'cancel',
          handler: () => {
            console.log('Dosya seçimi yapılmadı!');
            this.presentToast('Dosya seçimi yapılmadı!');
          }
        }
      ]
    });
    actionSheet.present();
  }

}
