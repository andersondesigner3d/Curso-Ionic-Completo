import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FabPage } from '../fab/fab';
import { ToastPage } from '../toast/toast';
import { MyApp } from '../../app/app.component';

@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {

  homePage = MyApp;
  fabPage = FabPage;
  toastPage = ToastPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
  }

}
