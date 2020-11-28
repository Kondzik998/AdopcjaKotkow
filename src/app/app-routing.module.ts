import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MruczarniaCardComponent } from './mruczarnia-card/mruczarnia-card.component';
import { MruczarniaListComponent } from './mruczarnia-list/mruczarnia-list.component';
import { VirtualadoptComponent } from './virtualadopt/virtualadopt.component';


const routes: Routes = [
  {
    path: '',
    component: VirtualadoptComponent
  },
  {
    path: 'mruczarnia',
    component: MruczarniaListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
