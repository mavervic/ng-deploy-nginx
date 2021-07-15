import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookComponent } from './page/book/book.component';
import { ComputerComponent } from './page/computer/computer.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'book'
  },
  {
    path: 'book',
    component: BookComponent
  },
  {
    path: 'computer',
    component: ComputerComponent
  },
  {
    path: 'twice',
    loadChildren: () => import('./page/twice/twice.module').then(mod => mod.TwiceModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
