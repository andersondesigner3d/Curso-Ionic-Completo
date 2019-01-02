import { ModalconteudoPage } from './../modalconteudo/modalconteudo';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, AlertController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-modal',
  templateUrl: 'modal.html',
})
export class ModalPage {

  valor : any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public modCtrl : ModalController, public alertCtrl : AlertController) {
  }

  ionViewDidLoad() {
  }

  abreModal(){
    this.modCtrl.create(ModalconteudoPage).present();
  }

  modalParametro(){
    let dados = {nome: 'Anderson', idade: '35'}
    let modal = this.modCtrl.create(ModalconteudoPage, {enviado : dados});
    modal.onDidDismiss(data =>{
      this.alertCtrl.create({
        title: data,
        subTitle: 'Este é o valor de retorno',
        buttons: ['OK']
      }).present();
    });
    modal.present();
  }

}
