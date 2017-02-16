import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ElephantListComponent } from './elephants/elephant-list/elephant-list.component';
import { LionListComponent } from './lions/lion-list/lion-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/elephants', pathMatch: 'full' },
  { path: 'elephants', component: ElephantListComponent },
  { path: 'lions', component: LionListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
