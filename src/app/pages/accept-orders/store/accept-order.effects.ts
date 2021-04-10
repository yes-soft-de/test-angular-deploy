import { Injectable } from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {AcceptOrdersService} from '../services/accept-orders.service';
import * as acceptOrderActions from './accept-order.actions';
import {catchError, map, switchMap} from 'rxjs/operators';
import {of} from 'rxjs';


@Injectable()
export class AcceptOrderEffects {



  constructor(private actions$: Actions,
              private acceptOrdersService: AcceptOrdersService) {}

  loadAcceptOrders$ = createEffect(() => this.actions$.pipe(
    ofType(acceptOrderActions.loadAcceptOrders),
    switchMap(() => this.acceptOrdersService.getAllAcceptedOrders()
      .pipe(
        map(response => acceptOrderActions.loadAcceptOrdersSuccess({acceptOrders: response.Data})),
        catchError(error => of(acceptOrderActions.loadAcceptOrdersFailure({error})))
      ))
  ));


  loadUnAcceptOrders$ = createEffect(() => this.actions$.pipe(
    ofType(acceptOrderActions.loadUnAcceptOrders),
    switchMap(() => this.acceptOrdersService.getAllUnAcceptedOrders()
      .pipe(
        map(response => acceptOrderActions.loadUnAcceptOrdersSuccess({unAcceptOrder: response.Data})),
        catchError(error => of(acceptOrderActions.loadUnAcceptOrdersFailure({error})))
      ))
  ));
}
