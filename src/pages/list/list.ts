import { Component } from '@angular/core';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html',
})
export class ListPage {

  frutas : string[] = ['uva','maçã','pêra','melancia','abóbora','jaca','graviola'];

  constructor() {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListPage');
  }

  seleciona(item){
    console.log(item);
  }

}
