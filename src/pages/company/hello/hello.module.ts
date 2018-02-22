import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CompanyHelloPage } from './hello';

import { CustomHeaderModule } from '../../share/custom-header/custom-header.module'

@NgModule({
  declarations: [
    CompanyHelloPage,
  ],
  imports: [
    IonicPageModule.forChild(CompanyHelloPage),
    CustomHeaderModule,
  ]
})
export class CompanyHelloPageModule {}
