import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LionListComponent } from './lion-list/lion-list.component';
import { LionsEpics } from './lions.epics';
import { LionsService } from './lions.service';
import { LionsActions } from './lions.actions';

@NgModule({
  declarations: [
    LionListComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [
    LionsEpics,
    LionsService,
    LionsActions,
  ],
  exports: [LionListComponent]
})
export class LionsModule { }
