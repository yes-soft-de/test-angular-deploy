import { Action, createReducer, on } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Region } from '../model/region.model';
import * as RegionActions from './region.actions';

export const regionsFeatureKey = 'regions';

export interface RegionState extends EntityState<Region> {
  // additional entities state properties
  Data: Region[];
  regionDetails: Region;
  error: string;
}

export const adapter: EntityAdapter<Region> = createEntityAdapter<Region>();

export const initialState: RegionState = adapter.getInitialState({
  // additional entity state properties
  Data: undefined,
  regionDetails: undefined,
  error: undefined,
});


export const reducer = createReducer(
  initialState,
  on(RegionActions.loadRegionsSuccess,
    (state, action) => adapter.setAll(action.Data, state)
  ),
  on(RegionActions.loadRegionSuccess,
    (state, action) => {
      return {
        ...state,
        regionDetails: action.region
      }
    }
  ),
  on(RegionActions.deleteRegion,
    (state, action) => adapter.removeOne(action.id, state)
  ),
  on(RegionActions.addRegion,
    (state, action) => adapter.addOne(action.region, state)
  ),
  on(RegionActions.updateRegionSuccess,
    (state, action) => adapter.updateOne(action.region, state)
  ),
);


export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors();
