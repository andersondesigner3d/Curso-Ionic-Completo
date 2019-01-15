import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';

@Component({
  selector: 'page-modalconteudo',
  templateUrl: 'modalconteudo.html',
})
export class ModalconteudoPage {

  recebido : any;
  valor : any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCrtl : ViewController) {
    this.recebido = this.navParams.get('enviado');
  }

  ionViewDidLoad() {
  }

  fecharModal(){
    this.viewCrtl.dismiss(this.valor);
  }

}
