import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';

// import { CustomHeader } from '../share/custom-header/custom-header'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  list_main_images: Array<{ title:string, img_url:string, comment:string }>;

  constructor(public navCtrl: NavController, public toastCtrl: ToastController) {
    this.list_main_images = [
      {
        title: '관제센터',
        comment: '관제센터: 준비중입니다.',
        img_url: 'http://atop21.mir9.co.kr/wp-content/uploads/2017/11/2009.jpg'
      },
      {
        title: '발권시스템',
        comment: '발권시스템: 준비중입니다.',
        img_url: 'http://atop21.mir9.co.kr/wp-content/uploads/2017/11/2014-1.jpg'
      },
      {
        title: '교통정보시스템',
        comment: '교통정보시스템: 준비중입니다.',
        img_url: 'http://atop21.mir9.co.kr/wp-content/uploads/2017/11/2013-1.jpg'
      },
      {
        title: '통합관제센터',
        comment: '통합관제센터: 준비중입니다.',
        img_url: 'http://atop21.mir9.co.kr/wp-content/uploads/2017/11/2013.png'
      }
    ];
  }

  clickMainCardImage(comment) {
    let toast = this.toastCtrl.create({
      message: comment,
      duration: 1000
    });
    toast.present();
  }

}
