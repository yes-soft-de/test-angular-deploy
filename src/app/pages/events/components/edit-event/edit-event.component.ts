import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Update } from '@ngrx/entity';
import { Store } from '@ngrx/store';
import { ToastrService } from 'ngx-toastr';
import { Observable, Subscription } from 'rxjs';
import { ImageSnippet } from 'src/app/@theme/model/image-snippet';
import { Events } from '../../model/event.model';
import { EventsService } from '../../services/events.service';
import { loadEvent, updateEvent } from '../../store/event.actions';
import { EventState } from '../../store/event.reducer';
import { getEventDetailsSelector } from '../../store/event.selector';

@Component({
  selector: 'app-edit-event',
  templateUrl: './edit-event.component.html',
  styleUrls: ['./edit-event.component.scss']
})
export class EditEventComponent implements OnInit, OnDestroy {
  eventDetails: Events;
  isSubmited = false;
  editEventForm: FormGroup;
  uploadButtonValue = 'Upload';
  coverUploadButtonValue = 'Upload';
  imageName = 'Select Image';
  fileSelected = false;
  fileUploaded = false;
  imageUploaded = false;
  imageUrl: string;
  imagePathReady = false;
  submitButtonValue = 'Waiting Uploading Image';
  selectedFile: ImageSnippet;
  editUnsubscription: Subscription;

  constructor(private store: Store<EventState>,
              private eventService: EventsService,
              private activatedRoute: ActivatedRoute,
              private toaster: ToastrService) {
  }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(
      params => {
        const eventId = params.get('id');
        this.store.dispatch(loadEvent({ id: +eventId}));
      }
    );
    // Fetch Form Data
    this.editEventForm = new FormGroup({
      name: new FormControl(''),
      description: new FormControl(''),
      location: new FormControl(''),
      status: new FormControl(''),
      type: new FormControl(''),
      // subType: new FormControl(''),
      image: new FormControl('')
    });
    // run get event Details method
    this.getEventDetails();
  }

  // Get Event Details
  getEventDetails() {
    this.editUnsubscription = this.store.select(getEventDetailsSelector).subscribe(
      data => {
        if (data) {
          // console.log('data', data);
          this.eventDetails = data;
          this.fillingForm(data);
        }
      }
    );
  }

  // fill update form inputs
  fillingForm(data: Events) {
    this.editEventForm = new FormGroup({
      id: new FormControl(data.id),
      name: new FormControl(data.name),
      description: new FormControl(data.description),
      location: new FormControl(data.location),
      status: new FormControl(data.status),
      type: new FormControl(data.type),
      // subType: new FormControl(data.subType),
      image: new FormControl('')
    });
  }



  updateName(imageInput: any) {
    const file: File = imageInput.files[0];
    this.uploadButtonValue = 'upload';
    this.imageName = file.name;
    this.fileSelected = true;
  }

  processFile(imageInput: any) {
    this.fileSelected = false;
    this.imageUploaded = true;
    this.uploadButtonValue = 'uploading...';
    console.log('Processing File');
    const file: File = imageInput.files[0];
    const reader = new FileReader();

    reader.addEventListener('load', (event: any) => {
      this.selectedFile = new ImageSnippet(event.target.result, file);
      this.eventService.uploadImage(this.selectedFile.file).subscribe(
        (res) => {
          console.log(res);
          this.imageUrl = res;
          this.uploadButtonValue = 'uploaded';
          this.imagePathReady = true;
          this.imageUploaded = false;
          this.submitButtonValue = 'update';
        },
        (err) => {
          this.uploadButtonValue = 'upload';
          this.fileSelected = true;
          this.imageUploaded = false;
          this.toaster.error('Network Error, Please Try After a Few Seconds');
          console.log(err);
        });
    });
    reader.readAsDataURL(file);
  }

  onSubmit() {
    // this.isSubmited = true;
    if (!this.editEventForm.valid) {
      this.toaster.error('Error : Form Not Valid');
      this.isSubmited = false;
      return false;
    }
    // Fetch All Form Data On Json Type
    const formObject = this.editEventForm.getRawValue();
    formObject.subType = 'test';
    if (this.imageUrl) {
      formObject.image = this.imageUrl;
    } else {
      formObject.image = this.eventDetails?.images?.imageURL;
    }
    console.log(formObject);   
    this.store.dispatch(updateEvent({Data: formObject}));
    // this.isSubmited = false;
  }

  ngOnDestroy() {
    this.editUnsubscription.unsubscribe();
  }


}
