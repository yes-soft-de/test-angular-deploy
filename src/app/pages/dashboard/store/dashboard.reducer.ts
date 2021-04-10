import { Action, createReducer, on } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Dashboard } from '../model/dashboard.model';
import * as DashboardActions from './dashboard.actions';

export const dashboardsFeatureKey = 'dashboards';

export interface DashboardState extends EntityState<Dashboard> {
  // additional entities state properties
  Data: Dashboard;
  error: string;
}

export const adapter: EntityAdapter<Dashboard> = createEntityAdapter<Dashboard>();

export const initialState: DashboardState = adapter.getInitialState({
  // additional entity state properties
  Data: undefined,
  error: undefined
});


export const reducer = createReducer(
  initialState,
  on(DashboardActions.loadDashboardsSuccess,
    (state, action) => {
      return {
        ...state,
        Data: action.Data
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
