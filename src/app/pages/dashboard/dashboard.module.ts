import { NgModule } from '@angular/core';
import { ThemeModule } from 'src/app/@theme/theme.module';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { StoreModule } from '@ngrx/store';
import * as fromDashboard from './store/dashboard.reducer';
import { EffectsModule } from '@ngrx/effects';
import { DashboardEffects } from './store/dashboard.effects';

@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    ThemeModule,
    DashboardRoutingModule,
    StoreModule.forFeature(fromDashboard.dashboardsFeatureKey, fromDashboard.reducer),
    EffectsModule.forFeature([DashboardEffects])
  ]
})
export class DashboardModule { }
