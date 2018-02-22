import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-product-list',
  templateUrl: 'product-list.html',
})
export class ProductListPage {

  product_list = [];
  category_list = [
    {
      name: 'CAR CARE',
      img_url: './assets/imgs/card-saopaolo.png',
      comment: '41 products'
    },
    {
      name: 'BEAUTY & SPORTS',
      img_url: './assets/imgs/card-amsterdam.png',
      comment: '64 products'
    },
    {
      name: 'HOME CLEANING',
      img_url: './assets/imgs/card-sf.png',
      comment: '72 products'
    },
    {
      name: 'ETC',
      img_url: './assets/imgs/card-madison.png',
      comment: '28 products'
    },
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ngOnInit() {
    let product_list_01;
    product_list_01 = [
      {
        img_url: 'http://atop21.mir9.co.kr/wp-content/uploads/2018/02/duster1-300x139.jpg',
        title: 'Hanson Duster',
        content: 'Comez loop • H110'
      },
      {
        img_url: 'http://atop21.mir9.co.kr/wp-content/uploads/2018/02/duster2-300x154.jpg',
        title: 'New Hanson',
        content: 'circularloop • NH110'
      },
      {
        img_url: 'http://atop21.mir9.co.kr/wp-content/uploads/2018/02/555-300x213.png',
        title: 'Microfiber Wash pad',
        content: 'PU Spong&Microfiber • P2514'
      }
    ];
    this.product_list.push(product_list_01);

    product_list_01 = [
      {
        img_url: 'http://atop21.mir9.co.kr/wp-content/uploads/2018/02/cleasing.jpg',
        title: 'MF Body Glove',
        content: 'Comez loop • H110'
      },
      {
        img_url: 'http://atop21.mir9.co.kr/wp-content/uploads/2018/02/yoga2-300x171.jpg',
        title: 'Sports Towel',
        content: 'circularloop • NH110'
      },
      {
        img_url: 'http://atop21.mir9.co.kr/wp-content/uploads/2018/02/a0014.png',
        title: '1Microfiber Wash pad',
        content: 'PU Spong&Microfiber • P2514'
      }
    ];
    this.product_list.push(product_list_01);

    product_list_01 = [
      {
        img_url: 'http://atop21.mir9.co.kr/wp-content/uploads/2018/02/a0001.png',
        title: 'Wet room pad MW684',
        content: 'Comez loop • H110'
      },
      {
        img_url: 'http://atop21.mir9.co.kr/wp-content/uploads/2018/02/a0002.png',
        title: 'Dry hall pad MD834',
        content: 'circularloop • NH110'
      },
      {
        img_url: 'http://atop21.mir9.co.kr/wp-content/uploads/2018/02/a0003.png',
        title: 'Dust pad with fringe MD837',
        content: 'PU Spong&Microfiber • P2514'
      },
      {
        img_url: 'http://atop21.mir9.co.kr/wp-content/uploads/2018/02/a0004.png',
        title: 'Scrubbing mop with hanger1 MS608',
        content: 'Comez loop • H110'
      },
      {
        img_url: 'http://atop21.mir9.co.kr/wp-content/uploads/2018/02/a0005.png',
        title: 'Scrubbing mop MS608',
        content: 'circularloop • NH110'
      },
      {
        img_url: 'http://atop21.mir9.co.kr/wp-content/uploads/2018/02/a0010.png',
        title: 'Multi purpose pad MF835',
        content: 'PU Spong&Microfiber • P2514'
      }
    ];
    this.product_list.push(product_list_01);
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductList');
  }

  clickCategoryImage(index) {
    console.log('product-list: clickCategoryImage()');
    console.log(this.category_list[index].name);

    this.navCtrl.push('ProductList01Page', {
      item: this.product_list[index],
      category_name: this.category_list[index].name      
    });
  }

}