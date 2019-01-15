import { Component } from '@angular/core';

@Component({
  selector: 'page-select',
  templateUrl: 'select.html',
})
export class SelectPage {

  dados: any = {
    title: 'Escolha a fruta',
    subTitle: 'Frutas fresquinhas'
  };

  constructor() {
  }

  ionViewDidLoad() {
  }

}
