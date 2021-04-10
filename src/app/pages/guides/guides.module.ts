import { NgModule } from '@angular/core';
import {ThemeModule} from '../../@theme/theme.module';

import { GuidesRoutingModule } from './guides-routing.module';
import { AllGuidesComponent } from './components/all-guides/all-guides.component';
import { StoreModule } from '@ngrx/store';
import * as fromGuide from './store/guide.reducer';
import { EffectsModule } from '@ngrx/effects';
import { GuideEffects } from './store/guide.effects';
import { UpdateGuideComponent } from './components/update-guide/update-guide.component';
import { GuideDetailsComponent } from './components/guide-details/guide-details.component';


@NgModule({
  declarations: [AllGuidesComponent, UpdateGuideComponent, GuideDetailsComponent],
  imports: [
    ThemeModule,
    GuidesRoutingModule,
    StoreModule.forFeature(fromGuide.guidesFeatureKey, fromGuide.reducer),
    EffectsModule.forFeature([GuideEffects])
  ]
})
export class GuidesModule { }
