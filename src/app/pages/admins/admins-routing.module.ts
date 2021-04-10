import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AllAdminsComponent} from './components/all-admins/all-admins.component';
import {NewAdminComponent} from './components/new-admin/new-admin.component';


const routes: Routes = [
  { path: '', component: AllAdminsComponent },
  { path: 'add', component: NewAdminComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminsRoutingModule { }
