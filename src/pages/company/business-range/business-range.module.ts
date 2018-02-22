import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BusinessRangePage } from './business-range';

import { CustomHeaderModule } from '../../share/custom-header/custom-header.module'

@NgModule({
  declarations: [
    BusinessRangePage,
  ],
  imports: [
    IonicPageModule.forChild(BusinessRangePage),
    CustomHeaderModule,
  ]
})
export class BusinessRangePageModule {}
