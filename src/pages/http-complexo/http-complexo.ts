import { AcumulandoProvider } from './../../providers/acumulando/acumulando';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-http-complexo',
  templateUrl: 'http-complexo.html',
})
export class HttpComplexoPage {

  emaildigitado: string;
  senhadigitada: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private acumulando : AcumulandoProvider, public toastCtrl : ToastController) {
  }

  ionViewDidLoad() {
  }

  cadastroUser(){
    this.acumulando.cadastrarUsuario(this.emaildigitado,this.senhadigitada);
    this.emaildigitado = '';
    this.senhadigitada = '';
  }

}
