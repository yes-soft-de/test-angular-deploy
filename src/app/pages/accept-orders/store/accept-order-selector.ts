import {createFeatureSelector, createSelector} from '@ngrx/store';
import {acceptOrdersFeatureKey, OrdersState, selectAll} from './accept-order.reducer';

const acceptOrdersFeatureState = createFeatureSelector(acceptOrdersFeatureKey);

export const getAcceptOrdersSelector = createSelector(acceptOrdersFeatureState, (state: OrdersState) => state.acceptOrders);

export const getUnAcceptOrdersSelector = createSelector(acceptOrdersFeatureState, (state: OrdersState) => state.unAcceptOrders);

