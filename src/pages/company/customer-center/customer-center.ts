import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-customer-center',
  templateUrl: 'customer-center.html',
})
export class CustomerCenterPage {

  product:any;
  list_task:any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.product = navParams.get('item');

    this.list_task = [
      {
        data1: 'aaaa',
        data2: 'bbbb',
        data3: 'cccc',
        data4: 'dddd',
        data5: 'eeee',
      },
      {
        data1: 'aaaa',
        data2: 'bbbb',
        data3: 'cccc',
        data4: 'dddd',
        data5: 'eeee',
      },
      {
        data1: 'aaaa',
        data2: 'bbbb',
        data3: 'cccc',
        data4: 'dddd',
        data5: 'eeee',
      },
      {
        data1: 'aaaa',
        data2: 'bbbb',
        data3: 'cccc',
        data4: 'dddd',
        data5: 'eeee',
      },
      {
        data1: 'aaaa',
        data2: 'bbbb',
        data3: 'cccc',
        data4: 'dddd',
        data5: 'eeee',
      }
    ];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CustomerCenterPage');
  }

}