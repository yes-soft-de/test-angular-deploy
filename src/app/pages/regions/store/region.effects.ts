import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Update } from '@ngrx/entity';
import { Store } from '@ngrx/store';
import { ToastrService } from 'ngx-toastr';
import { of } from 'rxjs';
import { catchError, exhaustMap, map, mergeMap, switchMap } from 'rxjs/operators';
import { AppState } from 'src/app/@theme/store/app-state';
import { setLoadSpinner } from 'src/app/@theme/store/shared/shared.actions';
import { Region } from '../model/region.model';
import { RegionsService } from '../services/regions.service';
import * as regionsAction from '../store/region.actions';



@Injectable()
export class RegionEffects {

  constructor(private actions$: Actions,
              private store: Store<AppState>,
              private toaster: ToastrService,
              private router: Router,
              private activatedRoute: ActivatedRoute,
              private regionService: RegionsService) {}

  loadRegions$ = createEffect(() => this.actions$.pipe(
    ofType(regionsAction.loadRegions),
    mergeMap(() => this.regionService.getAllRegions()
      .pipe(
        map(response => {
          // this.store.dispatch(setLoadSpinner({status: false}));
          return regionsAction.loadRegionsSuccess(response)
        }
        ),
        catchError(error => {
          console.log('error effect: ', error);
          if (error.error.error) {
            this.toaster.error(error.error.error);
          } else if (error.error.msg) {
            this.toaster.error(error.error.msg);
          }
          return of(regionsAction.loadRegionsFailure(error));
        })
      ))
  ));

  loadRegion$ = createEffect(() => this.actions$.pipe(
    ofType(regionsAction.loadRegion),
    mergeMap(action => this.regionService.getRegion(action.id)
      .pipe(
        map(response => regionsAction.loadRegionSuccess({region: response.Data})),
        catchError(error => {
          console.log('error effect', error);
          return of(regionsAction.loadRegionFailure({error}))
        })
      ))
  ));

  addRegion$ = createEffect(() => this.actions$.pipe(
    ofType(regionsAction.addRegion),
    exhaustMap(action => this.regionService.createRegion(action.region)
      .pipe(
        map((response: any) => {
          this.toaster.success(response?.msg);
          return regionsAction.addRegionSuccess();
        }),
        catchError(error => {
          console.log('error create effect', error);
          return of(regionsAction.addRegionFailure({error}))
        })
      ))
  ));

  updateRegion$ = createEffect(() => this.actions$.pipe(
    ofType(regionsAction.updateRegion),
    switchMap(action => this.regionService.updateRegion(action.region)
    .pipe(
      map((response: any) => {
        this.toaster.success(response.msg);
        const regionUpdate: Update<Region> = {
          id: action.region.id,
          changes: {
            ...action.region
          }
        };
        return regionsAction.updateRegionSuccess({region: regionUpdate});
      }),
      catchError(error => of(regionsAction.updateRegionFailure({error})))
    ) )
  ));

  redirectAddUpdateRegion$ = createEffect(() => this.actions$.pipe(
    ofType(...[regionsAction.addRegionSuccess, regionsAction.updateRegionSuccess]),
    map( () => {
      this.router.navigate(['regions']);
    })
  ), { dispatch: false });

  // redirectUpdateRegion$ = createEffect(() => this.actions$.pipe(
  //   ofType(regionsAction.updateRegionSuccess),
  //   map( () => {
  //     this.router.navigate(['regions']);
  //   })
  // ), { dispatch: false });

  deleteRegion$ = createEffect(() => this.actions$.pipe(
    ofType(regionsAction.deleteRegion),
    exhaustMap(action => this.regionService.deleteRegion(action.id)
      .pipe(
        map(response => {
          console.log(response);          
          this.toaster.success('Region Successfully Deleted');
          return regionsAction.deleteRegionSuccess()}),
        catchError(error => {
          console.log('effect delete error', error);
          return of(regionsAction.deleteRegionFailure({error}));
        }))
      ))
  );
}
