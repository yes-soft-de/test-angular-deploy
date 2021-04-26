import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Store } from '@ngrx/store';
import { Events } from '../../model/event.model';
import { loadEvent } from '../../store/event.actions';
import { EventState } from '../../store/event.reducer';
import { getEventDetailsSelector } from '../../store/event.selector';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.scss']
})
export class EventDetailsComponent implements OnInit {
  event: Events;
  eventCommentsList: any[] = [];
  config: any;


  constructor(private store: Store<EventState>,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
      this.store.dispatch(loadEvent({id: +params.get('id')}));
    })
    this.getEventDetails();
  }

  getEventDetails() {
    this.store.select(getEventDetailsSelector).subscribe(
      data => {
        if (data) {
          // console.log('data: ', data);
          this.event = data;
          this.eventCommentsList = data?.comments;        
          this.config = {
            id: 'event-comments',
            itemsPerPage: 5,
            currentPage: 1,
            totalItems: this.eventCommentsList.length
          };
        }
      }
    );
  }

  pageChanged(event) {
    this.config.currentPage = event;
  }



}
