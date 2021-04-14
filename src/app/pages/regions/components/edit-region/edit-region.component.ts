import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit, Renderer2 } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
import { ToastrService } from 'ngx-toastr';
import { of } from 'rxjs';
import { ImageSnippet } from 'src/app/@theme/model/image-snippet';
import { GoogleMap } from '../../model/google-map';
import { Region } from '../../model/region.model';
import { RegionsService } from '../../services/regions.service';
import { loadRegion, updateRegion } from '../../store/region.actions';
import { RegionState } from '../../store/region.reducer';
import { getRegionSelector } from '../../store/region.selector';

@Component({
  selector: 'app-edit-region',
  templateUrl: './edit-region.component.html',
  styleUrls: ['./edit-region.component.scss']
})
export class EditRegionComponent implements OnInit {

  isSubmited = false;
  editRegionForm: FormGroup;
  regionData: Region;
  uploadButtonValue = 'upload';
  coverUploadButtonValue = 'upload';
  imageName = 'select-image';
  fileSelected = false;
  fileUploaded = false;
  imageUrl: string;
  imagePathReady = false;
  imageUploaded = false;
  submitButtonValue = 'Waiting Uploading Image';
  selectedFile: ImageSnippet;
  showSearchResult = false;
  googleMapToken: string;
  googleLocationsNameList: GoogleMap[];

  constructor(private store: Store<RegionState>,
              private regionService: RegionsService,
              private toaster: ToastrService,
              public translate: TranslateService,
              private render: Renderer2,
              @Inject(DOCUMENT) private document: Document,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(params => {
      const regionId = params.get('id');      
      this.store.dispatch(loadRegion({id: +regionId}));
    })
    // Init Form Inputs
    this.editRegionForm = new FormGroup({
      name: new FormControl(''),
      description: new FormControl(''),
      location: new FormControl(''),
      path: new FormControl(''),
      placeId: new FormControl('', Validators.required),
    });
    this.checkLangChange();     // Check CHange Languages
    this.getRegion();           // Region Details
    this.getGoogleMapToken();   // Google Map Token
  }

  // Get Google Map Token
  getGoogleMapToken() {
    this.regionService.getGoogleMapToken().subscribe(token => this.googleMapToken = token.Data);
  }

  // Get Region Details
  getRegion() {
    this.store.select(getRegionSelector).subscribe(
      data => {
        if (data) {
          this.regionData = data;
          console.log('data detail: ', data);
          this.fillForms(data);
        }
      }
    );
  }

  // Fill Form Inputs With Region Data
  fillForms(data: Region) {
    this.editRegionForm = new FormGroup({
      id: new FormControl(data.id),
      name: new FormControl(data.name),
      description: new FormControl(data.description),
      location: new FormControl(data.location),
      path: new FormControl(data.path),
      placeId: new FormControl(data.placeId),
    });
  } 

  // Search Google Map Location
  searchLocation(event) {
    this.showSearchResult = true;
    const value = of((event.target.value).trim());
    this.regionService.searchLocationAutoComplete(value, this.googleMapToken).subscribe(
      data => {
        if (data) {
          this.googleLocationsNameList = data.predictions;
          console.log('search data : ', this.googleLocationsNameList);
          // this.showSearchResult = false;
        }
      });    
  }

  // Fill Form Inputs With New Google Map Locations
  getLocationInfo(location: GoogleMap) {
    const id = this.regionData.id;
    const description = this.editRegionForm.get('description').value;
    if (location) {
      this.showSearchResult = false;
      this.editRegionForm = new FormGroup({
        id: new FormControl(id),
        name: new FormControl(location?.description),
        description: new FormControl(description),  
        location: new FormControl(location?.structured_formatting?.main_text_matched_substrings.length),
        placeId: new FormControl(location?.place_id),
        path: new FormControl(''),  
      });
     
    }
  }

  // Check Change Language To Style Upload Image Input With RTL And LTR
  checkLangChange() {
    this.translate.onLangChange.subscribe(lang => {
      console.log('lang change to : ', lang);
      if (lang.lang == 'ar') {
        console.log('lang : ', lang.lang);
        this.render.removeClass(this.document.querySelector('.input-group-custom'), 'input-group');
        this.render.addClass(this.document.querySelector('.input-group-custom'), 'input-group-ar');
      } else {
        this.render.addClass(this.document.querySelector('.input-group-custom'), 'input-group');
        this.render.removeClass(this.document.querySelector('.input-group-custom'), 'input-group-ar');
      }
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
    this.imageUploaded = true;
    console.log('Processing File');
    const file: File = imageInput.files[0];
    const reader = new FileReader();

    reader.addEventListener('load', (event: any) => {
      this.selectedFile = new ImageSnippet(event.target.result, file);
      this.regionService.uploadImage(this.selectedFile.file).subscribe(
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
    if (!this.editRegionForm.valid) {
      this.toaster.error('Error : Form Not Valid');
      this.isSubmited = false;
      return false;
    }
    // Fetch All Form Data On Json Type
    const formObject = this.editRegionForm.getRawValue();  
    formObject.path = this.imageUrl;
    if (this.imageUrl) {
      formObject.path = this.imageUrl;
    } else {
      formObject.path = this.regionData.regionImage[0].pathURL;
    }
    console.log(formObject);
    this.store.dispatch(updateRegion({region: formObject}));    
  }


  // This sample uses the Place Autocomplete widget to allow the user to search
// for and select a place. The sample then displays an info window containing
// the place ID and other information about the place that the user has
// selected.

// This example requires the Places library. Include the libraries=places
// parameter when you first load the API. For example:
// <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places">
/*
  initMap(): void {
    const map = new google.maps.Map(
      document.getElementById("map") as HTMLElement,
      {
        center: { lat: -33.8688, lng: 151.2195 },
        zoom: 13,
      }
    );

    const input = document.getElementById("pac-input") as HTMLInputElement;

    const autocomplete = new google.maps.places.Autocomplete(input);
    autocomplete.bindTo("bounds", map);

    // Specify just the place data fields that you need.
    autocomplete.setFields(["place_id", "geometry", "name"]);

    map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

    const infowindow = new google.maps.InfoWindow();
    const infowindowContent = document.getElementById(
      "infowindow-content"
    ) as HTMLElement;
    infowindow.setContent(infowindowContent);

    const marker = new google.maps.Marker({ map: map });

    marker.addListener("click", () => {
      infowindow.open(map, marker);
    });

    autocomplete.addListener("place_changed", () => {
      infowindow.close();

      const place = autocomplete.getPlace();

      if (!place.geometry || !place.geometry.location) {
        return;
      }

      if (place.geometry.viewport) {
        map.fitBounds(place.geometry.viewport);
      } else {
        map.setCenter(place.geometry.location);
        map.setZoom(17);
      }

      // Set the position of the marker using the place ID and location.
      // @ts-ignore This should be in @typings/googlemaps.
      marker.setPlace({
        placeId: place.place_id,
        location: place.geometry.location,
      });

      marker.setVisible(true);

      (infowindowContent.children.namedItem(
        "place-name"
      ) as HTMLElement).textContent = place.name as string;
      (infowindowContent.children.namedItem(
        "place-id"
      ) as HTMLElement).textContent = place.place_id as string;
      (infowindowContent.children.namedItem(
        "place-address"
      ) as HTMLElement).textContent = place.formatted_address as string;
      infowindow.open(map, marker);
    });
  }*/


}
