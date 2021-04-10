import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Store} from '@ngrx/store';
import {GuideState} from '../../store/guide.reducer';
import {ToastrService} from 'ngx-toastr';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {loadGuide, updateGuide} from '../../store/guide.actions';
import {getGuideSelector} from '../../store/guide.selector';
import {Guide} from '../../model/guide.model';

@Component({
  selector: 'app-update-guide',
  templateUrl: './update-guide.component.html',
  styleUrls: ['./update-guide.component.scss']
})
export class UpdateGuideComponent implements OnInit {
  updateGuideFrom: FormGroup;
  guide: Guide;
  guideId: string;
  constructor(private store: Store<GuideState>,
              private activatedRoute: ActivatedRoute,
              private toaster: ToastrService) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(
      (params: ParamMap) => {
        this.guideId = params.get('id');
        this.store.dispatch(loadGuide({id: this.guideId}));
      });

    this.updateGuideFrom = new FormGroup({
      id: new FormControl(''),
      status: new FormControl('', Validators.required),
      cost: new FormControl('', Validators.required),
    });
    this.getGuideById();
  }

  getGuideById() {
    this.store.select(getGuideSelector).subscribe(
      response => {
        if (response) {
          console.log('respones : ', response);
          this.guide = response;
          this.fillGuideForm(response);
        }
      }
    );
  }

  fillGuideForm(data: Guide) {
    this.updateGuideFrom = new FormGroup({
      id: new FormControl(data.id),
      status: new FormControl(data.status, Validators.required),
      cost: new FormControl('', Validators.required),
    });
  }

  onSubmit() {
    if (!this.updateGuideFrom.valid) {
      this.toaster.error('Form Not Valid !');
      return;
    }
    const formObject = this.updateGuideFrom.getRawValue();
    formObject.id = this.guideId;
    console.log(formObject);
    this.store.dispatch(updateGuide({id: formObject.id, status: formObject.status, cost: formObject.cost}));
  }
}
