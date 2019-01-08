import { AcumulandoProvider } from './../../providers/acumulando/acumulando';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, AlertController } from 'ionic-angular';
import { stringify } from '@angular/compiler/src/util';

@IonicPage()
@Component({
  selector: 'page-http-complexo',
  templateUrl: 'http-complexo.html',
})
export class HttpComplexoPage {

  emaildigitado: string;
  senhadigitada: string;
  listausuarios : any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private acumulando : AcumulandoProvider, public toastCtrl : ToastController, public alertCtrl : AlertController) {
    this.cataUsuarios();
  }

  ionViewDidLoad() {
  }

  cadastroUser(){
    this.acumulando.cadastrarUsuario(this.emaildigitado,this.senhadigitada);
    this.emaildigitado = '';
    this.senhadigitada = '';
    this.cataUsuarios();
  }

  cataUsuarios(){
    this.acumulando.getUsuarios().then((response) =>{
      this.listausuarios = response.json();
    });
  }

  abreEdita(id: any,email: any,senha: any){
    let alert = this.alertCtrl.create({
      title:'Digite os novos dados do Usuário:',
      inputs: [
        {
          name:'Email',
          value: email
        },
        {
          name:'Senha',
          value: senha
        }
      ],
      buttons: [
        {
          text: 'Cancelar'
        },
        {
          text: 'Salvar',
          handler: data=>{
            this.editaDados(id,data.Email,data.Senha);
          }
        }
      ]
    });
    //chama o alert
    alert.present();
  }

  editaDados(id: any,email: any,senha: any){
    this.acumulando.editarUsuario(id,email,senha);
    this.cataUsuarios();
  }

  

}
