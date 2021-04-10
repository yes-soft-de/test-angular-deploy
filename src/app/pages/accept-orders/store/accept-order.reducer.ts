import { Action, createReducer, on } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { AcceptOrder } from '../model/accept-order.model';
import * as AcceptOrderActions from './accept-order.actions';
import {UnAcceptOrder} from '../model/unaccept-order';

export const acceptOrdersFeatureKey = 'orders';

export interface OrdersState extends EntityState<AcceptOrder> {
  // additional entities state properties
  acceptOrders: AcceptOrder[];
  unAcceptOrders: UnAcceptOrder[];
  error: string;
}

export const adapter: EntityAdapter<AcceptOrder> = createEntityAdapter<AcceptOrder>();

export const initialState: OrdersState = adapter.getInitialState({
  // additional entity state properties
  acceptOrders: undefined,
  unAcceptOrders: undefined,
  error: undefined
});


export const reducer = createReducer(
  initialState,
  on(AcceptOrderActions.loadAcceptOrdersSuccess,
    (state, action) => {
      return {
        ...state,
        acceptOrders: action.acceptOrders
      };
    }
  ),
  on(AcceptOrderActions.loadUnAcceptOrdersSuccess,
    (state, action) => {
      return {
        ...state,
        unAcceptOrders: action.unAcceptOrder
      };
    }
  ),
);


export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors();
