import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import {forkJoin, Observable, Subscription} from 'rxjs';
import { FooterComponent } from 'src/app/@theme/components';
import { AppState } from 'src/app/@theme/store/app-state';
import { setLoadSpinner } from 'src/app/@theme/store/shared/shared.actions';
import {DashboardService} from './services/dashboard.service';
import {DashboardState} from './store/dashboard.reducer';
import {loadDashboards} from './store/dashboard.actions';
import {getDashboardStatisticsSelector} from './store/dashboard.selector';
import {Dashboard} from './model/dashboard.model';
import {Guide} from '../guides/model/guide.model';
import {Events} from '../events/model/event.model';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  providers: [ FooterComponent ]
})
export class DashboardComponent implements OnInit, OnDestroy {
  statistics$: Observable<Dashboard>;

  allGuides: Guide[];
  allEvents: Events[];
  latestGuidesNumber = 5;
  latestEventsNumber = 5;

  constructor(private store: Store<DashboardState>,
              private dashboardService: DashboardService) {
  }

  ngOnInit() {
    this.store.dispatch(loadDashboards());
    this.getStatistics();
    this.getAllGuides();
    this.getAllEvents();
  }

  getStatistics() {
    this.statistics$ = this.store.select(getDashboardStatisticsSelector);
  }

  getAllGuides() {
    this.dashboardService.getAllGuides().subscribe(
      guidesResponse => {
        // console.log(guidesResponse.Data);
        this.allGuides = guidesResponse.Data.reverse();
      }
    );
  }

  getAllEvents() {
    this.dashboardService.getAllEvents().subscribe(
      eventsResponse => this.allEvents = eventsResponse.Data.reverse()
    );
  }

  ngOnDestroy() {
    // this.combinedObservable.unsubscribe();
  }

}
