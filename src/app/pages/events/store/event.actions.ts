import { createAction, props } from '@ngrx/store';
import { Update } from '@ngrx/entity';

import { Events } from '../model/event.model';

export const loadEvents = createAction(
  '[Event/API] Load Events'
);

export const loadEventsSuccess = createAction(
  '[Event/API] Load Events Success',
  props<{ events: Events[] }>()
);

export const loadEventsFailure = createAction(
  '[Event/API] Load Events Failure',
  props<{ error: string }>()
);

export const loadEvent = createAction(
  '[Event/API] Load Event',
  props<{ id: number }>()
);

export const loadEventSuccess = createAction(
  '[Event/API] Load Event Success',
  props<{ Data: Events }>()
);

export const loadEventFailure = createAction(
  '[Event/API] Load Event Failure',
  props<{ error: string }>()
);

export const addEvent = createAction(
  '[Event/API] Add Event',
  props<{ event: Events }>()
);

export const addEventSuccess = createAction(
  '[Event/API] Add Event Success',
  props<{ Data: Events, msg: string }>()
);

export const addEventFailure = createAction(
  '[Event/API] Add Event Failure',
  props<{ error: string }>()
);

export const updateEvent = createAction(
  '[Event/API] Update Event',
  props<{ Data: Events }>()
);

export const updateEventSuccess = createAction(
  '[Event/API] Update Event Success',
  props<{ event: Update<Events> }>()
  );

export const updateEventFailure = createAction(
  '[Event/API] Update Event Failure',
  props<{ error: string }>()
);

export const deleteEvent = createAction(
  '[Event/API] Delete Event',
  props<{ id: string }>()
);

export const deleteEventSuccess = createAction(
  '[Event/API] Delete Event Success',
  props<{ id: string }>()
  );

export const deleteEventFailure = createAction(
  '[Event/API] Delete Event Failure',
  props<{ error: string }>()
);
