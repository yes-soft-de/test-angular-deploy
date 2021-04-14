import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {GuidesResponse} from '../model/guides-response';
import {AdminConfig} from '../../AdminConfig';
import {GuideResponse} from '../model/guide-response';

@Injectable({
  providedIn: 'root'
})
export class GuidesService {

  constructor(private httpClient: HttpClient) { }

  getAllGuides(): Observable<GuidesResponse> {
    return this.httpClient.get<GuidesResponse>(AdminConfig.guidesAPI);
  }

  getGuideById(guideId: string): Observable<GuideResponse> {
    return this.httpClient.get<GuideResponse>(`${AdminConfig.guideByIdAPI}/${guideId}`);
  }

  updateGuideStatus(id: string, status: string): Observable<any> {
    const data = {
      id,
      status
    };
    return this.httpClient.put<any>(AdminConfig.updateGuideAPI, data);
  }

}
