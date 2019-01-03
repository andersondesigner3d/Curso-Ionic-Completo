import { Component } from '@angular/core';
import { IonicPage, PopoverController, AlertController } from 'ionic-angular';
import { Popover2Page } from '../popover2/popover2';

@IonicPage()
@Component({
  selector: 'page-popover',
  templateUrl: 'popover.html',
})
export class PopoverPage {

  constructor(public popoverCtrl : PopoverController, public alertCtrl : AlertController ) {
  }

  ionViewDidLoad() {
  }

  abrirPopover(){
    let nome : string = 'Anderson Rocha';
    let popover = this.popoverCtrl.create(Popover2Page, {enviar : nome});
    popover.onDidDismiss(data =>{
      this.alertCtrl.create({
        title: data,
        subTitle: 'Este é o valor de retorno',
        buttons: ['OK']
      }).present();
    });
    popover.present();
  }

}
