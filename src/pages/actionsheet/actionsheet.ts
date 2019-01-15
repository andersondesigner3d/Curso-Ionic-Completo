import { Component } from '@angular/core';
import {  NavController, NavParams, ActionSheetController } from 'ionic-angular';
import { MyApp } from '../../app/app.component';


@Component({
  selector: 'page-actionsheet',
  templateUrl: 'actionsheet.html',
})
export class ActionsheetPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public actionSheetCtrl: ActionSheetController) {
  }

  ionViewDidLoad() {
    
  }

  abreactioncheet(){
    const actionSheet = this.actionSheetCtrl.create({
      title: 'Menu ActionSheet',
      buttons: [
        {
          text: 'Comprar',
          role: 'destructive',
          handler: () => {
            console.log('Comprar item');
          }
        },
        {
          text: 'Vender',
          handler: () => {
            alert('Vender item');
          }
        },
        {
          text: 'Ir para Home',
          handler: () => {
            //manda pra principal de verdade acima de home
            this.navCtrl.push(MyApp);
          }
        },
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    actionSheet.present();
  }

}
