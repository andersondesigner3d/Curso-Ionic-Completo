import { Component } from '@angular/core';
import { IonicPage, ToastController } from 'ionic-angular';
import { SMS } from '@ionic-native/sms';


@IonicPage()
@Component({
  selector: 'page-sms',
  templateUrl: 'sms.html',
})
export class SmsPage {

  telefone:any;
  texto:any; 

  constructor(private sms : SMS, private toastCtrl : ToastController) {
  }

  ionViewDidLoad() {
  }

  mandaSms() {
    
    var options = {
      replaceLineBreaks: true, 
      android: {
        intent: 'INTENT'
      }
    }

    //fiz de proposito esse the().catch pra ver q existe outra forma de then
    this.sms.send(this.telefone, this.texto, options)
      .then(() => {

        const toast = this.toastCtrl.create({
          message: 'SMS pronto para ser enviado!',
          duration: 3000,
          position: 'middle'
        });
        toast.present();

      }).catch((error) => {

        const toast = this.toastCtrl.create({
          message: 'Erro ao enviar SMS: ' + error,
          duration: 3000,
          position: 'middle'
        });
        toast.present();

      });    

  }

}
