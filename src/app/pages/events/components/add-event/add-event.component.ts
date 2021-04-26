import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { Store } from '@ngrx/store';
import { ToastrService } from 'ngx-toastr';
import { ImageSnippet } from 'src/app/@theme/model/image-snippet';
import { EventState } from '../../store/event.reducer';
import {addEvent} from '../../store/event.actions';
import {getAddEventErrorSelector} from '../../store/event.selector';
import { EventsService } from '../../services/events.service';

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
  imageUploaded = false;
  imageUrl: string;
  imagePathReady = false;
  submitButtonValue = 'Waiting Uploading Image';
  selectedFile: ImageSnippet;

  constructor(private store: Store<EventState>,
              private eventService: EventsService,
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
      type: new FormControl('', Validators.required),
      image: new FormControl(''),
    });

    this.store.select(getAddEventErrorSelector).subscribe(error => console.log('error', error));

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
          this.submitButtonValue = 'new-event';
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
    if (!this.addEventForm.valid) {
      this.toaster.error('Error : Form Not Valid');
      this.isSubmited = false;
      return false;
    }
    // Fetch All Form Data On Json Type
    const formObject = this.addEventForm.getRawValue();      
    formObject.image = this.imageUrl;
    console.log(formObject);
    this.store.dispatch(addEvent({event: formObject}));
  }


}
