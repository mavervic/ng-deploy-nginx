import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MonitorRoutingModule } from './monitor-routing.module';
import { AocComponent } from './aoc/aoc.component';
import { AcerComponent } from './acer/acer.component';
import { BenqComponent } from './benq/benq.component';


@NgModule({
  declarations: [
    AocComponent,
    AcerComponent,
    BenqComponent
  ],
  imports: [
    CommonModule,
    MonitorRoutingModule
  ]
})
export class MonitorModule { }
