import { Injectable } from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {GuidesService} from '../services/guides.service';
import * as guideActions from './guide.actions';
import {catchError, exhaustMap, map, mergeMap, tap} from 'rxjs/operators';
import {of} from 'rxjs';
import {ToastrService} from 'ngx-toastr';
import {ActivatedRoute, Router} from '@angular/router';


@Injectable()
export class GuideEffects {



  constructor(private actions$: Actions,
              private guidesService: GuidesService,
              private toaster: ToastrService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {}

  loadGuides$ = createEffect(() => this.actions$.pipe(
    ofType(guideActions.loadGuides),
    mergeMap(() => this.guidesService.getAllGuides()
      .pipe(
        map(response => {
          // console.log(response);
          return guideActions.loadGuidesSuccess({Data: response.Data});
        }),
        catchError(error => of(guideActions.loadGuidesFailure({error})))
      ))
  ));

  loadGuide$ = createEffect(() => this.actions$.pipe(
    ofType(guideActions.loadGuide),
    mergeMap(action => this.guidesService.getGuideById(action.id)
      .pipe(
        map(response => guideActions.loadGuideSuccess({guide: response.Data})),
        catchError(error => of(guideActions.loadGuidesFailure({error})))
      ))
  ));

  approveGuide$ = createEffect(() => this.actions$.pipe(
    ofType(guideActions.updateGuide),
    exhaustMap(action => this.guidesService.updateGuideStatus(action.id, action.status)
      .pipe(
        map(response => {
          // console.log('effect response : ', response);
          this.toaster.success(response.msg);
          return guideActions.updateGuideSuccess();
        }),
        catchError(error => {
          console.log('error effect : ', error);
          return of(guideActions.updateGuideFailure({error}));
        })
      ))
  ));

  redirectAfterUpdateGuide$ = createEffect(() => this.actions$.pipe(
    ofType(guideActions.updateGuideSuccess),
    tap(() => this.router.navigate(['guides']))
  ), { dispatch: false });
}
