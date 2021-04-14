import { createAction, props } from '@ngrx/store';
import { Update } from '@ngrx/entity';

import { Guide } from '../model/guide.model';
import {GuideDetails} from '../model/guide-details';

export const loadGuides = createAction(
  '[Guide/API] Load Guides'
);

export const loadGuidesSuccess = createAction(
  '[Guide/API] Load Guides Success',
  props<{ Data: Guide[] }>()
);

export const loadGuidesFailure = createAction(
  '[Guide/API] Load Guides Failure',
  props<{ error: string }>()
);

export const loadGuide = createAction(
  '[Guide/API] Load Guide',
  props<{ id: string }>()
);

export const loadGuideSuccess = createAction(
  '[Guide/API] Load Guide Success',
  props<{ guide: GuideDetails }>()
);

export const loadGuideFailure = createAction(
  '[Guide/API] Load Guide Failure',
  props<{ error: string }>()
);

export const updateGuide = createAction(
  '[Guide/API] Update Guide',
  props<{ id: string, status: string }>()
);


export const updateGuideSuccess = createAction(
  '[Guide/API] Update Guide Success'
);


export const updateGuideFailure = createAction(
  '[Guide/API] Update Guide Failure',
  props<{ error: string }>()
);


export const addGuide = createAction(
  '[Guide/API] Add Guide',
  props<{ guide: Guide }>()
);

export const upsertGuide = createAction(
  '[Guide/API] Upsert Guide',
  props<{ guide: Guide }>()
);

export const addGuides = createAction(
  '[Guide/API] Add Guides',
  props<{ guides: Guide[] }>()
);

export const upsertGuides = createAction(
  '[Guide/API] Upsert Guides',
  props<{ guides: Guide[] }>()
);

export const updateGuides = createAction(
  '[Guide/API] Update Guides',
  props<{ guides: Update<Guide>[] }>()
);

export const deleteGuide = createAction(
  '[Guide/API] Delete Guide',
  props<{ id: string }>()
);

export const deleteGuides = createAction(
  '[Guide/API] Delete Guides',
  props<{ ids: string[] }>()
);

export const clearGuides = createAction(
  '[Guide/API] Clear Guides'
);
