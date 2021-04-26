import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Update } from '@ngrx/entity';
import { ToastrService } from 'ngx-toastr';
import { of } from 'rxjs';
import { catchError, exhaustMap, map, mergeMap, tap } from 'rxjs/operators';
import { EventsService } from '../services/events.service';
import * as eventActions from './event.actions';


@Injectable()
export class EventEffects {



  constructor(private actions$: Actions,
              private eventService: EventsService,
              private toaster: ToastrService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {}

  LoadEvents$ = createEffect(() => this.actions$.pipe(
    ofType(eventActions.loadEvents),
    mergeMap(() => this.eventService.getEvents()
      .pipe(
        map(response => {
          return eventActions.loadEventsSuccess({events: response.Data})
        }),
        catchError(error => {
          console.log('error events effect', error);
          return of(eventActions.loadEventsFailure(error));
        })
      ))
  ));

  loadEvent$ = createEffect(() => this.actions$.pipe(
    ofType(eventActions.loadEvent),
    mergeMap(action => this.eventService.getEventDetails(action.id)
      .pipe(
        map(response => {
          return eventActions.loadEventSuccess(response);
        }),
        catchError(error => {
          console.log('error :', error);
          return of(eventActions.loadEventFailure(error));
        })
      ))
  ));

  addEvent$ = createEffect(() => this.actions$.pipe(
    ofType(eventActions.addEvent),
    exhaustMap(action => this.eventService.newEvent(action.event)
      .pipe(
        map(response => {
          console.log('effect response : ', response);
          this.toaster.success(response.msg);
          return eventActions.addEventSuccess({Data: response.Data, msg: response.msg });
        }),
        catchError(error => of(eventActions.addEventFailure({error})))
      ))
  ));

  updateEvent$ = createEffect(() => this.actions$.pipe(
    ofType(eventActions.updateEvent),
    exhaustMap(action => this.eventService.updateEvent(action.Data)
      .pipe(
        map(response => {
          this.toaster.success(response.msg);
          const updateEvent: Update<Event> = {
            id: action.Data.id,
            changes: {
              ...action.Data
            }
          };
          debugger;
          return eventActions.updateEventSuccess({event: updateEvent});
          
        }),
        catchError(error => {
          console.log('error update effect :', error);
          return of(eventActions.updateEventFailure({error}));
        })
      ))
  ));


  redirectAddUpdateEvent$ = createEffect(() => this.actions$.pipe(
    ofType(...[eventActions.updateEventSuccess, eventActions.addEventSuccess]),
    map( () => {
      this.router.navigate(['events']);
    })
  ), { dispatch: false });


  deleteEvent$ = createEffect(() => this.actions$.pipe(
    ofType(eventActions.deleteEvent),
    exhaustMap(action => this.eventService.deleteEvent(action.id)
      .pipe(
        map((response: any) => {
          console.log('effect res : ', response);
          this.toaster.success(response.msg);
          return eventActions.deleteEventSuccess({id: action.id});
        }),
        catchError(error => of(eventActions.deleteEventFailure({error})))
      ))
  ));
}
