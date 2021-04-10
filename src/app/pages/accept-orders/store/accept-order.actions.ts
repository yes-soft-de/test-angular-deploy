import { createAction, props } from '@ngrx/store';

import { AcceptOrder } from '../model/accept-order.model';
import { UnAcceptOrder } from '../model/unaccept-order';

export const loadUnAcceptOrders = createAction(
  '[AcceptOrder/API] Load UnAccept Orders'
);

export const loadUnAcceptOrdersSuccess = createAction(
  '[AcceptOrder/API] Load UnAccept Orders Success',
  props<{ unAcceptOrder: UnAcceptOrder[] }>()
);

export const loadUnAcceptOrdersFailure = createAction(
  '[AcceptOrder/API] Load UnAccept Orders Failure',
  props<{ error: string }>()
);

export const loadAcceptOrders = createAction(
  '[AcceptOrder/API] Load Accept Orders'
);

export const loadAcceptOrdersSuccess = createAction(
  '[AcceptOrder/API] Load Accept Orders Success',
  props<{ acceptOrders: AcceptOrder[] }>()
);

export const loadAcceptOrdersFailure = createAction(
  '[AcceptOrder/API] Load Accept Orders Failure',
  props<{ error: string }>()
);

