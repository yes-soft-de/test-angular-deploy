import {createFeatureSelector, createSelector} from '@ngrx/store';
import {dashboardsFeatureKey, DashboardState, selectAll} from './dashboard.reducer';

const dashboardFeatureState = createFeatureSelector(dashboardsFeatureKey);

export const getDashboardStatisticsSelector = createSelector(dashboardFeatureState, (state: DashboardState) => state.Data);

export const getDashboardStatisticsErrorSelector = createSelector(dashboardFeatureState, (state: DashboardState) => state.error);
