import { createAction, props } from '@ngrx/store';
import { Update } from '@ngrx/entity';

import { Admin } from '../model/admin.model';

export const loadAdmins = createAction(
  '[Admin/API] Load Admins',
);

export const loadAdminsSuccess = createAction(
  '[Admin/API] Load Admins Success',
  props<{ Data: Admin[] }>()
);

export const loadAdminsFailure = createAction(
  '[Admin/API] Load Admins Failure',
  props<{ error: string }>()
);

export const addAdmin = createAction(
  '[Admin/API] Add Admin',
  props<{ admin: {name: string, password: string, userID: string, image: string} }>()
);

export const addAdminSuccess = createAction(
  '[Admin/API] Add Admin Success'
);

export const addAdminFailure = createAction(
  '[Admin/API] Add Admin Failure',
  props<{ error: string }>()
);

export const deleteAdmin = createAction(
  '[Admin/API] Delete Admin',
  props<{ userID: string }>()
);

export const deleteAdminSuccess = createAction(
  '[Admin/API] Delete Admin Success',
  props<{ userID: string }>()
);

export const deleteAdminFailure = createAction(
  '[Admin/API] Delete Admin Failure',
  props<{ error: string }>()
);
