import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminsRoutingModule } from './admins-routing.module';
import { AllAdminsComponent } from './components/all-admins/all-admins.component';
import { NewAdminComponent } from './components/new-admin/new-admin.component';
import { StoreModule } from '@ngrx/store';
import * as fromAdmin from './store/admin.reducer';
import { EffectsModule } from '@ngrx/effects';
import { AdminEffects } from './store/admin.effects';
import {ThemeModule} from '../../@theme/theme.module';


@NgModule({
  declarations: [AllAdminsComponent, NewAdminComponent],
  imports: [
    ThemeModule,
    AdminsRoutingModule,
    StoreModule.forFeature(fromAdmin.adminsFeatureKey, fromAdmin.reducer),
    EffectsModule.forFeature([AdminEffects])
  ]
})
export class AdminsModule { }
