import { Component } from '@angular/core';

@Component({
  selector: 'page-slides',
  templateUrl: 'slides.html',
})
export class SlidesPage {

  imagem : any[] = [
    'https://ionicframework.com/dist/preview-app/www/assets/img/ica-slidebox-img-1.png',
    'https://ionicframework.com/dist/preview-app/www/assets/img/ica-slidebox-img-2.png',
    'https://ionicframework.com/dist/preview-app/www/assets/img/ica-slidebox-img-3.png',
    'https://ionicframework.com/dist/preview-app/www/assets/img/ica-slidebox-img-4.png'
  ]

  constructor() {
  }

  ionViewDidLoad() {
  }

}
