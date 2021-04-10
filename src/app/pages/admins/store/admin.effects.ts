import { Injectable } from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {ActivatedRoute, Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import * as adminActions from './admin.actions';
import {catchError, exhaustMap, map, mergeMap, switchMap, tap} from 'rxjs/operators';
import {AdminsService} from '../services/admins.service';
import {of} from 'rxjs';
import {createAction} from '@ngrx/store';


@Injectable()
export class AdminEffects {



  constructor(private actions$: Actions,
              private adminService: AdminsService,
              private router: Router,
              private activatedRoute: ActivatedRoute,
              private toaster: ToastrService) {}

  loadAdmins$ = createEffect(() => this.actions$.pipe(
    ofType(adminActions.loadAdmins),
    mergeMap(() => this.adminService.getAdmins()
      .pipe(
        map(response => {
          return adminActions.loadAdminsSuccess(response);
        }),
        catchError(error => of(adminActions.loadAdminsFailure({error})))
      ))
  ));

  addAdmin$ = createEffect(() => this.actions$.pipe(
    ofType(adminActions.addAdmin),
    exhaustMap(action => this.adminService.newAdmin(action.admin)
      .pipe(
        map((response: any) => {
          this.toaster.success(response.msg);
          return adminActions.addAdminSuccess();
        }),
        catchError(error => of(adminActions.addAdminFailure({error})))
      ))
  ));

  redirectAfterAdd$ = createEffect(() => this.actions$.pipe(
    ofType(adminActions.addAdminSuccess),
    tap(() => this.router.navigate(['admins']))
  ), { dispatch: false });

  deleteAdmin$ = createEffect(() => this.actions$.pipe(
    ofType(adminActions.deleteAdmin),
    mergeMap(action => this.adminService.deleteAdmin(action.userID)
      .pipe(
        map((response: any) => {
          console.log('effect res : ', response);
          this.toaster.success(response.msg);
          return adminActions.deleteAdminSuccess({userID: action.userID});
        }),
        catchError(error => of(adminActions.deleteAdminFailure({error})))
      ))
  ));

}
