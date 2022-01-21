import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcerComponent } from './acer/acer.component';
import { AocComponent } from './aoc/aoc.component';
import { BenqComponent } from './benq/benq.component';
import { MonitorComponent } from './monitor.component';

const routes: Routes = [
  {
    path: '',
    component: MonitorComponent,
    children: [
      {
        path: '',
        redirectTo: 'Index',
        pathMatch: 'full',
      },
      {
        path: 'Index',
        component: BenqComponent,
      },
      {
        path: 'acer',
        component: AcerComponent,
      },
      {
        path: 'aoc',
        component: AocComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MonitorRoutingModule {}
