import { Component } from '@angular/core';

@Component({
  selector: 'page-segment',
  templateUrl: 'segment.html',
})
export class SegmentPage {

  pet : string = 'puppies';//tem q ser string

  constructor() {
  }

  ionViewDidLoad() {
  }

}
