import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-alert',
  templateUrl: 'alert.html',
})
export class AlertPage {

  conteudoInput : string = 'Conteúdo vindo de uma variável pra teste';

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl : AlertController ) {
  }

  //quando abre a pagina
  ionViewDidLoad() {    
  }

  //chama os alerts
  alertSimples(){
    let alert = this.alertCtrl.create({
      title:'Atenção!',
      subTitle: 'Este é um Alert simples',
      buttons: ['OK']
    });
    //chama o alert
    alert.present();
  }

  alertInputs(){
    let alert = this.alertCtrl.create({
      title:'Digite o seu nome:',
      message: 'Digite seu nome pra confirmarmos sua identidade.',
      inputs: [
        {
          name:'Título:',
          placeholder: 'Seu nome completo...',
          value: this.conteudoInput
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          handler: data=>{
            console.log('Clicou em Cancelar');
          }
        },
        {
          text: 'Salvar',
          handler: data=>{
            console.log('Clicou em Salvar');
          }
        }
      ]
    });
    //chama o alert
    alert.present();
  }

  //alert com radios
  alertRadio(){
    //cria o alert numa variavel
    let alert = this.alertCtrl.create();

    //outra forma de setar titulo
    alert.setTitle('Escolha uma cor');

    //adciona os inputs radio
    alert.addInput({
      type: 'radio',
      label: 'Azul',
      value: 'azul',
      checked: true
    });

    alert.addInput({
      type: 'radio',
      label: 'Vermelho',
      value: 'vermelho',
      checked: false
    });

    alert.addInput({
      type: 'radio',
      label: 'Verde',
      value: 'verde',
      checked: false
    });

    //adiciona botões
    alert.addButton('Cancelar');

    alert.addButton({
      text: 'Ok',
      handler: data=> {
        console.log('cor selecionada', data);
      }
    });

    //chama o alert
    alert.present();
  }

  //alert com checkboxs
  alertCheckbox(){
    let alert = this.alertCtrl.create();

    //cria titulo do alert
    alert.setTitle('Quais países gostaria de visitar?');
    alert.setSubTitle('Se for sorteado ganhará uma passagem!');    

    //adciona checkbox
    alert.addInput({
      type: 'checkbox',
      label: 'Inglaterra',
      value: 'england',
      checked: true
    });

    alert.addInput({
      type: 'checkbox',
      label: 'Estados Unidos',
      value: 'eua',
      checked: false
    });

    alert.addInput({
      type: 'checkbox',
      label: 'França',
      value: 'france',
      checked: false
    });

    //adicona butão
    alert.addButton('Cancelar');

    alert.addButton({
      text: 'Selecionar',
      handler: data=>{
        console.log('Países selecionados ',data);
      }
    });

    //mostra alert
    alert.present();
  }

}
