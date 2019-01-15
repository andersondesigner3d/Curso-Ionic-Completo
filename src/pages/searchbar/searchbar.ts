import { Component } from '@angular/core';

@Component({
  selector: 'page-searchbar',
  templateUrl: 'searchbar.html',
})
export class SearchbarPage {

  searchQuery: string = '';
  items: string[];

  constructor() {
    this.initializeItems();
  }

  ionViewDidLoad() {
  }

  initializeItems(){
    this.items = [
      'Amsterdam',
      'Bogota',
      'Cambriano',
      'Delta',
      'Elefante',
      'Furgão Preto',
      'Gordura',
      'Humano',
      'Itália',
      'João',
      'Limão',
      'Macaco',
      'Navio',
      'Opala',
      'Paraguai',
      'Quênia',
      'Russia',
      'Sapato',
      'Tatuagem',
      'Uva',
      'Vacina',
      'Xbox',
      'Zebra'
    ];
  }

  getItems(ev: any) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the searchbar
    const val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

}
