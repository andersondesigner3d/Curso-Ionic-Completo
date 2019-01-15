import { Component } from '@angular/core';

@Component({
  selector: 'page-datetime',
  templateUrl: 'datetime.html',
})
export class DatetimePage {

  dados : any = {
    datasimples : '2018-12-26',
    hora : '10:48',
    datacompleta : '2018-12-26T10:48',
  }

  //so precisa mudar o fuso horário
  captura : any = new Date().toISOString();  

  constructor() {
  }

  ionViewDidLoad() {
  }

}
