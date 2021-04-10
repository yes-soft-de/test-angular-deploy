import { MapsAPILoader } from '@agm/core';
import { Component, ElementRef, NgZone, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { ToastrService } from 'ngx-toastr';
import { ImageSnippet } from 'src/app/@theme/model/image-snippet';
import { RegionsService } from '../../services/regions.service';
import { addRegion, deleteRegion } from '../../store/region.actions';
import { RegionState } from '../../store/region.reducer';

@Component({
  selector: 'app-add-region',
  templateUrl: './add-region.component.html',
  styleUrls: ['./add-region.component.scss']
})
export class AddRegionComponent implements OnInit {
  title: string = 'AGM project';
  latitude: number;
  longitude: number;
  zoom: number;
  address: string;
  private geoCoder;
  
  @ViewChild('search')
  public searchElementRef: ElementRef;

  isSubmited = false;
  addRegionForm: FormGroup;
  uploadButtonValue = 'Upload';
  coverUploadButtonValue = 'Upload';
  imageName = 'Select Image';
  fileSelected = false;
  fileUploaded = false;
  imageUrl: string;
  imagePathReady = false;
  submitButtonValue = 'Waiting Uploading Image';
  selectedFile: ImageSnippet;

  constructor(private store: Store<RegionState>,
              private toaster: ToastrService,
              private mapsAPILoader: MapsAPILoader,
              private ngZone: NgZone,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    // Fetch Form Data
    this.addRegionForm = new FormGroup({
      name: new FormControl(''),
      description: new FormControl(''),
      location: new FormControl(''),
      path: new FormControl(''),
      placeId: new FormControl(''),
    });

    this.mapsAPILoader.load().then(() => {
      this.setCurrentLocation();
      this.geoCoder = new google.maps.Geocoder;
  
      let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement);
      autocomplete.addListener("place_changed", () => {
        this.ngZone.run(() => {
          let place: google.maps.places.PlaceResult = autocomplete.getPlace();
  
          if (place.geometry === undefined || place.geometry === null) {
            return;
          }
  
          this.latitude = place.geometry.location.lat();
          this.longitude = place.geometry.location.lng();
          this.zoom = 12;
        });
      });
    });

  }

  updateName(imageInput: any) {
    const file: File = imageInput.files[0];
    this.uploadButtonValue = 'Upload';
    this.imageName = file.name;
    this.fileSelected = true;
  }

  processFile(imageInput: any) {
    this.fileSelected = false;
    this.uploadButtonValue = 'Uploading...';
    console.log('Processing File');
    const file: File = imageInput.files[0];
    const reader = new FileReader();

    reader.addEventListener('load', (event: any) => {
      this.selectedFile = new ImageSnippet(event.target.result, file);
      // this.categoryService.uploadImage(this.selectedFile.file).subscribe(
      //   (res) => {
      //     console.log(res);
      //     this.imageUrl = res;
      //     this.uploadButtonValue = 'Uploaded';
      //     this.imagePathReady = true;
      //     this.submitButtonValue = 'New Category';
      //   },
      //   (err) => {
      //     console.log(err);
      //   });
    });
    reader.readAsDataURL(file);
  }



  onSubmit() {
    this.isSubmited = true;
    if (!this.addRegionForm.valid) {
      this.toaster.error('Error : Form Not Valid');
      this.isSubmited = false;
      return false;
    }
    // Fetch All Form Data On Json Type
    const formObject = this.addRegionForm.getRawValue();
    this.store.dispatch(addRegion({region: formObject}));    
  }


  private setCurrentLocation() {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
        this.zoom = 8;
        this.getAddress(this.latitude, this.longitude);
      });
    }
  }
  
  getAddress(latitude, longitude) {
    this.geoCoder.geocode({ 'location': { lat: latitude, lng: longitude } }, (results, status) => {
      if (status === 'OK') {
        if (results[0]) {
          this.zoom = 12;
          this.address = results[0].formatted_address;
        } else {
          window.alert('No results found');
        }
      } else {
        window.alert('Geocoder failed due to: ' + status);
      }
  
    });
  }

}
