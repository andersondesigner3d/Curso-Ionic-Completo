import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'page-loading',
  templateUrl: 'loading.html',
})
export class LoadingPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController) {
  }

  ionViewDidLoad() {
    const loading = this.loadingCtrl.create({
      content: 'Processando notas..',
      duration: 1000
    });
    loading.present();
  }

  abrirLoading(){
    const loading = this.loadingCtrl.create({
      content: '<div><p>Transferindo para página Principal</p><img src="https://cafebrasil.blob.core.windows.net/media/2018/02/ta-esperando.png"></div>',
      duration: 3000,
      spinner: 'dots'//ios,ios-small,bubbles,circles,crescent,dots
    });
    loading.present();

    setTimeout(()=>{
      this.navCtrl.setRoot(HomePage);
      //this.navCtrl.push(HomePage);
    },3000);

    loading.onDidDismiss(()=>{
      console.log('loading fechado');
    });
  }

}
