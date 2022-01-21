import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MonitorRoutingModule } from './monitor-routing.module';
import { MonitorComponent } from './monitor.component';

@NgModule({
  declarations: [MonitorComponent],
  imports: [CommonModule, MonitorRoutingModule],
  bootstrap: [MonitorComponent],
})
export class MonitorModule {}
