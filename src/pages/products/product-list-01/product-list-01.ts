import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-product-list-01',
  templateUrl: 'product-list-01.html',
})
export class ProductList01Page {

  product_list:any;
  selectedCategory: string;
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.product_list = navParams.get('item');
    this.selectedCategory = navParams.get('category_name');
  }

  ngOnInit() {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductList01');
  }

  clickViewButton(item) {

    this.navCtrl.push('ProductDetailPage', {
      item: item
    });
    
  }

}