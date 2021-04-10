import { Injectable } from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {DashboardService} from '../services/dashboard.service';
import * as dashboardActions from './dashboard.actions';
import {catchError, map, switchMap} from 'rxjs/operators';
import {of} from 'rxjs';



@Injectable()
export class DashboardEffects {



  constructor(private actions$: Actions,
              private dashboardService: DashboardService) {}

  loadDashboardStatistics$ = createEffect(() => this.actions$.pipe(
    ofType(dashboardActions.loadDashboards),
    switchMap(() => this.dashboardService.getStatistics()
      .pipe(
        map(response => dashboardActions.loadDashboardsSuccess({Data: response.Data})),
        catchError(error => of(dashboardActions.loadDashboardsFailure({error})))
      ))
  ));
}
