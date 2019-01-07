import { ToastController } from 'ionic-angular';
import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class AcumulandoProvider {

  resposta : string;
  url : string = 'https://www.acumulando.com.br/ionic_cadastro_usuario';

  constructor(public http : Http, public toastCtrl : ToastController) {
  }
  

  cadastrarUsuario(emailrecebido : string, senharecebida : string){

    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');

    let postData = 'email='+emailrecebido+'&senha='+senharecebida;

    //const requestOptions = new RequestOptions({ headers: headers });

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

}
