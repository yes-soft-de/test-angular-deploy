import { Action, createReducer, on } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Events } from '../model/event.model';
import * as EventActions from './event.actions';
import { act } from '@ngrx/effects';

export const eventsFeatureKey = 'events';

export interface EventState extends EntityState<Events> {
  // additional entities state properties
  Data: Events[];
  eventDetails: Events;
  error: string;
}

export const adapter: EntityAdapter<Events> = createEntityAdapter<Events>();

export const initialState: EventState = adapter.getInitialState({
  // additional entity state properties
  Data: undefined,
  eventDetails: undefined,
  error: undefined
});


export const reducer = createReducer(
  initialState,
  on(EventActions.loadEventsSuccess,
    (state, action) => adapter.setAll(action.events, state)
  ),
  on(EventActions.loadEventsFailure,
    (state, action) => {
      return {
        ...state,
        error: action.error
      };
    }
  ),
  on(EventActions.loadEventSuccess,
    (state, action) => {
      return {
        ...state,
        eventDetails: action.Data
      };
    }
  ),
  on(EventActions.loadEventFailure,
    (state, action) => {
      return {
        ...state,
        error: action.error
      };
    }
  ),
  on(EventActions.addEventSuccess,
    (state, action) => adapter.addOne(action.Data, state)
  ),
  on(EventActions.addEventFailure,
    (state, action) => {
        return {
          ...state,
          error: action.error
        };
    }),
  on(EventActions.updateEventSuccess,
    (state, action) => adapter.updateOne(action.event, state)
  ),
);


export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors();
