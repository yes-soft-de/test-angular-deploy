import {createFeatureSelector, createSelector} from '@ngrx/store';
import {guidesFeatureKey, GuideState, selectAll} from './guide.reducer';

const guideFeatureState = createFeatureSelector(guidesFeatureKey);

export const getAllGuidesSelector = createSelector(guideFeatureState, selectAll);

export const getGuideSelector = createSelector(guideFeatureState, (state: GuideState) => state.guide);
