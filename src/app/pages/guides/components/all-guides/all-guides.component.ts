import {Component, OnDestroy, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {GuideState} from '../../store/guide.reducer';
import {getAllGuidesSelector} from '../../store/guide.selector';
import {loadGuides} from '../../store/guide.actions';
import {Observable, Subscription} from 'rxjs';
import {Guide} from '../../model/guide.model';
import * as regionsAction from '../../../regions/store/region.actions';

@Component({
  selector: 'app-all-guides',
  templateUrl: './all-guides.component.html',
  styleUrls: ['./all-guides.component.scss']
})
export class AllGuidesComponent implements OnInit, OnDestroy {
  guides: Guide[];
  guidesList: Guide[] = [];
  guidesSubscription: Subscription;
  name: string;
  config: any;

  constructor(private store: Store<GuideState>) { }

  ngOnInit(): void {

    this.store.dispatch(loadGuides());
    this.getAllGuides();

  }

  getAllGuides() {
    this.guidesSubscription = this.store.select(getAllGuidesSelector).subscribe(
      data => {
        if (data) {
          this.guides = data;
          this.guidesList = data;
          // Config the pagination
          this.config = {
            itemsPerPage: 5,
            currentPage: 1,
            totalItems: this.guidesList.length
          };
        }
      }
    );
  }

  // Fetch The Page Number On Page Change
  pageChanged(event) {
    this.config.currentPage = event;
  }

  applyFilter() {
    // if the search input value is empty
    if (!this.name) {
      this.guidesList = [...this.guides];
    } else {
      this.guidesList = [];
      this.guidesList = this.guides.filter(res => {
        if (res.name) {
          const name = res.name.toLocaleLowerCase().match(this.name.toLocaleLowerCase());
          if (name) {
            // display the Name Column
            return name;
          }
        }
        // if (res?.regions?.length > 0) {
        //   res?.regions.forEach(e => {
        //
        //     if (e?.name) {
        //       const regionsName = e?.name.toLocaleLowerCase().match(this.name.toLocaleLowerCase());
        //       console.log(this.name, regionsName);
        //       if (regionsName) {
        //         // display the Name Column
        //         debugger;
        //         return regionsName;
        //       }
        //     }
        //   });
        // }
        if (res.status) {
          const status = res.status.toLocaleLowerCase().match(this.name.toLocaleLowerCase());
          if (status) {
            // display the Name Column
            return status;
          }
        }
      });
    }
  }

  ngOnDestroy() {
    this.guidesSubscription.unsubscribe();
  }
}
