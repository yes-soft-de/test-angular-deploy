import { MapsAPILoader } from '@agm/core';
import { DOCUMENT } from '@angular/common';
import { Component, ElementRef, Inject, NgZone, OnInit, Renderer2, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, ActivationEnd, NavigationEnd, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
import { ToastrService } from 'ngx-toastr';
import { of } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { ImageSnippet } from 'src/app/@theme/model/image-snippet';
import { GoogleMap } from '../../model/google-map';
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
  private googleMapToken: string;
  showSearchResult = false;
  googleLocationsNameList: GoogleMap[];

  constructor(private store: Store<RegionState>,
              private toaster: ToastrService,
              private regionService: RegionsService,
              public translate: TranslateService,
              private router: Router,
              private render: Renderer2,
              @Inject(DOCUMENT) private document: Document
              // private mapsAPILoader: MapsAPILoader,
              // private ngZone: NgZone,
              // private router: Router,
              // private activatedRoute: ActivatedRoute
              ) {
  }

  ngOnInit() {
    this.router.events.subscribe(route => {
      if (route instanceof NavigationEnd && route.urlAfterRedirects == '/regions/add') {
        this.checkCurrentLang();
      }
    });
    // Fetch Form Data
    this.addRegionForm = new FormGroup({
      name: new FormControl(''),
      description: new FormControl(''),
      location: new FormControl(''),
      placeId: new FormControl('', Validators.required),
      path: new FormControl(''),
    });

    this.checkLangChange();    
    this.getGoogleMapToken();
  }

  // Get Google Map Token
  getGoogleMapToken() {
    this.regionService.getGoogleMapToken().subscribe(token => this.googleMapToken = token.Data);
  }

  // Region Search Depending On The Place Name 
  searchLocation(event) {    
    if (this.googleMapToken) {
      this.showSearchResult = true;
      const value = of((event.target.value).trim());
      this.regionService.searchLocationAutoComplete(value, this.googleMapToken).subscribe(
        data => {
          if (data) {
            this.googleLocationsNameList = data.predictions;
          }
        });    
      if (event.target.value == '') {
        this.showSearchResult = false;
      }
    } else {
      this.toaster.error('Error Google Map Searching, Please Try Later');
    }
  }

  // Fill Form Inputs With Google Search Result
  getLocationInfo(location: GoogleMap) {
    const description = this.addRegionForm.get('description').value;
    if (location) {
      this.showSearchResult = false;
      this.addRegionForm = new FormGroup({
        name: new FormControl(location?.description),
        description: new FormControl(description),  
        location: new FormControl(location?.structured_formatting?.main_text_matched_substrings?.length),
        placeId: new FormControl(location?.place_id),
        path: new FormControl(''),  
      });
    }
  }

  updateName(imageInput: any) {
    const file: File = imageInput.files[0];
    this.uploadButtonValue = 'Upload';
    this.imageName = file.name;
    this.fileSelected = true;
  }

  processFile(imageInput: any) {
    this.fileSelected = false;
    this.imageUploaded = true;
    this.uploadButtonValue = 'Uploading...';
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
          this.submitButtonValue = 'new-region';
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

  checkCurrentLang() {
    let timer = 0;
    const runTwoTime = setInterval(() => {
      timer++;
      if (this.translate.currentLang == 'ar') {
        this.render.removeClass(this.document.querySelector('.input-group-custom'), 'input-group');
        this.render.addClass(this.document.querySelector('.input-group-custom'), 'input-group-ar');
      } else {
        this.render.addClass(this.document.querySelector('.input-group-custom'), 'input-group');
        this.render.removeClass(this.document.querySelector('.input-group-custom'), 'input-group-ar');
      }
      if (timer == 2) { clearInterval(runTwoTime); }
    }, 200);
    
  }

  checkLangChange() {    
    this.translate.onLangChange.subscribe(lang => {
      if (lang?.lang == 'ar') {
        this.render.removeClass(this.document.querySelector('.input-group-custom'), 'input-group');
        this.render.addClass(this.document.querySelector('.input-group-custom'), 'input-group-ar');
      } else {
        this.render.addClass(this.document.querySelector('.input-group-custom'), 'input-group');
        this.render.removeClass(this.document.querySelector('.input-group-custom'), 'input-group-ar');
      }
    });
  }

  onSubmit() {
    if (!this.addRegionForm.valid) {
      this.toaster.error('Error : Form Not Valid');
      this.isSubmited = false;
      return false;
    }
    // Fetch All Form Data On Json Type
    const formObject = this.addRegionForm.getRawValue();  
    formObject.path = this.imageUrl;
    console.log(formObject);
    this.store.dispatch(addRegion({region: formObject}));    
  }

}
