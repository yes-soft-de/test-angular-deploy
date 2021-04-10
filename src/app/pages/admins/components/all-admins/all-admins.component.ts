import {Component, OnDestroy, OnInit} from '@angular/core';
import {Events} from '../../../events/model/event.model';
import {Subscription} from 'rxjs';
import {select, Store} from '@ngrx/store';
import {EventState} from '../../../events/store/event.reducer';
import * as adminActions from '../../store/admin.actions';
import {getAllEventsSelector} from '../../../events/store/event.selector';
import {Admin} from '../../model/admin.model';
import {getAdminErrorSelector, getAllAdminsSelector} from '../../store/admin.selector';
import {AdminState} from '../../store/admin.reducer';

@Component({
  selector: 'app-all-admins',
  templateUrl: './all-admins.component.html',
  styleUrls: ['./all-admins.component.scss']
})
export class AllAdminsComponent implements OnInit, OnDestroy {
  admins: Admin[];
  adminsList: Admin[] = [];
  name: any;
  config: any;
  isDeleted: boolean;
  adminsSubscription: Subscription;

  constructor(private store: Store<AdminState>) { }

  ngOnInit(): void {
    this.store.dispatch(adminActions.loadAdmins());
    this.getAllAdmins();
    this.store.select(getAdminErrorSelector).subscribe(error => console.log('error : ', error));
  }

  getAllAdmins() {
    this.adminsSubscription = this.store.select(getAllAdminsSelector).subscribe(
      data => {
        console.log('components data : ', data);
        this.admins = data;
        this.adminsList = data;
        this.config = {
          itemsPerPage: 5,
          currentPage: 1,
          totalItems: this.adminsList.length
        };
      }
    );

  }

  // Fetch The Page Number On Page Change
  pageChanged(event) {
    this.config.currentPage = event;
  }

  delete(userID: string) {
    if (confirm('Are you sure you want to delete this admin ?')) {
      this.store.dispatch(adminActions.deleteAdmin({userID}));
    }
  }

  applyFilter() {
    // if the search input value is empty
    if (!this.name) {
      this.adminsList = [...this.admins];
    } else {
      this.adminsList = [];
      this.adminsList = this.admins.filter(res => {
        if (res.name) {
          const name = res.name.toLocaleLowerCase().match(this.name.toLocaleLowerCase());
          if (name) {
            return name;
          }
        }
        if (res.email) {
          const email = res.email.toLocaleLowerCase().match(this.name.toLocaleLowerCase());
          if (email) {
            return email;
          }
        }
        if (res.phoneNumber) {
          const phoneNumber = res.phoneNumber.toString().toLocaleLowerCase().match(this.name.toLocaleLowerCase());
          if (phoneNumber) {
            return phoneNumber;
          }
        }
      });
    }
  }

  ngOnDestroy() {
    if (this.adminsSubscription) {
      this.adminsSubscription.unsubscribe();
    }
  }


}
