import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Paginacao3Page } from '../paginacao3/paginacao3';

@Component({
  selector: 'page-paginacao2',
  templateUrl: 'paginacao2.html',
})
export class Paginacao2Page {

  nome : any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    //tem q ser no construtor
    this.nome = this.navParams.get('name');
  }

  ionViewDidLoad() {
  }

  pagina3Root(){
    let usuario = {nome: 'Rhayanne', idade:'32'}
    this.navCtrl.setRoot(Paginacao3Page, {dados: usuario});
  }

  pagina3Push(){
    let usuario = {nome: 'Rafael', idade:'27'}
    this.navCtrl.push(Paginacao3Page, {dados: usuario});
  }

  pagina1Pop(){
    if(this.navCtrl.canGoBack()){
      this.navCtrl.pop();
    } else {
      alert('Não existe Push para voltar');
    }    
  }

}
