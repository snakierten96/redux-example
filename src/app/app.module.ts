import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

import { NgReduxModule } from '@angular-redux/store';
import { NgReduxRouterModule } from '@angular-redux/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppActions } from './app.actions';

import { ElephantsModule } from './elephants/elephants.module';
import { LionsModule } from './lions/lions.module';
import { FeedbackModule } from './feedback/feedback.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    FlexLayoutModule,
    NgReduxModule,
    NgReduxRouterModule,
    AppRoutingModule,
    ElephantsModule,
    LionsModule,
    FeedbackModule,
  ],
  providers: [AppActions],
  bootstrap: [AppComponent]
})
export class AppModule { }
