import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProductDetailPage } from './product-detail';

import { CustomHeaderModule } from '../../share/custom-header/custom-header.module'

@NgModule({
  declarations: [
    ProductDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(ProductDetailPage),
    CustomHeaderModule,
  ]
})
export class ProductDetailPageModule {}
