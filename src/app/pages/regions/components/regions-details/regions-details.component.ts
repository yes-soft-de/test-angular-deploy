import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Store } from '@ngrx/store';
import { Region } from '../../model/region.model';
import { loadRegion } from '../../store/region.actions';
import { RegionState } from '../../store/region.reducer';
import { getRegionSelector } from '../../store/region.selector';

@Component({
  selector: 'app-regions-details',
  templateUrl: './regions-details.component.html',
  styleUrls: ['./regions-details.component.scss']
})
export class RegionsDetailsComponent implements OnInit {
  region: Region;
  regionGuidesList: any[] = [];
  regionCommentsList: any[] = [];
  config: any;
  paginate: any;

  constructor(private store: Store<RegionState>,
              private activatedRoute: ActivatedRoute) { }

  
  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(
      (params: ParamMap) => {
        this.store.dispatch(loadRegion({id: +params.get('id')}));
      });
    this.getRegionDetails();
  }

  getRegionDetails() {
    this.store.select(getRegionSelector).subscribe(
      data => {
        if (data) {
          // console.log('data: ', data);
          this.region = data;
          this.regionGuidesList = data?.guides;
          this.regionCommentsList = data?.comments;
          this.config = {
            id: 'region-guide',
            itemsPerPage: 5,
            currentPage: 1,
            totalItems: this.regionGuidesList.length
          };
          this.paginate = {
            id: 'region-comments',
            itemsPerPage: 5,
            currentPage: 1,
            totalItems: this.regionCommentsList.length
          };
        }
      }
    );
  }

  pageChanged(event) {
    this.config.currentPage = event;
  }

  pagedChanged(event) {
    this.paginate.currentPage = event;
  }
}
