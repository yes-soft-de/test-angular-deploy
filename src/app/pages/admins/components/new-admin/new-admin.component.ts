import {Component, ElementRef, HostBinding, HostListener, Inject, OnInit, Renderer2, ViewChild} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Store} from '@ngrx/store';
import {AdminState} from '../../store/admin.reducer';
import {ToastrService} from 'ngx-toastr';
import {addAdmin} from '../../store/admin.actions';
import {ImageSnippet} from '../../../../@theme/model/image-snippet';
import {AdminsService} from '../../services/admins.service';
import {TranslateService} from '@ngx-translate/core';
import {DOCUMENT} from '@angular/common';

@Component({
  selector: 'app-new-admin',
  templateUrl: './new-admin.component.html',
  styleUrls: ['./new-admin.component.scss']
})
export class NewAdminComponent implements OnInit {
  @ViewChild('passwordField') passwordField: ElementRef;
  addAdminForm: FormGroup;
  uploadButtonValue = 'upload';
  imageName = 'select-image';
  fileSelected = false;
  imageUrl: string;
  imagePathReady = false;
  submitButtonValue = 'waiting-uploading-image';
  selectedFile: ImageSnippet;

  constructor(private store: Store<AdminState>,
              private adminService: AdminsService,
              public translate: TranslateService,
              private toaster: ToastrService,
              private render: Renderer2,
              @Inject(DOCUMENT) private document: Document) { }

  ngOnInit(): void {
    this.addAdminForm = new FormGroup({
      name: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      userID: new FormControl(''),
      image: new FormControl('')
    });
    // Change eyeIcon position in rtl
    this.checkLangChange();
  }

  showPassword() {
    this.passwordField.nativeElement.setAttribute('type', 'text');
  }

  hidePassword() {
    this.passwordField.nativeElement.setAttribute('type', 'password');
  }


  updateName(imageInput: any) {
    const file: File = imageInput.files[0];
    this.uploadButtonValue = 'upload';
    this.imageName = file.name;
    this.fileSelected = true;
  }

  processFile(imageInput: any) {
    this.fileSelected = false;
    this.uploadButtonValue = 'uploading...';
    console.log('Processing File');
    const file: File = imageInput.files[0];
    const reader = new FileReader();

    reader.addEventListener('load', (event: any) => {
      this.selectedFile = new ImageSnippet(event.target.result, file);
      this.adminService.uploadImage(this.selectedFile.file).subscribe(
        (res) => {
          console.log(res);
          this.imageUrl = res;
          this.uploadButtonValue = 'uploaded';
          this.imagePathReady = true;
          this.submitButtonValue = 'new-admin';
        },
        (err) => {
          this.uploadButtonValue = 'upload';
          this.fileSelected = true;
          this.toaster.error('Network Error, Please Try After a Few Seconds');
          console.log(err);
        });
    });
    reader.readAsDataURL(file);
  }

  onSubmit() {
    if (!this.addAdminForm.valid) {
      this.toaster.error('Form Not Valid !');
      return;
    }
    const formObject = this.addAdminForm.getRawValue();
    formObject.userID = formObject.email;
    formObject.image = this.imageUrl;
    console.log(formObject);
    this.store.dispatch(addAdmin({admin: formObject}));
  }

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
}
