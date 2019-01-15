import { Component } from '@angular/core';
import { ToastController } from 'ionic-angular';
import { CepProvider } from '../../providers/cep/cep';

@Component({
  selector: 'page-http',
  templateUrl: 'http.html',
})
export class HttpPage {

  cepDigitado : number;
  resposta : any;

  constructor(private CepProvider : CepProvider, private toastCtrl : ToastController) {
  }

  ionViewDidLoad() {
  }

  consultarCep(){
    this.CepProvider.listarEndereco(this.cepDigitado).then((response) =>{
      //se deu certo response é a resposta
      this.resposta = response.json();
    }).catch((response) => {
      //se nao deu certo response diz o problema
      this.resposta = '';
      const toast = this.toastCtrl.create({
        message: 'CEP errado! Tente novamente!',
        duration: 3000,
        position: 'bottom'
      });
      toast.present();
    });

  }

}
