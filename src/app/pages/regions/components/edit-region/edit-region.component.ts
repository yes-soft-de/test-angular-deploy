import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ImageSnippet } from 'src/app/@theme/model/image-snippet';
import { RegionsService } from '../../services/regions.service';

@Component({
  selector: 'app-edit-region',
  templateUrl: './edit-region.component.html',
  styleUrls: ['./edit-region.component.scss']
})
export class EditRegionComponent implements OnInit {

  isSubmited = false;
  editRegionForm: FormGroup;
  uploadButtonValue = 'Upload';
  coverUploadButtonValue = 'Upload';
  imageName = 'Select Image';
  fileSelected = false;
  fileUploaded = false;
  imageUrl: string;
  imagePathReady = false;
  submitButtonValue = 'Waiting Uploading Image';
  selectedFile: ImageSnippet;

  constructor(private formBuilder: FormBuilder,
              private regionService: RegionsService,
              private toaster: ToastrService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    // Fetch Form Data
    this.editRegionForm = new FormGroup({
      name: new FormControl(''),
      description: new FormControl(''),
      location: new FormControl(''),
      path: new FormControl(''),
      placeId: new FormControl(''),
    });
    this.initMap();
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
    console.log(this.editRegionForm.getRawValue());
    this.regionService.createRegion(this.editRegionForm.getRawValue()).subscribe(
      data => console.log('data : ', data),
      error => console.log('error : ', error));
    // this.isSubmitted = true;

    // if (!this.editRegionForm.valid) {
    //   this.toaster.error('Error : Form Not Valid');
    //   this.isSubmitted = false;
    //   return false;
    // } else {
    //   // Fetch All Form Data On Json Type
    //   const formObject = this.editRegionForm.getRawValue();
    //   formObject.titleShow = formObject.titleShow == 0 ? false : true;
    //   formObject.createdBy = this.tokenService.userName;
    //   formObject.image = this.imageUrl;
    //   formObject.coverImage = this.coverImageUrl;
    //   this.categoryService.createCategory(formObject).subscribe(
    //     (createResponse: any) => console.log(createResponse),
    //     error => {
    //       this.isSubmitted = false;
    //       console.log('Error : ', error);
    //     },
    //     () => {
    //       this.isSubmitted = false;
    //       this.router.navigate(['../'], {relativeTo: this.activatedRoute});
    //     }
    //   );
    // }
  }

  // This sample uses the Place Autocomplete widget to allow the user to search
// for and select a place. The sample then displays an info window containing
// the place ID and other information about the place that the user has
// selected.

// This example requires the Places library. Include the libraries=places
// parameter when you first load the API. For example:
// <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places">

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
  }


}
