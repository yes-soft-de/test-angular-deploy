import { Action, createReducer, on } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Admin } from '../model/admin.model';
import * as AdminActions from './admin.actions';

export const adminsFeatureKey = 'admins';

export interface AdminState extends EntityState<Admin> {
  // additional entities state properties
  Data: Admin[];
  error: string;
}

export const adapter: EntityAdapter<Admin> = createEntityAdapter<Admin>({
  selectId: (admin: Admin) => admin.userID
});

export const initialState: AdminState = adapter.getInitialState({
  // additional entity state properties
  Data: undefined,
  error: undefined
});


export const reducer = createReducer(
  initialState,
  on(AdminActions.loadAdminsSuccess,
    (state, action) => adapter.setAll(action.Data, state)
  ),
  on(AdminActions.loadAdminsFailure,
    (state, action) => {
      return {
        ...state,
        error: action.error
      };
    }
  ),
  on(AdminActions.addAdminFailure,
    (state, action) => {
      return {
        ...state,
        error: action.error
      };
    }
  ),
  on(AdminActions.deleteAdminSuccess,
    (state, action) => adapter.removeOne(action.userID, state)
  ),
  on(AdminActions.deleteAdminFailure,
    (state, action) => {
      return {
        ...state,
        error: action.error
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
