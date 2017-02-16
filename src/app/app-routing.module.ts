import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ElephantListComponent } from './elephants/elephant-list/elephant-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/elephants', pathMatch: 'full' },
  { path: 'elephants', component: ElephantListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
