import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Paginacao2Page } from '../paginacao2/paginacao2';
import { Paginacao3Page } from '../paginacao3/paginacao3';

@IonicPage()
@Component({
  selector: 'page-paginacao1',
  templateUrl: 'paginacao1.html',
})
export class Paginacao1Page {

  nomedigitado : string = '';

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
  }

  pagina2Root(){
    this.navCtrl.setRoot(Paginacao2Page, {name: this.nomedigitado});
  }

  pagina2Push(){
    this.navCtrl.push(Paginacao2Page, {name: this.nomedigitado});
  }

  pag3root(){
    this.navCtrl.setRoot(Paginacao3Page);
  }

}
