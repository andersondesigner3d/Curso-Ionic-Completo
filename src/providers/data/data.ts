import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';


@Injectable()
export class DataProvider {

  items : any = [{'id': 'Identificador' , 'numero': 'Aleatório'}];

  constructor() {

    for (let i = 1; i < 3000; i++) {
        this.items.push( {'id' : i, 'numero': Math.random()} );
    }

  }

  ionViewDidLoad() {
  }   


  get(){
    return this.items;
  }

}
