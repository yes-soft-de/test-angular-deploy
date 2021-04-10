import { Action, createReducer, on } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Guide } from '../model/guide.model';
import * as GuideActions from './guide.actions';
import {GuideDetails} from '../model/guide-details';

export const guidesFeatureKey = 'guides';

export interface GuideState extends EntityState<Guide> {
  // additional entities state properties
  Data: Guide[];
  guide: GuideDetails;
  error: string;
}

export const adapter: EntityAdapter<Guide> = createEntityAdapter<Guide>();

export const initialState: GuideState = adapter.getInitialState({
  // additional entity state properties
  Data: undefined,
  guide: undefined,
  error: undefined
});


export const reducer = createReducer(
  initialState,
  on(GuideActions.loadGuidesSuccess,
    (state, action) => adapter.setAll(action.Data, state)
  ),
  on(GuideActions.loadGuidesFailure,
    (state, action) => {
      return {
        ...state,
        error: action.error
      };
    }
  ),
  on(GuideActions.loadGuideSuccess,
    (state, action) => {
      return {
        ...state,
        guide: action.guide
      };
    }
  ),
  on(GuideActions.loadGuideFailure,
    (state, action) => {
      return {
        ...state,
        error: action.error
      };
    }
  ),
  on(GuideActions.addGuide,
    (state, action) => adapter.addOne(action.guide, state)
  ),
  on(GuideActions.upsertGuide,
    (state, action) => adapter.upsertOne(action.guide, state)
  ),
  on(GuideActions.addGuides,
    (state, action) => adapter.addMany(action.guides, state)
  ),
  on(GuideActions.upsertGuides,
    (state, action) => adapter.upsertMany(action.guides, state)
  ),
  on(GuideActions.updateGuides,
    (state, action) => adapter.updateMany(action.guides, state)
  ),
  on(GuideActions.deleteGuide,
    (state, action) => adapter.removeOne(action.id, state)
  ),
  on(GuideActions.deleteGuides,
    (state, action) => adapter.removeMany(action.ids, state)
  ),
  on(GuideActions.clearGuides,
    state => adapter.removeAll(state)
  ),
);


export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors();
