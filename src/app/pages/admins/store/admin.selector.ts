import {createFeatureSelector, createSelector} from '@ngrx/store';
import {adminsFeatureKey, AdminState, selectAll} from './admin.reducer';

const adminFeatureState = createFeatureSelector(adminsFeatureKey);

export const getAllAdminsSelector = createSelector(adminFeatureState, selectAll);

export const getAdminErrorSelector = createSelector(adminFeatureState, (state: AdminState) => state.error);
