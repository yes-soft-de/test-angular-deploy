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

  constructor(private httpClient: HttpClient) { }

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

  deleteEvent(eventId: string): Observable<any> {
    return this.httpClient.delete<any>(`${AdminConfig.eventAPI}/${eventId}`);
  }

  // Image Section - Upload Image
  public uploadImage(image: File): Observable<string> {
    const formData = new FormData();
    formData.append('image', image);
    return this.httpClient.post<string>(AdminConfig.generalUploadAPI, formData);
  }


}
