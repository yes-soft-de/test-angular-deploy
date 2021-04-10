import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AllAcceptOrdersComponent} from './components/all-accept-orders/all-accept-orders.component';
import {AllUnAcceptOrdersComponent} from './components/all-unaccept-orders/all-unaccept-orders.component';


const routes: Routes = [
  { path: 'accepted', component: AllAcceptOrdersComponent },
  { path: 'unaccepted', component: AllUnAcceptOrdersComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AcceptOrdersRoutingModule { }
