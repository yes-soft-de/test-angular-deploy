import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AllGuidesComponent} from './components/all-guides/all-guides.component';
import {UpdateGuideComponent} from './components/update-guide/update-guide.component';
import {GuideDetailsComponent} from './components/guide-details/guide-details.component';


const routes: Routes = [
  { path: '', component: AllGuidesComponent },
  { path: ':id', component: GuideDetailsComponent },
  { path: 'approve/:id', component: UpdateGuideComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GuidesRoutingModule { }
