import {Component, OnDestroy, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {OrdersState} from '../../store/accept-order.reducer';
import {loadAcceptOrders} from '../../store/accept-order.actions';
import {getAcceptOrdersSelector} from '../../store/accept-order-selector';
import {Subscription} from 'rxjs';
import {AcceptOrder} from '../../model/accept-order.model';

@Component({
  selector: 'app-all-accept-orders',
  templateUrl: './all-accept-orders.component.html',
  styleUrls: ['./all-accept-orders.component.scss']
})
export class AllAcceptOrdersComponent implements OnInit, OnDestroy {
  acceptOrders: AcceptOrder[];
  acceptOrdersList: AcceptOrder[] = [];
  name: any;
  config: any;
  isDeleted: boolean;
  acceptOrdersSubscription: Subscription;


  constructor(private store: Store<OrdersState>) { }

  ngOnInit(): void {
    this.store.dispatch(loadAcceptOrders());
    this.getAcceptedOrders();
  }

  getAcceptedOrders() {
    this.acceptOrdersSubscription = this.store.select(getAcceptOrdersSelector).subscribe(
      data => {
        if (data) {
          console.log('data', data);
          this.acceptOrders = data;
          this.acceptOrdersList = data;
          this.config = {
            itemsPerPage: 5,
            currentPage: 1,
            totalItems: this.acceptOrdersList.length
          };
        }
      });

  }

  // Fetch The Page Number On Page Change
  pageChanged(event) {
    this.config.currentPage = event;
  }

  applyFilter() {
    // if the search input value is empty
    if (!this.name) {
      this.acceptOrdersList = [...this.acceptOrders];
    } else {
      this.acceptOrdersList = [];
      this.acceptOrdersList = this.acceptOrders.filter(res => {
        if (res.guideName) {
          const guideName = res.guideName.toLocaleLowerCase().match(this.name.toLocaleLowerCase());
          if (guideName) {
            return guideName;
          }
        }
        if (res.touristName) {
          const touristName = res.touristName.toLocaleLowerCase().match(this.name.toLocaleLowerCase());
          if (touristName) {
            return touristName;
          }
        }
        if (res.order.city) {
          const city = res.order.city.toLocaleLowerCase().match(this.name.toLocaleLowerCase());
          if (city) {
            return city;
          }
        }
        if (res.order.status) {
          const status = res.order.status.toLocaleLowerCase().match(this.name.toLocaleLowerCase());
          if (status) {
            return status;
          }
        }
      });
    }
  }

  ngOnDestroy() {
    this.acceptOrdersSubscription.unsubscribe();
  }


}
