import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GithubUsersProvider } from '../../providers/github-users/github-users';
import { User } from '../../models/users';

/**
 * Generated class for the UserDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-user-details',
  templateUrl: 'user-details.html',
})
export class UserDetailsPage {
  user:User;
  login:string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private githubUsers: GithubUsersProvider) {
    this.login = navParams.get('login');
    githubUsers.loadDetails(this.login).subscribe(user => {
      this.user = user;
      console.log(user)
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserDetailsPage');
  }

}
