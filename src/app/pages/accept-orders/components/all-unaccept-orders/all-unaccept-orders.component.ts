import {Component, OnDestroy, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {OrdersState} from '../../store/accept-order.reducer';
import {loadAcceptOrders, loadUnAcceptOrders} from '../../store/accept-order.actions';
import {getAcceptOrdersSelector, getUnAcceptOrdersSelector} from '../../store/accept-order-selector';
import {Subscription} from 'rxjs';
import {AcceptOrder} from '../../model/accept-order.model';
import {AcceptOrdersService} from '../../services/accept-orders.service';
import {UnAcceptOrder} from '../../model/unaccept-order';

@Component({
  selector: 'app-all-unaccept-orders',
  templateUrl: './all-unaccept-orders.component.html',
  styleUrls: ['./all-unaccept-orders.component.scss']
})
export class AllUnAcceptOrdersComponent implements OnInit, OnDestroy {
  unAcceptOrders: UnAcceptOrder[];
  unAcceptOrdersList: UnAcceptOrder[] = [];
  name: any;
  config: any;
  isDeleted: boolean;
  unAcceptOrdersSubscription: Subscription;


  constructor(private store: Store<OrdersState>, private orderSer: AcceptOrdersService) { }

  ngOnInit(): void {
    this.store.dispatch(loadUnAcceptOrders());
    this.getUnAcceptedOrders();
  }

  getUnAcceptedOrders() {
    this.unAcceptOrdersSubscription = this.store.select(getUnAcceptOrdersSelector).subscribe(
      data => {
        if (data) {
          console.log('un accept orders : ', data);
          this.unAcceptOrders = data;
          this.unAcceptOrdersList = data;
          this.config = {
            itemsPerPage: 5,
            currentPage: 1,
            totalItems: this.unAcceptOrdersList.length
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
      this.unAcceptOrdersList = [...this.unAcceptOrders];
    } else {
      this.unAcceptOrdersList = [];
      this.unAcceptOrdersList = this.unAcceptOrders.filter(res => {
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
        if (res.city) {
          const city = res.city.toLocaleLowerCase().match(this.name.toLocaleLowerCase());
          if (city) {
            return city;
          }
        }
      });
    }
  }

  ngOnDestroy() {
    this.unAcceptOrdersSubscription.unsubscribe();
  }


}
