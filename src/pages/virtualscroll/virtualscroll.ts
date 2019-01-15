import { DataProvider } from './../../providers/data/data';
import { Component } from '@angular/core';
import { ToastController } from 'ionic-angular';

@Component({
  selector: 'page-virtualscroll',
  templateUrl: 'virtualscroll.html',
})
export class VirtualscrollPage {

  datalist;
  constructor(private data : DataProvider, private toastCtrl : ToastController) {    
  }

  ionViewDidLoad() {
    this.datalist = this.data.get();
  }

  mostrarId(id, numero){
    const toast = this.toastCtrl.create({
      message: 'ID: ' + id + '=> Número: ' + numero,
      duration: 3000,
      position: 'bottom'
    });
    toast.present();
  }

}
