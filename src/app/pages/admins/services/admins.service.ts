import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AdminConfig} from '../../AdminConfig';
import {Admin} from '../model/admin.model';
import {AdminsResponse} from '../model/admins-response';

@Injectable({
  providedIn: 'root'
})
export class AdminsService {

  constructor(private httpClient: HttpClient) { }

  getAdmins(): Observable<AdminsResponse> {
    return this.httpClient.get<AdminsResponse>(AdminConfig.adminsAPI);
  }

  newAdmin(data): Observable<any> {
    return this.httpClient.post(AdminConfig.createAdminAPI, data);
  }

  deleteAdmin(userID: string): Observable<any> {
    return this.httpClient.delete(`${AdminConfig.deleteAdminAPI}/${userID}`);
  }

  // Admin Section - Upload Image
  public uploadImage(image: File): Observable<string> {
    const formData = new FormData();
    formData.append('image', image);
    return this.httpClient.post<string>(AdminConfig.generalUploadAPI, formData);
  }
}
