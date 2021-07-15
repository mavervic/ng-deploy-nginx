import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TwiceRoutingModule } from './twice-routing.module';
import { AppleComponent } from './apple/apple.component';
import { IntelComponent } from './intel/intel.component';


@NgModule({
  declarations: [
    AppleComponent,
    IntelComponent
  ],
  imports: [
    CommonModule,
    TwiceRoutingModule
  ]
})
export class TwiceModule { }
