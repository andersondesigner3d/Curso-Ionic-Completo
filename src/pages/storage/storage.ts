import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { Storage } from '@ionic/storage';

@IonicPage()
@Component({
  selector: 'page-storage',
  templateUrl: 'storage.html',
})
export class StoragePage {

  texto :string;

  constructor(private storage: Storage) {
  }

  ionViewDidLoad() {
    this.storage.get('textogravado').then((val) => {
      this.texto = val;
    });
  }

  gravaTexto(){
    //gravar
    this.storage.set('textogravado', this.texto);
  }



}
