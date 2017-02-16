import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ElephantListComponent } from './elephants/elephant-list/elephant-list.component';
import { LionListComponent } from './lions/lion-list/lion-list.component';
import { FeedbackFormComponent } from './feedback/feedback-form/feedback-form.component';

const routes: Routes = [
  { path: '', redirectTo: '/elephants', pathMatch: 'full' },
  { path: 'elephants', component: ElephantListComponent },
  { path: 'lions', component: LionListComponent },
  { path: 'feedback', component: FeedbackFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
