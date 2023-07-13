import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  year = new Date().getFullYear();
  constructor() {}

  segmentChanged($event:Event){
    console.log($event)

  }
}
