import { NgModule } from '@angular/core';
// import { IonicPageModule } from 'ionic-angular';
// import { IonicModule } from 'ionic-angular';
import { CustomHeader } from './custom-header';

@NgModule({
  declarations: [
    CustomHeader,
  ],
  imports: [
    // IonicPageModule.forChild(CustomHeader),
    // IonicModule
  ],
  exports: [
    CustomHeader
  ]
})
export class CustomHeaderModule {}