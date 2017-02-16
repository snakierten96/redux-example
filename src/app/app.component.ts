import { Component, OnInit } from '@angular/core';
import { NgRedux, DevToolsExtension } from '@angular-redux/store';
import { NgReduxRouter, routerReducer } from '@angular-redux/router';
import { provideReduxForms, composeReducers, defaultFormReducer } from '@angular-redux/form';
import { Action, combineReducers } from 'redux';
import { createEpicMiddleware, combineEpics } from 'redux-observable';
import * as createLogger from 'redux-logger';

import { AppActions } from './app.actions';
import { ElephantsEpics } from './elephants/elephants.epics';
import { elephantsReducer } from './elephants/elephants.reducer';

import { LionsEpics } from './lions/lions.epics';
import { lionsReducer } from './lions/lions.reducer';

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
    devtools: DevToolsExtension,
    ngReduxRouter: NgReduxRouter,
    elephantsEpics: ElephantsEpics,
    lionsEpics: LionsEpics
  ) {
    const rootReducer = composeReducers(
      defaultFormReducer(),
      combineReducers({
        elephants: elephantsReducer,
        lions: lionsReducer,
        router: routerReducer,
      })
    );

    ngRedux.configureStore(
      rootReducer,
      {},
      [
        createLogger(),
        createEpicMiddleware(combineEpics(...elephantsEpics.epics)),
        createEpicMiddleware(combineEpics(...lionsEpics.epics))
      ],
      devtools.isEnabled() ? [ devtools.enhancer() ] : []
    );
    ngReduxRouter.initialize();
    provideReduxForms(ngRedux);
  }

  ngOnInit() {
    this.ngRedux.dispatch(this.actions.loadData());
  }
}
