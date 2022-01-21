import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CpuRoutingModule } from './cpu-routing.module';
import { AppleComponent } from './apple/apple.component';
import { IntelComponent } from './intel/intel.component';
import { AmdComponent } from './amd/amd.component';

@NgModule({
  declarations: [
    AppleComponent,
    IntelComponent,
    AmdComponent
  ],
  imports: [CommonModule, CpuRoutingModule],
})
export class CpuModule {}
