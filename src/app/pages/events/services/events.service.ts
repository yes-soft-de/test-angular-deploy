import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TokenService } from 'src/app/@theme/admin-service/token/token.service';
import { AdminConfig } from '../../AdminConfig';
import { EventDetailsResponse } from '../model/event-details-response.model';
import { EventsResponse } from '../model/event-response.model';
import {Events} from '../model/event.model';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  constructor(private httpClient: HttpClient,
              private tokenService: TokenService) { }

  getEvents(): Observable<EventsResponse> {
    return this.httpClient.get<EventsResponse>(AdminConfig.eventsAPI);
  }

  getEventDetails(eventId: number): Observable<EventDetailsResponse> {
    return this.httpClient.get<EventDetailsResponse>(`${AdminConfig.eventAPI}/${eventId}`);
  }

  newEvent(data): Observable<{ Data: Events, msg: string }> {
    return this.httpClient.post<{ Data: Events, msg: string }>(
      AdminConfig.eventAPI, data,
    );
  }

  updateEvent(data): Observable<{ Data: Events, msg: string }> {
    return this.httpClient.put<{ Data: Events, msg: string }>(
      AdminConfig.eventAPI, data,
    );
  }

}
