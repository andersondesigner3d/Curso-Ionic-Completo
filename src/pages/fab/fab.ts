import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-fab',
  templateUrl: 'fab.html',
})
export class FabPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
  }

  alerta(){
    let alert = this.alertCtrl.create({
      title: 'Você clicou no email!',
      subTitle: 'Clique em ok pra enviar seu email!',
      buttons:['OK']
    });
    alert.present();
  }

}
