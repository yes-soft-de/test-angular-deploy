import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AdminConfig} from '../../AdminConfig';
import {AcceptOrdersResponse} from '../model/accept-orders-response';
import {UnAcceptOrderResponse} from '../model/unaccept-order-response';

@Injectable({
  providedIn: 'root'
})
export class AcceptOrdersService {

  constructor(private httpClient: HttpClient) { }


  getAllUnAcceptedOrders(): Observable<UnAcceptOrderResponse> {
    return this.httpClient.get<UnAcceptOrderResponse>(AdminConfig.allUnacceptedOrdersAPI);
  }

  getAllAcceptedOrders(status = 'done'): Observable<AcceptOrdersResponse> {
    return this.httpClient.get<AcceptOrdersResponse>(`${AdminConfig.allAcceptedOrdersAPI}/${status}`);
  }
}
