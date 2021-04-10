import { createAction, props } from '@ngrx/store';
import { Update } from '@ngrx/entity';

import { Dashboard } from '../model/dashboard.model';

export const loadDashboards = createAction(
  '[Dashboard/API] Load Dashboards'
);

export const loadDashboardsSuccess = createAction(
  '[Dashboard/API] Load Dashboards Success',
  props<{ Data: Dashboard }>()
);

export const loadDashboardsFailure = createAction(
  '[Dashboard/API] Load Dashboards Failure',
  props<{ error: string }>()
);

