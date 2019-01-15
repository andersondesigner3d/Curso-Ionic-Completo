import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { InputPage } from '../input/input';

@Component({
  selector: 'page-button',
  templateUrl: 'button.html',
})
export class ButtonPage {

  nomeBotao : string = 'Primary botão';

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
  }

  mudaPagina(){
    this.navCtrl.setRoot(InputPage);
  }

}
