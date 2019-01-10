import { AvatarProvider } from './../../providers/avatar/avatar';
import { AcumulandoProvider } from './../../providers/acumulando/acumulando';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, AlertController, LoadingController } from 'ionic-angular';
import { Camera, CameraOptions  } from '@ionic-native/camera';

@IonicPage()
@Component({
  selector: 'page-http-complexo',
  templateUrl: 'http-complexo.html',
})
export class HttpComplexoPage {

  emaildigitado: string;
  senhadigitada: string;
  listausuarios : any;
  quantos = '';
  imagem : any;
  meuavatar = '../assets/imgs/usuario-icon.jpg';
  teste : any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private acumulando : AcumulandoProvider, public toastCtrl : ToastController, public alertCtrl : AlertController, private camera : Camera, private avatar : AvatarProvider, private loadingCtrl : LoadingController) {
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
      this.quantos = this.listausuarios.length;
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

  abreApaga(id: any, email: any){
    let alert = this.alertCtrl.create({
      title:'Tem certeza que deseja apagar '+email+' ?',
      buttons: [
        {
          text: 'Cancelar'
        },
        {
          text: 'Apagar',
          handler: data=>{
            this.apagaDados(id);
          }
        }
      ]
    });
    //chama o alert
    alert.present();  
  }

  apagaDados(id: any){
    this.acumulando.apagarUsuario(id);
    this.cataUsuarios();
  }

  tirarFoto(id: any){
    const options: CameraOptions = {
      quality: 100,
      targetWidth: 400,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.PNG,
      mediaType: this.camera.MediaType.PICTURE
    };

    this.camera.getPicture(options).then((imageData) => {
      let base64Image = 'data:image/png;base64,' + imageData;
      this.avatar.salvaFoto(id,base64Image);
      
      //faz a munganga do loading
      const loading = this.loadingCtrl.create({
        duration: 3000,
        spinner: 'dots'//ios,ios-small,bubbles,circles,crescent,dots
      });
      loading.present();
  
      setTimeout(()=>{
        this.cataUsuarios();
      },3000);
    
     }, (err) => {
      
      const toast = this.toastCtrl.create({
        message: 'Erro ao tirar a foto!',
        duration: 3000,
        position: 'bottom'
      });
      toast.present();

     });
  }  

}
