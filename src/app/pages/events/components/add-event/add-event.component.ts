import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { Store } from '@ngrx/store';
import { ToastrService } from 'ngx-toastr';
import { ImageSnippet } from 'src/app/@theme/model/image-snippet';
import { EventState } from '../../store/event.reducer';
import {addEvent} from '../../store/event.actions';
import {getAddEventErrorSelector} from '../../store/event.selector';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.scss']
})
export class AddEventComponent implements OnInit {

  isSubmited = false;
  addEventForm: FormGroup;
  uploadButtonValue = 'Upload';
  coverUploadButtonValue = 'Upload';
  imageName = 'Select Image';
  fileSelected = false;
  fileUploaded = false;
  imageUrl: string;
  imagePathReady = false;
  submitButtonValue = 'Waiting Uploading Image';
  selectedFile: ImageSnippet;

  constructor(private store: Store<EventState>,
              private toaster: ToastrService) {
  }

  ngOnInit() {
    // Fetch Form Data
    this.addEventForm = new FormGroup({
      name: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      location: new FormControl('', Validators.required),
      status: new FormControl('', Validators.required),
      date: new FormControl('', Validators.required),
      type: new FormControl('', Validators.required)
    });

    this.store.select(getAddEventErrorSelector).subscribe(error => console.log('error', error));

  }




  onSubmit() {
    // this.isSubmited = true;
    if (!this.addEventForm.valid) {
      this.toaster.error('Error : Form Not Valid');
      this.isSubmited = false;
      return false;
    }
    // Fetch All Form Data On Json Type
    const formObject = this.addEventForm.getRawValue();
    console.log(formObject);
    this.store.dispatch(addEvent({event: formObject}));
  }


}
