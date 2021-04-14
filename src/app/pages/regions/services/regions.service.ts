import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { TokenService } from 'src/app/@theme/admin-service/token/token.service';
import { AdminConfig } from '../../AdminConfig';
import { GoogleMapResponse } from '../model/google-map-response';
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
    return this.httpClient.get<RegionDetailsResponse>(`${AdminConfig.regionAPI}/${regionId}`);
  }

  // Create New Regions
  createRegion(data): Observable<Region> {
    return this.httpClient.post<Region>(
      AdminConfig.regionAPI,
      JSON.stringify(data)
    );
  }

  // Update Exists Region
  updateRegion(region: Region): Observable<Region> {
    return this.httpClient.put<Region>(
      AdminConfig.updateRegionAPI,
      JSON.stringify(region)
    );
  }

  // Delete Region
  deleteRegion(regionId: number): Observable<any> {
    return this.httpClient.delete<any>(
      `${AdminConfig.regionAPI}/${regionId}`
    );
  }

  getGoogleMapToken(): Observable<{Data: string}> {
    return this.httpClient.get<{Data: string}>(AdminConfig.googleMapTokenAPI);
  }

  getPlaceDetailsByPlaceID(placeID: string, token: string) {
    const placeDetailsURL = AdminConfig.googleMapPlaceDetailsAPI + `json?place_id=${placeID}&key=${token}`;
    return this.httpClient.get(placeDetailsURL);
  }

  search(value: string, token: string): Observable<GoogleMapResponse> {
    const searchQuery = AdminConfig.googleMapSearchAPI + `json?input=${value}&types=geocode&key=${token}`;
    return this.httpClient.get<GoogleMapResponse>(searchQuery);
  }

  searchLocationAutoComplete(text$: Observable<string>, token: string): Observable<GoogleMapResponse> {
		return text$.pipe(
			debounceTime(500),			// Wait 500 Millsecond before execute The rest
			distinctUntilChanged(),		// stop make search until the searching value is changing 
			switchMap(searchTerm => {
				if (!searchTerm) {
					return [];
				}
				return this.search(searchTerm, token);
			})
		);
	}
  

  // Image Section - Upload Image
  public uploadImage(image: File): Observable<string> {
    const formData = new FormData();
    formData.append('image', image);
    return this.httpClient.post<string>(AdminConfig.generalUploadAPI, formData);
  }

}
