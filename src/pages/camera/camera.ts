import { Component } from '@angular/core';
import { IonicPage, ToastController } from 'ionic-angular';
import { Camera, CameraOptions  } from '@ionic-native/camera';



@IonicPage()
@Component({
  selector: 'page-camera',
  templateUrl: 'camera.html',
})
export class CameraPage {

  imagem : any;

  constructor(private camera : Camera, public toastCtrl : ToastController) {
  }

  ionViewDidLoad() {
  }

  tirarFoto(){
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    };

    this.camera.getPicture(options).then((imageData) => {
      let base64Image = 'data:image/jpeg;base64,' + imageData;
      this.imagem = base64Image;
     }, (err) => {
      
      const toast = this.toastCtrl.create({
        message: 'Erro ao tirar a foto: '+ err,
        duration: 3000,
        position: 'bottom'
      });
      toast.present();

     });
  }

}
