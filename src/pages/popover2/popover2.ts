import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-popover2',
  templateUrl: 'popover2.html',
})
export class Popover2Page {

  dado : string;
  valor : any = "Viu como vale a pena trabalhar em casa?";

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl : ViewController) {
    this.dado = this.navParams.get('enviar');
  }

  ionViewDidLoad() {
  }

  fechaPopover(){
    this.viewCtrl.dismiss(this.valor);
  }

}
