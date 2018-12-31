import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-range',
  templateUrl: 'range.html',
})
export class RangePage {

  //declaração de variavel
  brilho : number = 200;
  sombra : number = 0;
  idade : any = {lower:16, upper:80};
  diferenca : number = this.idade.upper - this.idade.lower;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    
  }

  calculaDiferenca() {
    this.diferenca = this.idade.upper - this.idade.lower;
  }

}
