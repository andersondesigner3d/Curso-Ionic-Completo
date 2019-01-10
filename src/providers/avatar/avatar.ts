import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { ToastController, NavController } from 'ionic-angular';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class AvatarProvider {

  url : string = 'https://www.acumulando.com.br/ionic_avatar';
  url2 : string = 'https://www.acumulando.com.br/ionic_get_avatar';
  resposta : string;

  constructor(public http : Http, public toastCtrl : ToastController) {
  }

  salvaFoto(id: any, base64: any){    

    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');

    let postData = 'idusuario='+id+'&base64='+base64;
    
    this.http.post(this.url, postData,{ headers: headers }).subscribe(data => {
      if(data["_body"]=='1'){
        this.resposta = 'Foto salva com sucesso!';
      } else if(data["_body"]=='2'){
        this.resposta = 'Não foi possível salvar a foto, tente novamente!';
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
