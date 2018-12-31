import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-datetime',
  templateUrl: 'datetime.html',
})
export class DatetimePage {

  dados : any = {
    datasimples : '2018-12-26',
    hora : '10:48',
    datacompleta : '2018-12-26T10:48',
  }

  //so precisa mudar o fuso horário
  captura : any = new Date().toISOString();  

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
  }

}
