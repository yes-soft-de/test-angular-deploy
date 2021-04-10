import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AcceptOrdersRoutingModule } from './accept-orders-routing.module';
import { AllAcceptOrdersComponent } from './components/all-accept-orders/all-accept-orders.component';
import { EffectsModule } from '@ngrx/effects';
import { AcceptOrderEffects } from './store/accept-order.effects';
import {StoreModule} from '@ngrx/store';
import * as fromAcceptOrders from './store/accept-order.reducer';
import {ThemeModule} from '../../@theme/theme.module';
import {AllUnAcceptOrdersComponent} from './components/all-unaccept-orders/all-unaccept-orders.component';


@NgModule({
  declarations: [AllAcceptOrdersComponent, AllUnAcceptOrdersComponent],
  imports: [
    ThemeModule,
    AcceptOrdersRoutingModule,
    StoreModule.forFeature(fromAcceptOrders.acceptOrdersFeatureKey, fromAcceptOrders.reducer),
    EffectsModule.forFeature([AcceptOrderEffects])
  ]
})
export class AcceptOrdersModule { }
