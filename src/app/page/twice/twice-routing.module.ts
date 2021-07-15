import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppleComponent } from './apple/apple.component';
import { IntelComponent } from './intel/intel.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'apple'
  },
  {
    path: 'apple',
    component: AppleComponent
  },
  {
    path: 'intel',
    component: IntelComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TwiceRoutingModule { }
