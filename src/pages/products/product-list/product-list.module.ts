import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProductListPage } from './product-list';

import { CustomHeaderModule } from '../../share/custom-header/custom-header.module'

@NgModule({
  declarations: [
    ProductListPage,
  ],
  imports: [
    IonicPageModule.forChild(ProductListPage),
    CustomHeaderModule,
  ]
})
export class ProductListPageModule {}
