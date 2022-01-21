import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './page/error/error.component';

const routes: Routes = [
  {
    path: 'PC/CPU',
    loadChildren: () => import('./page/cpu/cpu.module').then((mod) => mod.CpuModule),
  },
  {
    path: 'PC/MONITOR',
    loadChildren: () => import('./page/monitor/monitor.module').then((mod) => mod.MonitorModule),
  },
  {
    path: '**',
    component: ErrorComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
