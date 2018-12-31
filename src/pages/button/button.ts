import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { InputPage } from '../input/input';

@IonicPage()
@Component({
  selector: 'page-button',
  templateUrl: 'button.html',
})
export class ButtonPage {

  nomeBotao : string = 'Primary botão';

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ButtonPage');
  }

  mudaPagina(){
    this.navCtrl.setRoot(InputPage);
  }

}
