import { Paginacao1Page } from './../paginacao1/paginacao1';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-paginacao3',
  templateUrl: 'paginacao3.html',
})
export class Paginacao3Page {

  dadosrecebidos : any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    //tem q ser no construtor
    this.dadosrecebidos = this.navParams.get("dados");
    console.log(this.dadosrecebidos);
  }

  ionViewDidLoad() {
  }

  pagina1Poptoroot(){
    if(this.navCtrl.canGoBack()){
      this.navCtrl.popToRoot();
    } else {
      alert('Não pode voltar pq não tem Push');
    }
  }

  pagina1Root(){
    this.navCtrl.setRoot(Paginacao1Page);
    }

}
