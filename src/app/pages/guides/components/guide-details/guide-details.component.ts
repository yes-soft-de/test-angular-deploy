import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Guide} from '../../model/guide.model';
import {GuideState} from '../../store/guide.reducer';
import {Store} from '@ngrx/store';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {loadGuide} from '../../store/guide.actions';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {getGuideSelector} from '../../store/guide.selector';
import {GuideDetails} from '../../model/guide-details';

@Component({
  selector: 'app-guide-details',
  templateUrl: './guide-details.component.html',
  styleUrls: ['./guide-details.component.scss']
})
export class GuideDetailsComponent implements OnInit {
  guide: GuideDetails;
  guideOrdersList: any[] = [];
  config: any;

  constructor(private store: Store<GuideState>,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(
      (params: ParamMap) => {
        this.store.dispatch(loadGuide({id: params.get('id')}));
      });
    this.getGuideDetails();
  }

  getGuideDetails() {
    this.store.select(getGuideSelector).subscribe(
      data => {
        if (data) {
          console.log('data: ', data);
          this.guide = data;
          this.guideOrdersList = data?.myOrders;
          this.config = {
            itemsPerPage: 5,
            currentPage: 1,
            totalItems: this.guideOrdersList.length
          };
        }
      }
    );
  }

  pageChanged(event) {
    this.config.currentPage = event;
  }

}
