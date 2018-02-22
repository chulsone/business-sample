import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProductList01Page } from './product-list-01';

import { CustomHeaderModule } from '../../share/custom-header/custom-header.module'

@NgModule({
  declarations: [
    ProductList01Page,
  ],
  imports: [
    IonicPageModule.forChild(ProductList01Page),
    CustomHeaderModule,
  ]
})
export class ProductList01PageModule {}
