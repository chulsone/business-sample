import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CustomerCenterPage } from './customer-center';

import { CustomHeaderModule } from '../../share/custom-header/custom-header.module'

@NgModule({
  declarations: [
    CustomerCenterPage,
  ],
  imports: [
    IonicPageModule.forChild(CustomerCenterPage),
    CustomHeaderModule,
  ]
})
export class ProductDetailPageModule {}
