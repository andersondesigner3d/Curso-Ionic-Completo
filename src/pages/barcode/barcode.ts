import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { Component } from '@angular/core';
import { IonicPage, AlertController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-barcode',
  templateUrl: 'barcode.html',
})
export class BarcodePage {

  resultado : any;

  constructor(private barcodeScanner : BarcodeScanner, public alertCtrl : AlertController) {
  }

  ionViewDidLoad() {
  }

  escaniar(){

    this.barcodeScanner.scan().then(barcodeData => {
      this.resultado = JSON.stringify(barcodeData);
     }).catch(err => {
      let resposta = JSON.stringify(err);
      let alert = this.alertCtrl.create({
        title:resposta,
        buttons: ['OK']
      }).present();
     });

  }

}
