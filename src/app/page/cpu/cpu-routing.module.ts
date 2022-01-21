import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AmdComponent } from './amd/amd.component';
import { AppleComponent } from './apple/apple.component';
import { IntelComponent } from './intel/intel.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'Index',
    pathMatch: 'full',
  },
  {
    path: 'Index',
    component: AppleComponent,
  },
  {
    path: 'intel',
    component: IntelComponent,
  },
  {
    path: 'amd',
    component: AmdComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CpuRoutingModule {}
