import { Component, OnInit } from '@angular/core';
import { NgRedux, DevToolsExtension } from '@angular-redux/store';
import { Action, combineReducers } from 'redux';
import { createEpicMiddleware, combineEpics } from 'redux-observable';

import { AppActions } from './app.actions';
import { ElephantsEpics } from './elephants/elephants.epics';
import { elephantsReducer } from './elephants/elephants.reducer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Welcome to the Zoo!';

  constructor(
    private ngRedux: NgRedux<any>,
    private actions: AppActions,
    elephantsEpics: ElephantsEpics
  ) {
    const rootReducer = combineReducers({
      elephants: elephantsReducer
    });

    ngRedux.configureStore(
      rootReducer,
      {},
      [
        createEpicMiddleware(combineEpics(...elephantsEpics.epics))
      ]
    );
  }

  ngOnInit() {
    this.ngRedux.dispatch(this.actions.loadData());
  }
}
