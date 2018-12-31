import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-toast',
  templateUrl: 'toast.html',
})
export class ToastPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl : ToastController) {
  }

  ionViewDidLoad() {
  }

  superior(){
    const toast = this.toastCtrl.create({
      message: 'Toast superior',
      duration: 1000,
      position: 'top'
    });
    toast.present();
  }

  inferior(){
    const toast = this.toastCtrl.create({
      message: 'Toast inferior',
      duration: 1000,
      position: 'bottom'
    });
    toast.present();
  }

  centro(){
    const toast = this.toastCtrl.create({
      message: 'Toast no meio',
      duration: 1000,
      position: 'middle'
    });
    toast.present();    
  }

  tempo(){
    const toast = this.toastCtrl.create({
      message: 'Toast com botão de confirmação',
      position: 'bottom',
      showCloseButton: true,
      closeButtonText: 'Ok'
    });
    toast.present();    
  }

}
