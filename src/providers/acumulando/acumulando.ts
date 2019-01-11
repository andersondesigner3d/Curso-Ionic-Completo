import { ToastController } from 'ionic-angular';
import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class AcumulandoProvider {

  resposta : string;
  url : string = 'https://www.acumulando.com.br/ionic_cadastro_usuario';
  url2 : string = 'https://www.acumulando.com.br/ionic_get_usuario';
  url3 : string = 'https://www.acumulando.com.br/ionic_put_usuario';
  url4 : string = 'https://www.acumulando.com.br/ionic_delete_usuario';

  constructor(public http : Http, public toastCtrl : ToastController) {
  }
  

  cadastrarUsuario(emailrecebido : string, senharecebida : string){

    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');

    let postData = 'email='+emailrecebido+'&senha='+senharecebida;

    this.http.post(this.url, postData,{ headers: headers }).subscribe(data => {
      if(data["_body"]==1){
        this.resposta = 'Usuário cadastrado com sucesso!';
      } else if(data["_body"]==2){
        this.resposta = 'Não foi possível cadastrar o usuário, tente novamente!';
      } else if(data["_body"]==0){
        this.resposta = 'Este email já está em uso! Tente outro!';
      }
      const toast = this.toastCtrl.create({
        message: this.resposta,
        duration: 3000,
        position: 'bottom'
      });
      toast.present();
    }, error => {
      const toast = this.toastCtrl.create({
        message: error,
        duration: 2000,
        position: 'bottom'
      });
      toast.present();
    });
  }

  //--------------------------------------------------------------

  getUsuarios(){

    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    return this.http.get(this.url2, {headers : headers}).toPromise();

  }

  //--------------------------------------------------------------

  editarUsuario(idrecebido: any, emailrecebido: any, senharecebida: any){

    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');

    let postData = 'id='+idrecebido+'&email='+emailrecebido+'&senha='+senharecebida;

    this.http.post(this.url3, postData,{ headers: headers }).subscribe(data => {
      if(data["_body"]==1){
        this.resposta = 'Usuário editado com sucesso!';
      } else if(data["_body"]==2){
        this.resposta = 'Não foi possível editar o usuário, tente novamente!';
      } else if(data["_body"]==0){
        this.resposta = 'Id ou email não encontrado!';
      }
      const toast = this.toastCtrl.create({
        message: this.resposta,
        duration: 3000,
        position: 'bottom'
      });
      toast.present();
    }, error => {
      const toast = this.toastCtrl.create({
        message: error,
        duration: 2000,
        position: 'bottom'
      });
      toast.present();
    });
  }

  //--------------------------------------------------------------

  apagarUsuario(idrecebido: any){

    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');

    let postData = 'id='+idrecebido;

    this.http.post(this.url4, postData,{ headers: headers }).subscribe(data => {
      if(data["_body"]==1){
        this.resposta = 'Usuário apagado com sucesso!';
      } else if(data["_body"]==2){
        this.resposta = 'Não foi possível apagar o usuário, tente novamente!';
      } else if(data["_body"]==0){
        this.resposta = 'Id não encontrado!';
      }
      const toast = this.toastCtrl.create({
        message: this.resposta,
        duration: 3000,
        position: 'bottom'
      });
      toast.present();
    }, error => {
      const toast = this.toastCtrl.create({
        message: error,
        duration: 2000,
        position: 'bottom'
      });
      toast.present();
    });
  }


}
