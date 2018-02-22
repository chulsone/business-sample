import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'custom-header',
  templateUrl: 'custom-header.html'
})
export class CustomHeader {

  constructor(public navCtrl: NavController) {

  }

  clickTopIcon() {
    console.log('custom-header: clickTopIcon()');
    
    this.navCtrl.goToRoot({});
  }
}