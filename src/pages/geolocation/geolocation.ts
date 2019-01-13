import { Component } from '@angular/core';
import { IonicPage, AlertController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';

@IonicPage()
@Component({
  selector: 'page-geolocation',
  templateUrl: 'geolocation.html',
})
export class GeolocationPage {

  longitude : number;
  latitude : number;

  constructor(private geolocation : Geolocation, public alertCtrl : AlertController) {
  }

  ionViewDidLoad() {

    this.geolocation.getCurrentPosition().then((resp) => {
      this.latitude = resp.coords.latitude;
      this.longitude = resp.coords.longitude;
     }).catch((error) => {
      let alert = this.alertCtrl.create({
        title: error,
        buttons: ['OK']
      });
      alert.present();
     });

  } 

}
