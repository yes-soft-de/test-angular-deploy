import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TokenService } from 'src/app/@theme/admin-service/token/token.service';
import { AdminConfig } from '../../AdminConfig';
import { RegionDetailsResponse } from '../model/region-details.response';
import { RegionsResponse } from '../model/region-response.model';
import { Region } from '../model/region.model';

@Injectable({
  providedIn: 'root'
})
export class RegionsService {

  constructor(private httpClient: HttpClient,
              private tokenService: TokenService) { }

  // All Regions
  getAllRegions(): Observable<RegionsResponse> {
    return this.httpClient.get<RegionsResponse>(AdminConfig.regionsAPI);
  }

  // Get Region Details
  getRegion(regionId: number): Observable<RegionDetailsResponse> {
    return this.httpClient.delete<RegionDetailsResponse>(`${AdminConfig.regionAPI}/${regionId}`);
  }

  // Create New Regions
  createRegion(data): Observable<Region> {
    return this.httpClient.post<Region>(
      AdminConfig.regionAPI,
      JSON.stringify(data)
    );
  }

  // Update Exists Region
  updateRegion(regionId: number, data): Observable<Region> {
    return this.httpClient.put<Region>(
      `${AdminConfig.regionAPI}/${regionId}`,
      JSON.stringify(data)
    );
  }

  // Delete Region
  deleteRegion(regionId: number): Observable<any> {
    return this.httpClient.delete<any>(
      `${AdminConfig.regionAPI}/${regionId}`
    );
  }

}
