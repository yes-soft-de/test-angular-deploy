import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AdminConfig} from '../../AdminConfig';
import {DashboardResponse} from '../model/dashboard-response';
import {GuidesResponse} from '../../guides/model/guides-response';
import {EventsResponse} from '../../events/model/event-response.model';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private httpClient: HttpClient) { }

  getStatistics(): Observable<DashboardResponse> {
    return this.httpClient.get<DashboardResponse>(AdminConfig.dashboardStatisticAPI);
  }

  getAllGuides(): Observable<GuidesResponse> {
    return this.httpClient.get<GuidesResponse>(AdminConfig.guidesAPI);
  }

  getAllEvents(): Observable<EventsResponse> {
    return this.httpClient.get<EventsResponse>(AdminConfig.eventsAPI);
  }

}
