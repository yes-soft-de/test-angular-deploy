function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["regions-regions-module"], {
  /***/
  "./src/app/pages/regions/components/add-region/add-region.component.ts":
  /*!*****************************************************************************!*\
    !*** ./src/app/pages/regions/components/add-region/add-region.component.ts ***!
    \*****************************************************************************/

  /*! exports provided: AddRegionComponent */

  /***/
  function srcAppPagesRegionsComponentsAddRegionAddRegionComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddRegionComponent", function () {
      return AddRegionComponent;
    });
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var src_app_theme_model_image_snippet__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/@theme/model/image-snippet */
    "./src/app/@theme/model/image-snippet.ts");
    /* harmony import */


    var _store_region_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../store/region.actions */
    "./src/app/pages/regions/store/region.actions.ts");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
    /* harmony import */


    var _services_regions_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../services/regions.service */
    "./src/app/pages/regions/services/regions.service.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");

    var _c0 = ["search"];

    function AddRegionComponent_div_18_ul_1_li_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AddRegionComponent_div_18_ul_1_li_1_Template_li_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r9);

          var location_r7 = ctx.$implicit;

          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);

          return ctx_r8.getLocationInfo(location_r7);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var location_r7 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](location_r7 == null ? null : location_r7.description);
      }
    }

    function AddRegionComponent_div_18_ul_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ul", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AddRegionComponent_div_18_ul_1_li_1_Template, 2, 1, "li", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r4.googleLocationsNameList);
      }
    }

    function AddRegionComponent_div_18_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function AddRegionComponent_div_18_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AddRegionComponent_div_18_ul_1_Template, 2, 1, "ul", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, AddRegionComponent_div_18_div_2_Template, 5, 0, "div", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.googleLocationsNameList);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r0.googleLocationsNameList);
      }
    }

    function AddRegionComponent_span_19_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "name-field-required"));
      }
    }

    function AddRegionComponent_span_27_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "descriptioon-field-required"));
      }
    }

    var _c1 = function _c1(a0) {
      return {
        "is-invalid": a0
      };
    };

    var AddRegionComponent = /*#__PURE__*/function () {
      function AddRegionComponent(store, toaster, regionService, translate, router, render, document // private mapsAPILoader: MapsAPILoader,
      // private ngZone: NgZone,
      // private router: Router,
      // private activatedRoute: ActivatedRoute
      ) {
        _classCallCheck(this, AddRegionComponent);

        this.store = store;
        this.toaster = toaster;
        this.regionService = regionService;
        this.translate = translate;
        this.router = router;
        this.render = render;
        this.document = document;
        this.title = 'AGM project';
        this.isSubmited = false;
        this.uploadButtonValue = 'upload';
        this.coverUploadButtonValue = 'upload';
        this.imageName = 'select-image';
        this.fileSelected = false;
        this.fileUploaded = false;
        this.imagePathReady = false;
        this.imageUploaded = false;
        this.submitButtonValue = 'Waiting Uploading Image';
        this.showSearchResult = false;
      }

      _createClass(AddRegionComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.router.events.subscribe(function (route) {
            if (route instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivationEnd"]) {
              _this.checkCurrentLang();
            }
          }); // Fetch Form Data

          this.addRegionForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            location: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            placeId: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            path: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('')
          });
          this.checkLangChange();
          /*
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
          */

          this.getGoogleMapToken();
        } // Get Google Map Token

      }, {
        key: "getGoogleMapToken",
        value: function getGoogleMapToken() {
          var _this2 = this;

          this.regionService.getGoogleMapToken().subscribe(function (token) {
            return _this2.googleMapToken = token.Data;
          });
        } // Region Search Depending On The Place Name 

      }, {
        key: "searchLocation",
        value: function searchLocation(event) {
          var _this3 = this;

          if (this.googleMapToken) {
            this.showSearchResult = true;
            var value = Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(event.target.value.trim());
            this.regionService.searchLocationAutoComplete(value, this.googleMapToken).subscribe(function (data) {
              if (data) {
                _this3.googleLocationsNameList = data.predictions;
                console.log('search data : ', _this3.googleLocationsNameList);
              }
            });
          } else {
            this.toaster.error('Error Google Map Searching, Please Try Later');
          }
        } // Fill Form Inputs With Google Search Result

      }, {
        key: "getLocationInfo",
        value: function getLocationInfo(location) {
          var _a, _b;

          var description = this.addRegionForm.get('description').value;

          if (location) {
            this.showSearchResult = false;
            this.addRegionForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
              name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](location === null || location === void 0 ? void 0 : location.description),
              description: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](description),
              location: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]((_b = (_a = location === null || location === void 0 ? void 0 : location.structured_formatting) === null || _a === void 0 ? void 0 : _a.main_text_matched_substrings) === null || _b === void 0 ? void 0 : _b.length),
              placeId: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](location === null || location === void 0 ? void 0 : location.place_id),
              path: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('')
            });
          }
        }
      }, {
        key: "updateName",
        value: function updateName(imageInput) {
          var file = imageInput.files[0];
          this.uploadButtonValue = 'Upload';
          this.imageName = file.name;
          this.fileSelected = true;
        }
      }, {
        key: "processFile",
        value: function processFile(imageInput) {
          var _this4 = this;

          this.fileSelected = false;
          this.imageUploaded = true;
          this.uploadButtonValue = 'Uploading...';
          console.log('Processing File');
          var file = imageInput.files[0];
          var reader = new FileReader();
          reader.addEventListener('load', function (event) {
            _this4.selectedFile = new src_app_theme_model_image_snippet__WEBPACK_IMPORTED_MODULE_5__["ImageSnippet"](event.target.result, file);

            _this4.regionService.uploadImage(_this4.selectedFile.file).subscribe(function (res) {
              console.log(res);
              _this4.imageUrl = res;
              _this4.uploadButtonValue = 'uploaded';
              _this4.imagePathReady = true;
              _this4.imageUploaded = false;
              _this4.submitButtonValue = 'new-region';
            }, function (err) {
              _this4.uploadButtonValue = 'upload';
              _this4.fileSelected = true;
              _this4.imageUploaded = false;

              _this4.toaster.error('Network Error, Please Try After a Few Seconds');

              console.log(err);
            });
          });
          reader.readAsDataURL(file);
        }
      }, {
        key: "checkCurrentLang",
        value: function checkCurrentLang() {
          if (this.translate.currentLang && this.translate.currentLang == 'ar') {
            console.log('current lang : ', this.translate.currentLang);
            this.render.removeClass(this.document.querySelector('.input-group-custom'), 'input-group');
            this.render.addClass(this.document.querySelector('.input-group-custom'), 'input-group-ar');
          } else {
            this.render.addClass(this.document.querySelector('.input-group-custom'), 'input-group');
            this.render.removeClass(this.document.querySelector('.input-group-custom'), 'input-group-ar');
          }
        }
      }, {
        key: "checkLangChange",
        value: function checkLangChange() {
          var _this5 = this;

          this.translate.onLangChange.subscribe(function (lang) {
            console.log('lang change to : ', lang);

            if ((lang === null || lang === void 0 ? void 0 : lang.lang) && (lang === null || lang === void 0 ? void 0 : lang.lang) == 'ar') {
              console.log('lang : ', lang === null || lang === void 0 ? void 0 : lang.lang);

              _this5.render.removeClass(_this5.document.querySelector('.input-group-custom'), 'input-group');

              _this5.render.addClass(_this5.document.querySelector('.input-group-custom'), 'input-group-ar');
            } else {
              _this5.render.addClass(_this5.document.querySelector('.input-group-custom'), 'input-group');

              _this5.render.removeClass(_this5.document.querySelector('.input-group-custom'), 'input-group-ar');
            }
          });
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          if (!this.addRegionForm.valid) {
            this.toaster.error('Error : Form Not Valid');
            this.isSubmited = false;
            return false;
          } // Fetch All Form Data On Json Type


          var formObject = this.addRegionForm.getRawValue();
          formObject.path = this.imageUrl;
          console.log(formObject);
          this.store.dispatch(Object(_store_region_actions__WEBPACK_IMPORTED_MODULE_6__["addRegion"])({
            region: formObject
          }));
        }
      }]);

      return AddRegionComponent;
    }();

    AddRegionComponent.ɵfac = function AddRegionComponent_Factory(t) {
      return new (t || AddRegionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_7__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_8__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_regions_service__WEBPACK_IMPORTED_MODULE_9__["RegionsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]));
    };

    AddRegionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: AddRegionComponent,
      selectors: [["app-add-region"]],
      viewQuery: function AddRegionComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.searchElementRef = _t.first);
        }
      },
      decls: 47,
      vars: 42,
      consts: [[1, "container-fluid"], [1, "content-header"], [1, "text-center", "my-5"], [1, "card", "card-info"], [1, "card-header", "bg-sidebar-item-button", "text-white"], [1, "card-title", "mb-0"], [3, "formGroup", "ngSubmit"], [1, "card-body"], [1, "form-group"], ["for", "inputNameSuccess", 1, "col-form-label"], ["type", "text", "name", "name", "formControlName", "name", "id", "inputNameSuccess", 1, "form-control", 3, "ngClass", "placeholder", "keydown"], ["class", "location-search-result px-3 py-2", 4, "ngIf"], ["class", "invalid-feedback", 4, "ngIf"], ["for", "exampleInputdescription1"], ["name", "description", "formControlName", "description", "id", "exampleInputdescription1", 1, "form-control", 3, "ngClass", "placeholder"], ["for", "exampleInputupload"], [1, "input-group", "input-group-custom"], [1, "custom-file"], ["type", "file", "accept", "image/*", "id", "file-input", 1, "custom-file-input", 3, "change"], ["imageInput", ""], ["for", "file-input", 1, "custom-file-label"], [1, "input-group-append"], ["type", "button", 1, "btn", "btn-success", 3, "disabled", "click"], [1, "card-footer"], ["type", "submit", 1, "btn", "bg-sidebar-item-button", "text-white", 3, "disabled"], [1, "location-search-result", "px-3", "py-2"], ["class", "list-unstyled mb-0", 4, "ngIf"], ["class", "lds-ring", 4, "ngIf"], [1, "list-unstyled", "mb-0"], ["class", "pb-1", 3, "click", 4, "ngFor", "ngForOf"], [1, "pb-1", 3, "click"], [1, "lds-ring"], [1, "invalid-feedback"]],
      template: function AddRegionComponent_Template(rf, ctx) {
        if (rf & 1) {
          var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h1", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "h3", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](9, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "form", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function AddRegionComponent_Template_form_ngSubmit_10_listener() {
            return ctx.onSubmit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "label", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](15, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "input", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keydown", function AddRegionComponent_Template_input_keydown_16_listener($event) {
            return ctx.searchLocation($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](17, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, AddRegionComponent_div_18_Template, 3, 2, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, AddRegionComponent_span_19_Template, 3, 3, "span", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "label", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](23, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "textarea", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](25, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "                    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](27, AddRegionComponent_span_27_Template, 3, 3, "span", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "label", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](31, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "input", 18, 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function AddRegionComponent_Template_input_change_34_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10);

            var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](35);

            return ctx.updateName(_r3);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "label", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](38, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "button", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AddRegionComponent_Template_button_click_40_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10);

            var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](35);

            return ctx.processFile(_r3);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](42, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "button", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](46, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](4, 18, "create-region-page"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](9, 20, "new-region"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.addRegionForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](15, 22, "name"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](17, 24, "name-type-placeholder"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](38, _c1, ctx.addRegionForm.get("name").errors && (ctx.addRegionForm.get("name").touched || ctx.addRegionForm.get("name").dirty)));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showSearchResult);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.addRegionForm.get("name").errors == null ? null : ctx.addRegionForm.get("name").errors.required);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](23, 26, "description"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](25, 28, "description-type-placeholder"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](40, _c1, ctx.addRegionForm.get("description").errors && (ctx.addRegionForm.get("description").touched || ctx.addRegionForm.get("description").dirty)));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.addRegionForm.get("description").errors == null ? null : ctx.addRegionForm.get("description").errors.required);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](31, 30, "upload"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](38, 32, ctx.imageName));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx.fileSelected);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](42, 34, ctx.uploadButtonValue), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.addRegionForm.invalid || ctx.imageUploaded);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](46, 36, "create"));
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["NgForOf"]],
      pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslatePipe"]],
      styles: [".location-search-result[_ngcontent-%COMP%] {\n  border: 1px solid #ddd;\n  border-radius: 5px;\n}\n.location-search-result[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.location-search-result[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover {\n  transition: all 0.5s ease;\n  background: rgba(54, 72, 94, 0.92);\n  color: #fff;\n  border-radius: 5px;\n  padding-left: 10px;\n}\n.location-search-result[_ngcontent-%COMP%]   .lds-ring[_ngcontent-%COMP%] {\n  display: block;\n  position: inherit;\n  width: 64px;\n  height: 64px;\n  margin-left: auto;\n  margin-right: auto;\n}\n.card-footer[_ngcontent-%COMP%]   .btn.bg-sidebar-item-button[_ngcontent-%COMP%]:hover {\n  background: rgba(54, 72, 94, 0.8);\n}\n.input-group-ar[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  flex-wrap: wrap;\n  align-items: stretch;\n  width: 100%;\n}\n.input-group-ar[_ngcontent-%COMP%]    > .custom-file[_ngcontent-%COMP%] {\n  position: relative;\n  flex: 1 1 auto;\n  width: 1%;\n  margin-bottom: 0;\n}\n.input-group-ar[_ngcontent-%COMP%]    > .custom-file[_ngcontent-%COMP%]   .custom-file-input[_ngcontent-%COMP%] {\n  width: 100%;\n  min-width: 14rem;\n  max-width: 100%;\n  height: calc(2.25rem + 2px);\n  margin: 0;\n  opacity: 0;\n}\n.input-group-ar[_ngcontent-%COMP%]    > .custom-file[_ngcontent-%COMP%]   .custom-file-label[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  right: 0;\n  left: 0;\n  z-index: 1;\n  height: calc(2.25rem + 2px);\n  padding: 0.375rem 0.75rem;\n  line-height: 1.5;\n  color: #495057;\n  background-color: #fff;\n  border: 1px solid #ced4da;\n  border-radius: 0.25rem;\n}\n.input-group-ar[_ngcontent-%COMP%]    > .custom-file[_ngcontent-%COMP%]   .custom-file-label[_ngcontent-%COMP%]:after {\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  z-index: 3;\n  display: block;\n  height: calc(calc(2.25rem + 2px) - 1px * 2);\n  padding: 0.375rem 0.75rem;\n  line-height: 1.5;\n  color: #495057;\n  content: \"Browse\";\n  background-color: #e9ecef;\n  border-left: 1px solid #ced4da;\n  border-radius: 0.25rem 0 0 0.25rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcmVnaW9ucy9jb21wb25lbnRzL2FkZC1yZWdpb24vRDpcXFNlcnZlcnNcXGRhc2hib2FyZHNcXHRvdXJpc3QtdGVzdC1kZXBsb3kvc3JjXFxhcHBcXHBhZ2VzXFxyZWdpb25zXFxjb21wb25lbnRzXFxhZGQtcmVnaW9uXFxhZGQtcmVnaW9uLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlcy9yZWdpb25zL2NvbXBvbmVudHMvYWRkLXJlZ2lvbi9hZGQtcmVnaW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksc0JBQUE7RUFDQSxrQkFBQTtBQ0RKO0FER1E7RUFDSSxlQUFBO0FDRFo7QURFWTtFQUlJLHlCQUFBO0VBRUEsa0NBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQ0RoQjtBREtJO0VBQ0ksY0FBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FDSFI7QURRUTtFQUFVLGlDQUFBO0FDSmxCO0FEUUU7RUFDRSxrQkFBQTtFQUdBLGFBQUE7RUFFQSxlQUFBO0VBR0Esb0JBQUE7RUFDQSxXQUFBO0FDTEo7QURNSTtFQUNFLGtCQUFBO0VBR0EsY0FBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtBQ0pOO0FES007RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsMkJBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBQ0hSO0FES007RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxRQUFBO0VBQ0EsT0FBQTtFQUNBLFVBQUE7RUFDQSwyQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0Esc0JBQUE7RUFDQSx5QkFBQTtFQUNBLHNCQUFBO0FDSFI7QURJUTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGNBQUE7RUFDQSwyQ0FBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtFQUNBLDhCQUFBO0VBQ0Esa0NBQUE7QUNGViIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3JlZ2lvbnMvY29tcG9uZW50cy9hZGQtcmVnaW9uL2FkZC1yZWdpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi8uLi8uLi8uLi8uLi92YXJpYWJsZSc7XHJcblxyXG4ubG9jYXRpb24tc2VhcmNoLXJlc3VsdCB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgdWwge1xyXG4gICAgICAgIGxpIHtcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIC41cyBlYXNlO1xyXG4gICAgICAgICAgICAgICAgLW1vei10cmFuc2l0aW9uOiBhbGwgLjVzIGVhc2U7XHJcbiAgICAgICAgICAgICAgICAtby10cmFuc2l0aW9uOiBhbGwgLjVzIGVhc2U7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgLjVzIGVhc2U7XHJcbiAgICAgICAgICAgICAgICAvLyBiYWNrZ3JvdW5kOiAkbGlnaHRfYmx1ZTtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoNTQsIDcyLCA5NCwgMC45Mik7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMTBweDtcclxuICAgICAgICAgICAgfSAgICBcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAubGRzLXJpbmcge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIHBvc2l0aW9uOiBpbmhlcml0O1xyXG4gICAgICAgIHdpZHRoOiA2NHB4O1xyXG4gICAgICAgIGhlaWdodDogNjRweDtcclxuICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICB9XHJcbn1cclxuLmNhcmQtZm9vdGVyIHtcclxuICAgIC5idG4uYmctc2lkZWJhci1pdGVtLWJ1dHRvbiB7XHJcbiAgICAgICAgJjpob3ZlciB7IGJhY2tncm91bmQ6IHJnYmEoNTQsIDcyLCA5NCwgMC44KTsgfVxyXG4gICAgfVxyXG59XHJcblxyXG4gIC5pbnB1dC1ncm91cC1hciB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIC1tcy1mbGV4LXdyYXA6IHdyYXA7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICAtd2Via2l0LWJveC1hbGlnbjogc3RyZXRjaDtcclxuICAgIC1tcy1mbGV4LWFsaWduOiBzdHJldGNoO1xyXG4gICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgICYgPiAuY3VzdG9tLWZpbGUge1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIC13ZWJraXQtYm94LWZsZXg6IDE7XHJcbiAgICAgIC1tcy1mbGV4OiAxIDEgYXV0bztcclxuICAgICAgZmxleDogMSAxIGF1dG87XHJcbiAgICAgIHdpZHRoOiAxJTtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgICAgLmN1c3RvbS1maWxlLWlucHV0IHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBtaW4td2lkdGg6IDE0cmVtO1xyXG4gICAgICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IGNhbGMoMi4yNXJlbSArIDJweCk7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgIH1cclxuICAgICAgLmN1c3RvbS1maWxlLWxhYmVsIHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgei1pbmRleDogMTtcclxuICAgICAgICBoZWlnaHQ6IGNhbGMoMi4yNXJlbSArIDJweCk7XHJcbiAgICAgICAgcGFkZGluZzogLjM3NXJlbSAuNzVyZW07XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuNTtcclxuICAgICAgICBjb2xvcjogIzQ5NTA1NztcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjZWQ0ZGE7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogLjI1cmVtO1xyXG4gICAgICAgICY6YWZ0ZXIge1xyXG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICAgIHotaW5kZXg6IDM7XHJcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgIGhlaWdodDogY2FsYyhjYWxjKDIuMjVyZW0gKyAycHgpIC0gMXB4ICogMik7XHJcbiAgICAgICAgICBwYWRkaW5nOiAwLjM3NXJlbSAwLjc1cmVtO1xyXG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNTtcclxuICAgICAgICAgIGNvbG9yOiAjNDk1MDU3O1xyXG4gICAgICAgICAgY29udGVudDogXCJCcm93c2VcIjtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlOWVjZWY7XHJcbiAgICAgICAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNjZWQ0ZGE7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAwLjI1cmVtIDAgMCAwLjI1cmVtO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICAiLCIubG9jYXRpb24tc2VhcmNoLXJlc3VsdCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cbi5sb2NhdGlvbi1zZWFyY2gtcmVzdWx0IHVsIGxpIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmxvY2F0aW9uLXNlYXJjaC1yZXN1bHQgdWwgbGk6aG92ZXIge1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2U7XG4gIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZTtcbiAgLW8tdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZTtcbiAgYmFja2dyb3VuZDogcmdiYSg1NCwgNzIsIDk0LCAwLjkyKTtcbiAgY29sb3I6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xufVxuLmxvY2F0aW9uLXNlYXJjaC1yZXN1bHQgLmxkcy1yaW5nIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiBpbmhlcml0O1xuICB3aWR0aDogNjRweDtcbiAgaGVpZ2h0OiA2NHB4O1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xufVxuXG4uY2FyZC1mb290ZXIgLmJ0bi5iZy1zaWRlYmFyLWl0ZW0tYnV0dG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogcmdiYSg1NCwgNzIsIDk0LCAwLjgpO1xufVxuXG4uaW5wdXQtZ3JvdXAtYXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgZGlzcGxheTogZmxleDtcbiAgLW1zLWZsZXgtd3JhcDogd3JhcDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICAtd2Via2l0LWJveC1hbGlnbjogc3RyZXRjaDtcbiAgLW1zLWZsZXgtYWxpZ246IHN0cmV0Y2g7XG4gIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xuICB3aWR0aDogMTAwJTtcbn1cbi5pbnB1dC1ncm91cC1hciA+IC5jdXN0b20tZmlsZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgLXdlYmtpdC1ib3gtZmxleDogMTtcbiAgLW1zLWZsZXg6IDEgMSBhdXRvO1xuICBmbGV4OiAxIDEgYXV0bztcbiAgd2lkdGg6IDElO1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuLmlucHV0LWdyb3VwLWFyID4gLmN1c3RvbS1maWxlIC5jdXN0b20tZmlsZS1pbnB1dCB7XG4gIHdpZHRoOiAxMDAlO1xuICBtaW4td2lkdGg6IDE0cmVtO1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogY2FsYygyLjI1cmVtICsgMnB4KTtcbiAgbWFyZ2luOiAwO1xuICBvcGFjaXR5OiAwO1xufVxuLmlucHV0LWdyb3VwLWFyID4gLmN1c3RvbS1maWxlIC5jdXN0b20tZmlsZS1sYWJlbCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICByaWdodDogMDtcbiAgbGVmdDogMDtcbiAgei1pbmRleDogMTtcbiAgaGVpZ2h0OiBjYWxjKDIuMjVyZW0gKyAycHgpO1xuICBwYWRkaW5nOiAwLjM3NXJlbSAwLjc1cmVtO1xuICBsaW5lLWhlaWdodDogMS41O1xuICBjb2xvcjogIzQ5NTA1NztcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NlZDRkYTtcbiAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcbn1cbi5pbnB1dC1ncm91cC1hciA+IC5jdXN0b20tZmlsZSAuY3VzdG9tLWZpbGUtbGFiZWw6YWZ0ZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgYm90dG9tOiAwO1xuICB6LWluZGV4OiAzO1xuICBkaXNwbGF5OiBibG9jaztcbiAgaGVpZ2h0OiBjYWxjKGNhbGMoMi4yNXJlbSArIDJweCkgLSAxcHggKiAyKTtcbiAgcGFkZGluZzogMC4zNzVyZW0gMC43NXJlbTtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgY29sb3I6ICM0OTUwNTc7XG4gIGNvbnRlbnQ6IFwiQnJvd3NlXCI7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlOWVjZWY7XG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI2NlZDRkYTtcbiAgYm9yZGVyLXJhZGl1czogMC4yNXJlbSAwIDAgMC4yNXJlbTtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AddRegionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-add-region',
          templateUrl: './add-region.component.html',
          styleUrls: ['./add-region.component.scss']
        }]
      }], function () {
        return [{
          type: _ngrx_store__WEBPACK_IMPORTED_MODULE_7__["Store"]
        }, {
          type: ngx_toastr__WEBPACK_IMPORTED_MODULE_8__["ToastrService"]
        }, {
          type: _services_regions_service__WEBPACK_IMPORTED_MODULE_9__["RegionsService"]
        }, {
          type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslateService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]
        }, {
          type: Document,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]]
          }]
        }];
      }, {
        searchElementRef: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['search']
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/pages/regions/components/all-regions/all-regions.component.ts":
  /*!*******************************************************************************!*\
    !*** ./src/app/pages/regions/components/all-regions/all-regions.component.ts ***!
    \*******************************************************************************/

  /*! exports provided: AllRegionsComponent */

  /***/
  function srcAppPagesRegionsComponentsAllRegionsAllRegionsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AllRegionsComponent", function () {
      return AllRegionsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _store_region_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../store/region.actions */
    "./src/app/pages/regions/store/region.actions.ts");
    /* harmony import */


    var _store_region_selector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../store/region.selector */
    "./src/app/pages/regions/store/region.selector.ts");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var ngx_pagination__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ngx-pagination */
    "./node_modules/ngx-pagination/__ivy_ngcc__/dist/ngx-pagination.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");

    function AllRegionsComponent_div_0_tr_31_Template(rf, ctx) {
      if (rf & 1) {
        var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AllRegionsComponent_div_0_tr_31_Template_a_click_15_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

          var region_r3 = ctx.$implicit;

          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r4["delete"](region_r3 == null ? null : region_r3.id);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](17, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var region_r3 = ctx.$implicit;

        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", region_r3 == null ? null : region_r3.path[0] == null ? null : region_r3.path[0].path, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("alt", "", region_r3.name, " Image");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](region_r3.name ? region_r3.name : "-");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](region_r3.description ? region_r3.description : "-");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](region_r3.commentNumber ? region_r3.commentNumber : "-");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](region_r3.ratingAverage ? region_r3.ratingAverage : "-");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/regions/", region_r3 == null ? null : region_r3.id, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](14, 12, "update"), " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("btn btn-danger confirm btn-sm mr-1 mb-1 ", ctx_r2.isDeleted ? "disabled" : "", "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](17, 14, "delete"), " ");
      }
    }

    function AllRegionsComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AllRegionsComponent_div_0_Template_input_ngModelChange_7_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r6.name = $event;
        })("keyup", function AllRegionsComponent_div_0_Template_input_keyup_7_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r8.applyFilter();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "table", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "tr", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](15, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](18, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](21, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](24, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](27, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](30, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, AllRegionsComponent_div_0_tr_31_Template, 18, 16, "tr", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](32, "paginate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "pagination-controls", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("pageChange", function AllRegionsComponent_div_0_Template_pagination_controls_pageChange_33_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r9.pageChanged($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](34, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](35, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](36, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 14, "manage-regions-page"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 16, "region-search-input"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 18, "region-search-input"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](15, 20, "image"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](18, 22, "name"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](21, 24, "description"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](24, 26, "comment-number"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](27, 28, "rating-average"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](30, 30, "control"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](32, 32, ctx_r0.regionsList, ctx_r0.config));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("previousLabel", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](34, 35, "prev"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("nextLabel", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](35, 37, "next"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("screenReaderCurrentLabel", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](36, 39, "you-are-on-page"));
      }
    }

    function AllRegionsComponent_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var AllRegionsComponent = /*#__PURE__*/function () {
      // googleLocation
      function AllRegionsComponent(store) {
        _classCallCheck(this, AllRegionsComponent);

        this.store = store;
        this.regionsList = [];
      }

      _createClass(AllRegionsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.store.dispatch(_store_region_actions__WEBPACK_IMPORTED_MODULE_1__["loadRegions"]());
          this.getAllRegions();
        }
      }, {
        key: "getAllRegions",
        value: function getAllRegions() {
          var _this6 = this;

          this.regionsSubscription = this.store.select(_store_region_selector__WEBPACK_IMPORTED_MODULE_2__["getAllRegionsSelector"]).subscribe(function (data) {
            console.log(data);
            _this6.regions = data;
            _this6.regionsList = data;
          });
          this.config = {
            itemsPerPage: 5,
            currentPage: 1,
            totalItems: this.regionsList.length
          };
        } // Fetch The Page Number On Page Change

      }, {
        key: "pageChanged",
        value: function pageChanged(event) {
          this.config.currentPage = event;
        }
      }, {
        key: "delete",
        value: function _delete(regionId) {
          var _this7 = this;

          if (confirm('Are You Sure You Want To Delete This Region')) {
            this.isDeleted = true;
            this.store.dispatch(_store_region_actions__WEBPACK_IMPORTED_MODULE_1__["deleteRegion"]({
              id: regionId
            })); // this.toaster.success('Region Successfully Deleted');

            setTimeout(function () {
              _this7.isDeleted = false;
            }, 1000);
          } else {
            return false;
          }
        }
      }, {
        key: "applyFilter",
        value: function applyFilter() {
          var _this8 = this;

          // if the search input value is empty
          if (!this.name) {
            this.regionsList = _toConsumableArray(this.regions);
          } else {
            this.regionsList = [];
            this.regionsList = this.regions.filter(function (res) {
              if (res.name) {
                var name = res.name.toLocaleLowerCase().match(_this8.name.toLocaleLowerCase());

                if (name) {
                  // display the Name Column
                  return name;
                }
              }
            });
          }
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.regionsSubscription.unsubscribe();
        }
      }]);

      return AllRegionsComponent;
    }();

    AllRegionsComponent.ɵfac = function AllRegionsComponent_Factory(t) {
      return new (t || AllRegionsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"]));
    };

    AllRegionsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AllRegionsComponent,
      selectors: [["app-all-regions"]],
      decls: 2,
      vars: 2,
      consts: [[4, "ngIf"], [1, "text-center", "details-title", "my-4"], [1, "row"], [1, "col-10", "col-sm-8", "col-md-6", "col-xl-4"], [1, "form-group", "mb-4"], ["id", "exampleFormControlInput2", "type", "text", 1, "form-control", "form-control-underlined", "border-primary", "search-input", 3, "ngModel", "placeholder", "title", "ngModelChange", "keyup"], [1, "table-responsive", "text-center"], [1, "table", "table-bordered", "main-table"], [1, "bg-dark", "text-white"], [4, "ngFor", "ngForOf"], ["autoHide", "true", "maxSize", "5", "responsive", "true", "screenReaderPaginationLabel", "Pagination", "screenReaderPageLabel", "page", 1, "my-pagination", 3, "previousLabel", "nextLabel", "screenReaderCurrentLabel", "pageChange"], [1, "img-thumbnail", "img-custom", 3, "src", "alt"], [1, "td-custom"], [1, "btn", "btn-success", "btn-sm", "mr-1", "mb-1", 3, "routerLink"], [3, "click"], [1, "lds-ring"]],
      template: function AllRegionsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, AllRegionsComponent_div_0_Template, 37, 41, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AllRegionsComponent_div_1_Template, 6, 0, "div", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.regions.length != 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.regions.length == 0);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], ngx_pagination__WEBPACK_IMPORTED_MODULE_6__["PaginationControlsComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterLinkWithHref"]],
      pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslatePipe"], ngx_pagination__WEBPACK_IMPORTED_MODULE_6__["PaginatePipe"]],
      styles: ["agm-map[_ngcontent-%COMP%] {\n  height: 300px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcmVnaW9ucy9jb21wb25lbnRzL2FsbC1yZWdpb25zL0Q6XFxTZXJ2ZXJzXFxkYXNoYm9hcmRzXFx0b3VyaXN0LXRlc3QtZGVwbG95L3NyY1xcYXBwXFxwYWdlc1xccmVnaW9uc1xcY29tcG9uZW50c1xcYWxsLXJlZ2lvbnNcXGFsbC1yZWdpb25zLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlcy9yZWdpb25zL2NvbXBvbmVudHMvYWxsLXJlZ2lvbnMvYWxsLXJlZ2lvbnMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9yZWdpb25zL2NvbXBvbmVudHMvYWxsLXJlZ2lvbnMvYWxsLXJlZ2lvbnMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhZ20tbWFwIHtcclxuICBoZWlnaHQ6IDMwMHB4O1xyXG59XHJcbiIsImFnbS1tYXAge1xuICBoZWlnaHQ6IDMwMHB4O1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AllRegionsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-all-regions',
          templateUrl: './all-regions.component.html',
          styleUrls: ['./all-regions.component.scss']
        }]
      }], function () {
        return [{
          type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/regions/components/edit-region/edit-region.component.ts":
  /*!*******************************************************************************!*\
    !*** ./src/app/pages/regions/components/edit-region/edit-region.component.ts ***!
    \*******************************************************************************/

  /*! exports provided: EditRegionComponent */

  /***/
  function srcAppPagesRegionsComponentsEditRegionEditRegionComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EditRegionComponent", function () {
      return EditRegionComponent;
    });
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var src_app_theme_model_image_snippet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/@theme/model/image-snippet */
    "./src/app/@theme/model/image-snippet.ts");
    /* harmony import */


    var _store_region_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../store/region.actions */
    "./src/app/pages/regions/store/region.actions.ts");
    /* harmony import */


    var _store_region_selector__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../store/region.selector */
    "./src/app/pages/regions/store/region.selector.ts");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
    /* harmony import */


    var _services_regions_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../services/regions.service */
    "./src/app/pages/regions/services/regions.service.ts");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    function EditRegionComponent_div_18_ul_1_li_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EditRegionComponent_div_18_ul_1_li_1_Template_li_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10);

          var location_r8 = ctx.$implicit;

          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);

          return ctx_r9.getLocationInfo(location_r8);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var location_r8 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](location_r8 == null ? null : location_r8.description);
      }
    }

    function EditRegionComponent_div_18_ul_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ul", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, EditRegionComponent_div_18_ul_1_li_1_Template, 2, 1, "li", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r5.googleLocationsNameList);
      }
    }

    function EditRegionComponent_div_18_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function EditRegionComponent_div_18_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, EditRegionComponent_div_18_ul_1_Template, 2, 1, "ul", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, EditRegionComponent_div_18_div_2_Template, 5, 0, "div", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.googleLocationsNameList);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r0.googleLocationsNameList);
      }
    }

    function EditRegionComponent_span_19_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "name-field-required"));
      }
    }

    function EditRegionComponent_span_27_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "descriptioon-field-required"));
      }
    }

    function EditRegionComponent_span_28_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "description Must Be Greater Than 3");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    var _c0 = function _c0(a0) {
      return {
        "is-invalid": a0
      };
    };

    var EditRegionComponent = /*#__PURE__*/function () {
      function EditRegionComponent(store, regionService, toaster, translate, render, document, activatedRoute) {
        _classCallCheck(this, EditRegionComponent);

        this.store = store;
        this.regionService = regionService;
        this.toaster = toaster;
        this.translate = translate;
        this.render = render;
        this.document = document;
        this.activatedRoute = activatedRoute;
        this.isSubmited = false;
        this.uploadButtonValue = 'upload';
        this.coverUploadButtonValue = 'upload';
        this.imageName = 'select-image';
        this.fileSelected = false;
        this.fileUploaded = false;
        this.imagePathReady = false;
        this.imageUploaded = false;
        this.submitButtonValue = 'Waiting Uploading Image';
        this.showSearchResult = false;
      }

      _createClass(EditRegionComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this9 = this;

          this.activatedRoute.paramMap.subscribe(function (params) {
            var regionId = params.get('id');

            _this9.store.dispatch(Object(_store_region_actions__WEBPACK_IMPORTED_MODULE_5__["loadRegion"])({
              id: +regionId
            }));
          }); // Init Form Inputs

          this.editRegionForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            location: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            path: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            placeId: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('')
          });
          this.checkLangChange(); // Check CHange Languages

          this.getRegion(); // Region Details

          this.getGoogleMapToken(); // Google Map Token
        } // Get Google Map Token

      }, {
        key: "getGoogleMapToken",
        value: function getGoogleMapToken() {
          var _this10 = this;

          this.regionService.getGoogleMapToken().subscribe(function (token) {
            return _this10.googleMapToken = token.Data;
          });
        } // Get Region Details

      }, {
        key: "getRegion",
        value: function getRegion() {
          var _this11 = this;

          this.store.select(_store_region_selector__WEBPACK_IMPORTED_MODULE_6__["getRegionSelector"]).subscribe(function (data) {
            if (data) {
              _this11.regionData = data;
              console.log('data detail: ', data);

              _this11.fillForms(data);
            }
          });
        } // Fill Form Inputs With Region Data

      }, {
        key: "fillForms",
        value: function fillForms(data) {
          this.editRegionForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            id: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](data.id),
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](data.name),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](data.description),
            location: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](data.location),
            path: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](data.path),
            placeId: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](data.placeId)
          });
        } // Search Google Map Location

      }, {
        key: "searchLocation",
        value: function searchLocation(event) {
          var _this12 = this;

          this.showSearchResult = true;
          var value = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(event.target.value.trim());
          this.regionService.searchLocationAutoComplete(value, this.googleMapToken).subscribe(function (data) {
            if (data) {
              _this12.googleLocationsNameList = data.predictions;
              console.log('search data : ', _this12.googleLocationsNameList); // this.showSearchResult = false;
            }
          });
        } // Fill Form Inputs With New Google Map Locations

      }, {
        key: "getLocationInfo",
        value: function getLocationInfo(location) {
          var _a;

          var id = this.regionData.id;
          var description = this.editRegionForm.get('description').value;

          if (location) {
            this.showSearchResult = false;
            this.editRegionForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
              id: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](id),
              name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](location === null || location === void 0 ? void 0 : location.description),
              description: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](description),
              location: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]((_a = location === null || location === void 0 ? void 0 : location.structured_formatting) === null || _a === void 0 ? void 0 : _a.main_text_matched_substrings.length),
              placeId: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](location === null || location === void 0 ? void 0 : location.place_id),
              path: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('')
            });
          }
        } // Check Change Language To Style Upload Image Input With RTL And LTR

      }, {
        key: "checkLangChange",
        value: function checkLangChange() {
          var _this13 = this;

          this.translate.onLangChange.subscribe(function (lang) {
            console.log('lang change to : ', lang);

            if (lang.lang == 'ar') {
              console.log('lang : ', lang.lang);

              _this13.render.removeClass(_this13.document.querySelector('.input-group-custom'), 'input-group');

              _this13.render.addClass(_this13.document.querySelector('.input-group-custom'), 'input-group-ar');
            } else {
              _this13.render.addClass(_this13.document.querySelector('.input-group-custom'), 'input-group');

              _this13.render.removeClass(_this13.document.querySelector('.input-group-custom'), 'input-group-ar');
            }
          });
        }
      }, {
        key: "updateName",
        value: function updateName(imageInput) {
          var file = imageInput.files[0];
          this.uploadButtonValue = 'Upload';
          this.imageName = file.name;
          this.fileSelected = true;
        }
      }, {
        key: "processFile",
        value: function processFile(imageInput) {
          var _this14 = this;

          this.fileSelected = false;
          this.uploadButtonValue = 'Uploading...';
          this.imageUploaded = true;
          console.log('Processing File');
          var file = imageInput.files[0];
          var reader = new FileReader();
          reader.addEventListener('load', function (event) {
            _this14.selectedFile = new src_app_theme_model_image_snippet__WEBPACK_IMPORTED_MODULE_4__["ImageSnippet"](event.target.result, file);

            _this14.regionService.uploadImage(_this14.selectedFile.file).subscribe(function (res) {
              console.log(res);
              _this14.imageUrl = res;
              _this14.uploadButtonValue = 'uploaded';
              _this14.imagePathReady = true;
              _this14.imageUploaded = false;
              _this14.submitButtonValue = 'update';
            }, function (err) {
              _this14.uploadButtonValue = 'upload';
              _this14.fileSelected = true;
              _this14.imageUploaded = false;

              _this14.toaster.error('Network Error, Please Try After a Few Seconds');

              console.log(err);
            });
          });
          reader.readAsDataURL(file);
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          if (!this.editRegionForm.valid) {
            this.toaster.error('Error : Form Not Valid');
            this.isSubmited = false;
            return false;
          } // Fetch All Form Data On Json Type


          var formObject = this.editRegionForm.getRawValue();
          formObject.path = this.imageUrl;

          if (this.imageUrl) {
            formObject.path = this.imageUrl;
          } else {
            formObject.path = this.regionData.regionImage[0].pathURL;
          }

          console.log(formObject);
          this.store.dispatch(Object(_store_region_actions__WEBPACK_IMPORTED_MODULE_5__["updateRegion"])({
            region: formObject
          }));
        }
      }]);

      return EditRegionComponent;
    }();

    EditRegionComponent.ɵfac = function EditRegionComponent_Factory(t) {
      return new (t || EditRegionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_7__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_regions_service__WEBPACK_IMPORTED_MODULE_8__["RegionsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_9__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__["ActivatedRoute"]));
    };

    EditRegionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: EditRegionComponent,
      selectors: [["app-edit-region"]],
      decls: 48,
      vars: 43,
      consts: [[1, "container-fluid"], [1, "content-header"], [1, "text-center", "my-5"], [1, "card", "card-info"], [1, "card-header", "bg-sidebar-item-button", "text-white"], [1, "card-title", "mb-0"], [3, "formGroup", "ngSubmit"], [1, "card-body"], [1, "form-group"], ["for", "inputNameSuccess", 1, "col-form-label"], ["type", "text", "name", "name", "id", "inputNameSuccess", "formControlName", "name", 1, "form-control", 3, "ngClass", "placeholder", "keydown"], ["class", "location-search-result px-3 py-2", 4, "ngIf"], ["class", "invalid-feedback", 4, "ngIf"], ["for", "exampleInputdescription1"], ["name", "description", "formControlName", "description", "id", "exampleInputdescription1", 1, "form-control", 3, "ngClass", "placeholder"], ["for", "exampleInputupload"], [1, "input-group", "input-group-custom"], [1, "custom-file"], ["type", "file", "accept", "image/*", "id", "file-input", 1, "custom-file-input", 3, "change"], ["imageInput", ""], ["for", "file-input", 1, "custom-file-label"], [1, "input-group-append"], ["type", "button", 1, "btn", "btn-success", 3, "disabled", "click"], [1, "card-footer"], ["type", "submit", 1, "btn", "bg-sidebar-item-button", "text-white", 3, "disabled"], [1, "location-search-result", "px-3", "py-2"], ["class", "list-unstyled mb-0", 4, "ngIf"], ["class", "lds-ring", 4, "ngIf"], [1, "list-unstyled", "mb-0"], ["class", "pb-1", 3, "click", 4, "ngFor", "ngForOf"], [1, "pb-1", 3, "click"], [1, "lds-ring"], [1, "invalid-feedback"]],
      template: function EditRegionComponent_Template(rf, ctx) {
        if (rf & 1) {
          var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h1", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "h3", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](9, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "form", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function EditRegionComponent_Template_form_ngSubmit_10_listener() {
            return ctx.onSubmit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "label", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](15, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "input", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keydown", function EditRegionComponent_Template_input_keydown_16_listener($event) {
            return ctx.searchLocation($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](17, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, EditRegionComponent_div_18_Template, 3, 2, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, EditRegionComponent_span_19_Template, 3, 3, "span", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "label", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](23, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "textarea", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](25, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "                    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](27, EditRegionComponent_span_27_Template, 3, 3, "span", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](28, EditRegionComponent_span_28_Template, 2, 0, "span", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "label", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](32, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "input", 18, 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function EditRegionComponent_Template_input_change_35_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r11);

            var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](36);

            return ctx.updateName(_r4);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "label", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](39, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "button", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EditRegionComponent_Template_button_click_41_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r11);

            var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](36);

            return ctx.processFile(_r4);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](43, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "button", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](47, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](4, 19, "update-region-page"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](9, 21, "update-region"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.editRegionForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](15, 23, "name"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](17, 25, "name-type-placeholder"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](39, _c0, ctx.editRegionForm.get("name").errors && (ctx.editRegionForm.get("name").touched || ctx.editRegionForm.get("name").dirty)));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showSearchResult);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.editRegionForm.get("name").errors == null ? null : ctx.editRegionForm.get("name").errors.required);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](23, 27, "description"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](25, 29, "description-type-placeholder"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](41, _c0, ctx.editRegionForm.get("description").errors && (ctx.editRegionForm.get("description").touched || ctx.editRegionForm.get("description").dirty)));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.editRegionForm.get("description").errors == null ? null : ctx.editRegionForm.get("description").errors.required);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.editRegionForm.get("description").errors == null ? null : ctx.editRegionForm.get("description").errors.minlength);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](32, 31, "upload"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](39, 33, ctx.imageName));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx.fileSelected);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](43, 35, ctx.uploadButtonValue), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.editRegionForm.invalid || ctx.imageUploaded);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](47, 37, "update"));
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["NgForOf"]],
      pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslatePipe"]],
      styles: [".location-search-result[_ngcontent-%COMP%] {\n  border: 1px solid #ddd;\n  border-radius: 5px;\n}\n.location-search-result[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.location-search-result[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover {\n  transition: all 0.5s ease;\n  background: rgba(54, 72, 94, 0.92);\n  color: #fff;\n  border-radius: 5px;\n  padding-left: 10px;\n}\n.location-search-result[_ngcontent-%COMP%]   .lds-ring[_ngcontent-%COMP%] {\n  display: block;\n  position: inherit;\n  width: 64px;\n  height: 64px;\n  margin-left: auto;\n  margin-right: auto;\n}\n.card-footer[_ngcontent-%COMP%]   .btn.bg-sidebar-item-button[_ngcontent-%COMP%]:hover {\n  background: rgba(54, 72, 94, 0.8);\n}\n.input-group-ar[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  flex-wrap: wrap;\n  align-items: stretch;\n  width: 100%;\n}\n.input-group-ar[_ngcontent-%COMP%]    > .custom-file[_ngcontent-%COMP%] {\n  position: relative;\n  flex: 1 1 auto;\n  width: 1%;\n  margin-bottom: 0;\n}\n.input-group-ar[_ngcontent-%COMP%]    > .custom-file[_ngcontent-%COMP%]   .custom-file-input[_ngcontent-%COMP%] {\n  width: 100%;\n  min-width: 14rem;\n  max-width: 100%;\n  height: calc(2.25rem + 2px);\n  margin: 0;\n  opacity: 0;\n}\n.input-group-ar[_ngcontent-%COMP%]    > .custom-file[_ngcontent-%COMP%]   .custom-file-label[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  right: 0;\n  left: 0;\n  z-index: 1;\n  height: calc(2.25rem + 2px);\n  padding: 0.375rem 0.75rem;\n  line-height: 1.5;\n  color: #495057;\n  background-color: #fff;\n  border: 1px solid #ced4da;\n  border-radius: 0.25rem;\n}\n.input-group-ar[_ngcontent-%COMP%]    > .custom-file[_ngcontent-%COMP%]   .custom-file-label[_ngcontent-%COMP%]:after {\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  z-index: 3;\n  display: block;\n  height: calc(calc(2.25rem + 2px) - 1px * 2);\n  padding: 0.375rem 0.75rem;\n  line-height: 1.5;\n  color: #495057;\n  content: \"Browse\";\n  background-color: #e9ecef;\n  border-left: 1px solid #ced4da;\n  border-radius: 0.25rem 0 0 0.25rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcmVnaW9ucy9jb21wb25lbnRzL2VkaXQtcmVnaW9uL0Q6XFxTZXJ2ZXJzXFxkYXNoYm9hcmRzXFx0b3VyaXN0LXRlc3QtZGVwbG95L3NyY1xcYXBwXFxwYWdlc1xccmVnaW9uc1xcY29tcG9uZW50c1xcZWRpdC1yZWdpb25cXGVkaXQtcmVnaW9uLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlcy9yZWdpb25zL2NvbXBvbmVudHMvZWRpdC1yZWdpb24vZWRpdC1yZWdpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxzQkFBQTtFQUNBLGtCQUFBO0FDREo7QURHUTtFQUNJLGVBQUE7QUNEWjtBREVZO0VBSUkseUJBQUE7RUFFQSxrQ0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FDRGhCO0FES0k7RUFDSSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUNIUjtBRFFRO0VBQVUsaUNBQUE7QUNKbEI7QURRQTtFQUNJLGtCQUFBO0VBR0EsYUFBQTtFQUVBLGVBQUE7RUFHQSxvQkFBQTtFQUNBLFdBQUE7QUNMSjtBRE1JO0VBQ0Usa0JBQUE7RUFHQSxjQUFBO0VBQ0EsU0FBQTtFQUNBLGdCQUFBO0FDSk47QURLTTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSwyQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0FDSFI7QURLTTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFFBQUE7RUFDQSxPQUFBO0VBQ0EsVUFBQTtFQUNBLDJCQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxzQkFBQTtFQUNBLHlCQUFBO0VBQ0Esc0JBQUE7QUNIUjtBRElRO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsY0FBQTtFQUNBLDJDQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0EsOEJBQUE7RUFDQSxrQ0FBQTtBQ0ZWIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcmVnaW9ucy9jb21wb25lbnRzL2VkaXQtcmVnaW9uL2VkaXQtcmVnaW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vLi4vLi4vLi4vLi4vdmFyaWFibGUnO1xyXG5cclxuLmxvY2F0aW9uLXNlYXJjaC1yZXN1bHQge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIHVsIHtcclxuICAgICAgICBsaSB7XHJcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAuNXMgZWFzZTtcclxuICAgICAgICAgICAgICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIC41cyBlYXNlO1xyXG4gICAgICAgICAgICAgICAgLW8tdHJhbnNpdGlvbjogYWxsIC41cyBlYXNlO1xyXG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIC41cyBlYXNlO1xyXG4gICAgICAgICAgICAgICAgLy8gYmFja2dyb3VuZDogJGxpZ2h0X2JsdWU7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDU0LCA3MiwgOTQsIDAuOTIpO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgICAgICAgICAgIH0gICAgXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmxkcy1yaW5nIHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICBwb3NpdGlvbjogaW5oZXJpdDtcclxuICAgICAgICB3aWR0aDogNjRweDtcclxuICAgICAgICBoZWlnaHQ6IDY0cHg7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgfVxyXG59XHJcbi5jYXJkLWZvb3RlciB7XHJcbiAgICAuYnRuLmJnLXNpZGViYXItaXRlbS1idXR0b24ge1xyXG4gICAgICAgICY6aG92ZXIgeyBiYWNrZ3JvdW5kOiByZ2JhKDU0LCA3MiwgOTQsIDAuOCk7IH1cclxuICAgIH1cclxufVxyXG5cclxuLmlucHV0LWdyb3VwLWFyIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gICAgZGlzcGxheTogLW1zLWZsZXhib3g7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgLW1zLWZsZXgtd3JhcDogd3JhcDtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIC13ZWJraXQtYm94LWFsaWduOiBzdHJldGNoO1xyXG4gICAgLW1zLWZsZXgtYWxpZ246IHN0cmV0Y2g7XHJcbiAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgJiA+IC5jdXN0b20tZmlsZSB7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgLXdlYmtpdC1ib3gtZmxleDogMTtcclxuICAgICAgLW1zLWZsZXg6IDEgMSBhdXRvO1xyXG4gICAgICBmbGV4OiAxIDEgYXV0bztcclxuICAgICAgd2lkdGg6IDElO1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgICAuY3VzdG9tLWZpbGUtaW5wdXQge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIG1pbi13aWR0aDogMTRyZW07XHJcbiAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogY2FsYygyLjI1cmVtICsgMnB4KTtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgfVxyXG4gICAgICAuY3VzdG9tLWZpbGUtbGFiZWwge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgbGVmdDogMDtcclxuICAgICAgICB6LWluZGV4OiAxO1xyXG4gICAgICAgIGhlaWdodDogY2FsYygyLjI1cmVtICsgMnB4KTtcclxuICAgICAgICBwYWRkaW5nOiAuMzc1cmVtIC43NXJlbTtcclxuICAgICAgICBsaW5lLWhlaWdodDogMS41O1xyXG4gICAgICAgIGNvbG9yOiAjNDk1MDU3O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2NlZDRkYTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAuMjVyZW07XHJcbiAgICAgICAgJjphZnRlciB7XHJcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgICAgYm90dG9tOiAwO1xyXG4gICAgICAgICAgei1pbmRleDogMztcclxuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgaGVpZ2h0OiBjYWxjKGNhbGMoMi4yNXJlbSArIDJweCkgLSAxcHggKiAyKTtcclxuICAgICAgICAgIHBhZGRpbmc6IDAuMzc1cmVtIDAuNzVyZW07XHJcbiAgICAgICAgICBsaW5lLWhlaWdodDogMS41O1xyXG4gICAgICAgICAgY29sb3I6ICM0OTUwNTc7XHJcbiAgICAgICAgICBjb250ZW50OiBcIkJyb3dzZVwiO1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2U5ZWNlZjtcclxuICAgICAgICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI2NlZDRkYTtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDAuMjVyZW0gMCAwIDAuMjVyZW07XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gICIsIi5sb2NhdGlvbi1zZWFyY2gtcmVzdWx0IHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuLmxvY2F0aW9uLXNlYXJjaC1yZXN1bHQgdWwgbGkge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4ubG9jYXRpb24tc2VhcmNoLXJlc3VsdCB1bCBsaTpob3ZlciB7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZTtcbiAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlO1xuICAtby10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlO1xuICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDU0LCA3MiwgOTQsIDAuOTIpO1xuICBjb2xvcjogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG59XG4ubG9jYXRpb24tc2VhcmNoLXJlc3VsdCAubGRzLXJpbmcge1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IGluaGVyaXQ7XG4gIHdpZHRoOiA2NHB4O1xuICBoZWlnaHQ6IDY0cHg7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG59XG5cbi5jYXJkLWZvb3RlciAuYnRuLmJnLXNpZGViYXItaXRlbS1idXR0b246aG92ZXIge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDU0LCA3MiwgOTQsIDAuOCk7XG59XG5cbi5pbnB1dC1ncm91cC1hciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICBkaXNwbGF5OiBmbGV4O1xuICAtbXMtZmxleC13cmFwOiB3cmFwO1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIC13ZWJraXQtYm94LWFsaWduOiBzdHJldGNoO1xuICAtbXMtZmxleC1hbGlnbjogc3RyZXRjaDtcbiAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmlucHV0LWdyb3VwLWFyID4gLmN1c3RvbS1maWxlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAtd2Via2l0LWJveC1mbGV4OiAxO1xuICAtbXMtZmxleDogMSAxIGF1dG87XG4gIGZsZXg6IDEgMSBhdXRvO1xuICB3aWR0aDogMSU7XG4gIG1hcmdpbi1ib3R0b206IDA7XG59XG4uaW5wdXQtZ3JvdXAtYXIgPiAuY3VzdG9tLWZpbGUgLmN1c3RvbS1maWxlLWlucHV0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1pbi13aWR0aDogMTRyZW07XG4gIG1heC13aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBjYWxjKDIuMjVyZW0gKyAycHgpO1xuICBtYXJnaW46IDA7XG4gIG9wYWNpdHk6IDA7XG59XG4uaW5wdXQtZ3JvdXAtYXIgPiAuY3VzdG9tLWZpbGUgLmN1c3RvbS1maWxlLWxhYmVsIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAwO1xuICBsZWZ0OiAwO1xuICB6LWluZGV4OiAxO1xuICBoZWlnaHQ6IGNhbGMoMi4yNXJlbSArIDJweCk7XG4gIHBhZGRpbmc6IDAuMzc1cmVtIDAuNzVyZW07XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIGNvbG9yOiAjNDk1MDU3O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2VkNGRhO1xuICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xufVxuLmlucHV0LWdyb3VwLWFyID4gLmN1c3RvbS1maWxlIC5jdXN0b20tZmlsZS1sYWJlbDphZnRlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBib3R0b206IDA7XG4gIHotaW5kZXg6IDM7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBoZWlnaHQ6IGNhbGMoY2FsYygyLjI1cmVtICsgMnB4KSAtIDFweCAqIDIpO1xuICBwYWRkaW5nOiAwLjM3NXJlbSAwLjc1cmVtO1xuICBsaW5lLWhlaWdodDogMS41O1xuICBjb2xvcjogIzQ5NTA1NztcbiAgY29udGVudDogXCJCcm93c2VcIjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U5ZWNlZjtcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjY2VkNGRhO1xuICBib3JkZXItcmFkaXVzOiAwLjI1cmVtIDAgMCAwLjI1cmVtO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](EditRegionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-edit-region',
          templateUrl: './edit-region.component.html',
          styleUrls: ['./edit-region.component.scss']
        }]
      }], function () {
        return [{
          type: _ngrx_store__WEBPACK_IMPORTED_MODULE_7__["Store"]
        }, {
          type: _services_regions_service__WEBPACK_IMPORTED_MODULE_8__["RegionsService"]
        }, {
          type: ngx_toastr__WEBPACK_IMPORTED_MODULE_9__["ToastrService"]
        }, {
          type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslateService"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]
        }, {
          type: Document,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]]
          }]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_11__["ActivatedRoute"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/regions/regions-routing.module.ts":
  /*!*********************************************************!*\
    !*** ./src/app/pages/regions/regions-routing.module.ts ***!
    \*********************************************************/

  /*! exports provided: RegionsRoutingModule */

  /***/
  function srcAppPagesRegionsRegionsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegionsRoutingModule", function () {
      return RegionsRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _components_add_region_add_region_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./components/add-region/add-region.component */
    "./src/app/pages/regions/components/add-region/add-region.component.ts");
    /* harmony import */


    var _components_all_regions_all_regions_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./components/all-regions/all-regions.component */
    "./src/app/pages/regions/components/all-regions/all-regions.component.ts");
    /* harmony import */


    var _components_edit_region_edit_region_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./components/edit-region/edit-region.component */
    "./src/app/pages/regions/components/edit-region/edit-region.component.ts");

    var routes = [{
      path: '',
      component: _components_all_regions_all_regions_component__WEBPACK_IMPORTED_MODULE_3__["AllRegionsComponent"]
    }, {
      path: 'add',
      component: _components_add_region_add_region_component__WEBPACK_IMPORTED_MODULE_2__["AddRegionComponent"]
    }, {
      path: ':id',
      component: _components_edit_region_edit_region_component__WEBPACK_IMPORTED_MODULE_4__["EditRegionComponent"]
    }];

    var RegionsRoutingModule = function RegionsRoutingModule() {
      _classCallCheck(this, RegionsRoutingModule);
    };

    RegionsRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: RegionsRoutingModule
    });
    RegionsRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function RegionsRoutingModule_Factory(t) {
        return new (t || RegionsRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](RegionsRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RegionsRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/regions/regions.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/pages/regions/regions.module.ts ***!
    \*************************************************/

  /*! exports provided: RegionsModule */

  /***/
  function srcAppPagesRegionsRegionsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegionsModule", function () {
      return RegionsModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _regions_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./regions-routing.module */
    "./src/app/pages/regions/regions-routing.module.ts");
    /* harmony import */


    var _components_all_regions_all_regions_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./components/all-regions/all-regions.component */
    "./src/app/pages/regions/components/all-regions/all-regions.component.ts");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
    /* harmony import */


    var _store_region_reducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./store/region.reducer */
    "./src/app/pages/regions/store/region.reducer.ts");
    /* harmony import */


    var _ngrx_effects__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ngrx/effects */
    "./node_modules/@ngrx/effects/__ivy_ngcc__/fesm2015/ngrx-effects.js");
    /* harmony import */


    var _store_region_effects__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./store/region.effects */
    "./src/app/pages/regions/store/region.effects.ts");
    /* harmony import */


    var src_app_theme_theme_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/@theme/theme.module */
    "./src/app/@theme/theme.module.ts");
    /* harmony import */


    var _components_add_region_add_region_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./components/add-region/add-region.component */
    "./src/app/pages/regions/components/add-region/add-region.component.ts");
    /* harmony import */


    var _components_edit_region_edit_region_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./components/edit-region/edit-region.component */
    "./src/app/pages/regions/components/edit-region/edit-region.component.ts");

    var RegionsModule = function RegionsModule() {
      _classCallCheck(this, RegionsModule);
    };

    RegionsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: RegionsModule
    });
    RegionsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function RegionsModule_Factory(t) {
        return new (t || RegionsModule)();
      },
      imports: [[src_app_theme_theme_module__WEBPACK_IMPORTED_MODULE_7__["ThemeModule"], _regions_routing_module__WEBPACK_IMPORTED_MODULE_1__["RegionsRoutingModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["StoreModule"].forFeature(_store_region_reducer__WEBPACK_IMPORTED_MODULE_4__["regionsFeatureKey"], _store_region_reducer__WEBPACK_IMPORTED_MODULE_4__["reducer"]), _ngrx_effects__WEBPACK_IMPORTED_MODULE_5__["EffectsModule"].forFeature([_store_region_effects__WEBPACK_IMPORTED_MODULE_6__["RegionEffects"]])]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](RegionsModule, {
        declarations: [_components_all_regions_all_regions_component__WEBPACK_IMPORTED_MODULE_2__["AllRegionsComponent"], _components_add_region_add_region_component__WEBPACK_IMPORTED_MODULE_8__["AddRegionComponent"], _components_edit_region_edit_region_component__WEBPACK_IMPORTED_MODULE_9__["EditRegionComponent"]],
        imports: [src_app_theme_theme_module__WEBPACK_IMPORTED_MODULE_7__["ThemeModule"], _regions_routing_module__WEBPACK_IMPORTED_MODULE_1__["RegionsRoutingModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["StoreFeatureModule"], _ngrx_effects__WEBPACK_IMPORTED_MODULE_5__["EffectsFeatureModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RegionsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_components_all_regions_all_regions_component__WEBPACK_IMPORTED_MODULE_2__["AllRegionsComponent"], _components_add_region_add_region_component__WEBPACK_IMPORTED_MODULE_8__["AddRegionComponent"], _components_edit_region_edit_region_component__WEBPACK_IMPORTED_MODULE_9__["EditRegionComponent"]],
          imports: [src_app_theme_theme_module__WEBPACK_IMPORTED_MODULE_7__["ThemeModule"], _regions_routing_module__WEBPACK_IMPORTED_MODULE_1__["RegionsRoutingModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["StoreModule"].forFeature(_store_region_reducer__WEBPACK_IMPORTED_MODULE_4__["regionsFeatureKey"], _store_region_reducer__WEBPACK_IMPORTED_MODULE_4__["reducer"]), _ngrx_effects__WEBPACK_IMPORTED_MODULE_5__["EffectsModule"].forFeature([_store_region_effects__WEBPACK_IMPORTED_MODULE_6__["RegionEffects"]])]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/regions/services/regions.service.ts":
  /*!***********************************************************!*\
    !*** ./src/app/pages/regions/services/regions.service.ts ***!
    \***********************************************************/

  /*! exports provided: RegionsService */

  /***/
  function srcAppPagesRegionsServicesRegionsServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegionsService", function () {
      return RegionsService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _AdminConfig__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../AdminConfig */
    "./src/app/pages/AdminConfig.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var src_app_theme_admin_service_token_token_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/@theme/admin-service/token/token.service */
    "./src/app/@theme/admin-service/token/token.service.ts");

    var RegionsService = /*#__PURE__*/function () {
      function RegionsService(httpClient, tokenService) {
        _classCallCheck(this, RegionsService);

        this.httpClient = httpClient;
        this.tokenService = tokenService;
      } // All Regions


      _createClass(RegionsService, [{
        key: "getAllRegions",
        value: function getAllRegions() {
          return this.httpClient.get(_AdminConfig__WEBPACK_IMPORTED_MODULE_2__["AdminConfig"].regionsAPI);
        } // Get Region Details

      }, {
        key: "getRegion",
        value: function getRegion(regionId) {
          return this.httpClient.get("".concat(_AdminConfig__WEBPACK_IMPORTED_MODULE_2__["AdminConfig"].regionAPI, "/").concat(regionId));
        } // Create New Regions

      }, {
        key: "createRegion",
        value: function createRegion(data) {
          return this.httpClient.post(_AdminConfig__WEBPACK_IMPORTED_MODULE_2__["AdminConfig"].regionAPI, JSON.stringify(data));
        } // Update Exists Region

      }, {
        key: "updateRegion",
        value: function updateRegion(region) {
          return this.httpClient.put(_AdminConfig__WEBPACK_IMPORTED_MODULE_2__["AdminConfig"].updateRegionAPI, JSON.stringify(region));
        } // Delete Region

      }, {
        key: "deleteRegion",
        value: function deleteRegion(regionId) {
          return this.httpClient["delete"]("".concat(_AdminConfig__WEBPACK_IMPORTED_MODULE_2__["AdminConfig"].regionAPI, "/").concat(regionId));
        }
      }, {
        key: "getGoogleMapToken",
        value: function getGoogleMapToken() {
          return this.httpClient.get(_AdminConfig__WEBPACK_IMPORTED_MODULE_2__["AdminConfig"].googleMapTokenAPI);
        }
      }, {
        key: "getPlaceDetailsByPlaceID",
        value: function getPlaceDetailsByPlaceID(placeID, token) {
          var placeDetailsURL = _AdminConfig__WEBPACK_IMPORTED_MODULE_2__["AdminConfig"].googleMapPlaceDetailsAPI + "json?place_id=".concat(placeID, "&key=").concat(token);
          return this.httpClient.get(placeDetailsURL);
        }
      }, {
        key: "search",
        value: function search(value, token) {
          var searchQuery = _AdminConfig__WEBPACK_IMPORTED_MODULE_2__["AdminConfig"].googleMapSearchAPI + "json?input=".concat(value, "&types=geocode&key=").concat(token);
          return this.httpClient.get(searchQuery);
        }
      }, {
        key: "searchLocationAutoComplete",
        value: function searchLocationAutoComplete(text$, token) {
          var _this15 = this;

          return text$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["debounceTime"])(500), // Wait 500 Millsecond before execute The rest
          Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["distinctUntilChanged"])(), // stop make search until the searching value is changing 
          Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["switchMap"])(function (searchTerm) {
            if (!searchTerm) {
              return [];
            }

            return _this15.search(searchTerm, token);
          }));
        } // Image Section - Upload Image

      }, {
        key: "uploadImage",
        value: function uploadImage(image) {
          var formData = new FormData();
          formData.append('image', image);
          return this.httpClient.post(_AdminConfig__WEBPACK_IMPORTED_MODULE_2__["AdminConfig"].generalUploadAPI, formData);
        }
      }]);

      return RegionsService;
    }();

    RegionsService.ɵfac = function RegionsService_Factory(t) {
      return new (t || RegionsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](src_app_theme_admin_service_token_token_service__WEBPACK_IMPORTED_MODULE_4__["TokenService"]));
    };

    RegionsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: RegionsService,
      factory: RegionsService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RegionsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
        }, {
          type: src_app_theme_admin_service_token_token_service__WEBPACK_IMPORTED_MODULE_4__["TokenService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/regions/store/region.actions.ts":
  /*!*******************************************************!*\
    !*** ./src/app/pages/regions/store/region.actions.ts ***!
    \*******************************************************/

  /*! exports provided: loadRegions, loadRegionsSuccess, loadRegionsFailure, loadRegion, loadRegionSuccess, loadRegionFailure, deleteRegion, deleteRegionSuccess, deleteRegionFailure, addRegion, addRegionSuccess, addRegionFailure, upsertRegion, addRegions, updateRegion, updateRegionSuccess, updateRegionFailure, updateRegions, deleteRegions, upsertRegions, clearRegions */

  /***/
  function srcAppPagesRegionsStoreRegionActionsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "loadRegions", function () {
      return loadRegions;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "loadRegionsSuccess", function () {
      return loadRegionsSuccess;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "loadRegionsFailure", function () {
      return loadRegionsFailure;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "loadRegion", function () {
      return loadRegion;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "loadRegionSuccess", function () {
      return loadRegionSuccess;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "loadRegionFailure", function () {
      return loadRegionFailure;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "deleteRegion", function () {
      return deleteRegion;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "deleteRegionSuccess", function () {
      return deleteRegionSuccess;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "deleteRegionFailure", function () {
      return deleteRegionFailure;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "addRegion", function () {
      return addRegion;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "addRegionSuccess", function () {
      return addRegionSuccess;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "addRegionFailure", function () {
      return addRegionFailure;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "upsertRegion", function () {
      return upsertRegion;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "addRegions", function () {
      return addRegions;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "updateRegion", function () {
      return updateRegion;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "updateRegionSuccess", function () {
      return updateRegionSuccess;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "updateRegionFailure", function () {
      return updateRegionFailure;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "updateRegions", function () {
      return updateRegions;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "deleteRegions", function () {
      return deleteRegions;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "upsertRegions", function () {
      return upsertRegions;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "clearRegions", function () {
      return clearRegions;
    });
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");

    var loadRegions = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Region/API] Load Regions');
    var loadRegionsSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Region/API] Load Regions Success', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
    var loadRegionsFailure = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Region/API] Load Regions Failure', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
    var loadRegion = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Region/API] Load Region', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
    var loadRegionSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Region/API] Load Region Success', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
    var loadRegionFailure = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Region/API] Load Region Failure', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
    var deleteRegion = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Region/API] Delete Region', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
    var deleteRegionSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Region/API] Delete Region Success');
    var deleteRegionFailure = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Region/API] Delete Region Failure', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
    var addRegion = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Region/API] Add Region', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
    var addRegionSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Region/API] Add Region Success');
    var addRegionFailure = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Region/API] Add Region Failure', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
    var upsertRegion = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Region/API] Upsert Region', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
    var addRegions = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Region/API] Add Regions', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
    var updateRegion = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Region/API] Update Region', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
    var updateRegionSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Region/API] Update Region Success', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
    var updateRegionFailure = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Region/API] Update Region Failure', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
    var updateRegions = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Region/API] Update Regions', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
    var deleteRegions = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Region/API] Delete Regions', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
    var upsertRegions = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Region/API] Upsert Regions', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
    var clearRegions = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Region/API] Clear Regions');
    /***/
  },

  /***/
  "./src/app/pages/regions/store/region.effects.ts":
  /*!*******************************************************!*\
    !*** ./src/app/pages/regions/store/region.effects.ts ***!
    \*******************************************************/

  /*! exports provided: RegionEffects */

  /***/
  function srcAppPagesRegionsStoreRegionEffectsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegionEffects", function () {
      return RegionEffects;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ngrx/effects */
    "./node_modules/@ngrx/effects/__ivy_ngcc__/fesm2015/ngrx-effects.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _store_region_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../store/region.actions */
    "./src/app/pages/regions/store/region.actions.ts");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _services_regions_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../services/regions.service */
    "./src/app/pages/regions/services/regions.service.ts");

    var RegionEffects = function RegionEffects(actions$, store, toaster, router, activatedRoute, regionService) {
      var _this16 = this;

      _classCallCheck(this, RegionEffects);

      this.actions$ = actions$;
      this.store = store;
      this.toaster = toaster;
      this.router = router;
      this.activatedRoute = activatedRoute;
      this.regionService = regionService;
      this.loadRegions$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["createEffect"])(function () {
        return _this16.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_store_region_actions__WEBPACK_IMPORTED_MODULE_4__["loadRegions"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mergeMap"])(function () {
          return _this16.regionService.getAllRegions().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
            // this.store.dispatch(setLoadSpinner({status: false}));
            return _store_region_actions__WEBPACK_IMPORTED_MODULE_4__["loadRegionsSuccess"](response);
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) {
            console.log('error effect: ', error);

            if (error.error.error) {
              _this16.toaster.error(error.error.error);
            } else if (error.error.msg) {
              _this16.toaster.error(error.error.msg);
            }

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(_store_region_actions__WEBPACK_IMPORTED_MODULE_4__["loadRegionsFailure"](error));
          }));
        }));
      });
      this.loadRegion$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["createEffect"])(function () {
        return _this16.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_store_region_actions__WEBPACK_IMPORTED_MODULE_4__["loadRegion"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mergeMap"])(function (action) {
          return _this16.regionService.getRegion(action.id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
            return _store_region_actions__WEBPACK_IMPORTED_MODULE_4__["loadRegionSuccess"]({
              region: response.Data
            });
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) {
            console.log('error effect', error);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(_store_region_actions__WEBPACK_IMPORTED_MODULE_4__["loadRegionFailure"]({
              error: error
            }));
          }));
        }));
      });
      this.addRegion$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["createEffect"])(function () {
        return _this16.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_store_region_actions__WEBPACK_IMPORTED_MODULE_4__["addRegion"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["exhaustMap"])(function (action) {
          return _this16.regionService.createRegion(action.region).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
            _this16.toaster.success(response === null || response === void 0 ? void 0 : response.msg);

            return _store_region_actions__WEBPACK_IMPORTED_MODULE_4__["addRegionSuccess"]();
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) {
            console.log('error create effect', error);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(_store_region_actions__WEBPACK_IMPORTED_MODULE_4__["addRegionFailure"]({
              error: error
            }));
          }));
        }));
      });
      this.updateRegion$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["createEffect"])(function () {
        return _this16.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_store_region_actions__WEBPACK_IMPORTED_MODULE_4__["updateRegion"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (action) {
          return _this16.regionService.updateRegion(action.region).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
            _this16.toaster.success(response.msg);

            var regionUpdate = {
              id: action.region.id,
              changes: Object.assign({}, action.region)
            };
            return _store_region_actions__WEBPACK_IMPORTED_MODULE_4__["updateRegionSuccess"]({
              region: regionUpdate
            });
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(_store_region_actions__WEBPACK_IMPORTED_MODULE_4__["updateRegionFailure"]({
              error: error
            }));
          }));
        }));
      });
      this.redirectAddUpdateRegion$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["createEffect"])(function () {
        return _this16.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"]).apply(void 0, [_store_region_actions__WEBPACK_IMPORTED_MODULE_4__["addRegionSuccess"], _store_region_actions__WEBPACK_IMPORTED_MODULE_4__["updateRegionSuccess"]]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function () {
          _this16.router.navigate(['regions']);
        }));
      }, {
        dispatch: false
      }); // redirectUpdateRegion$ = createEffect(() => this.actions$.pipe(
      //   ofType(regionsAction.updateRegionSuccess),
      //   map( () => {
      //     this.router.navigate(['regions']);
      //   })
      // ), { dispatch: false });

      this.deleteRegion$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["createEffect"])(function () {
        return _this16.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_store_region_actions__WEBPACK_IMPORTED_MODULE_4__["deleteRegion"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["exhaustMap"])(function (action) {
          return _this16.regionService.deleteRegion(action.id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
            console.log(response);

            _this16.toaster.success('Region Successfully Deleted');

            return _store_region_actions__WEBPACK_IMPORTED_MODULE_4__["deleteRegionSuccess"]();
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) {
            console.log('effect delete error', error);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(_store_region_actions__WEBPACK_IMPORTED_MODULE_4__["deleteRegionFailure"]({
              error: error
            }));
          }));
        }));
      });
    };

    RegionEffects.ɵfac = function RegionEffects_Factory(t) {
      return new (t || RegionEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Actions"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_5__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_regions_service__WEBPACK_IMPORTED_MODULE_8__["RegionsService"]));
    };

    RegionEffects.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: RegionEffects,
      factory: RegionEffects.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RegionEffects, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Actions"]
        }, {
          type: _ngrx_store__WEBPACK_IMPORTED_MODULE_5__["Store"]
        }, {
          type: ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]
        }, {
          type: _services_regions_service__WEBPACK_IMPORTED_MODULE_8__["RegionsService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/regions/store/region.reducer.ts":
  /*!*******************************************************!*\
    !*** ./src/app/pages/regions/store/region.reducer.ts ***!
    \*******************************************************/

  /*! exports provided: regionsFeatureKey, adapter, initialState, reducer, selectIds, selectEntities, selectAll, selectTotal */

  /***/
  function srcAppPagesRegionsStoreRegionReducerTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "regionsFeatureKey", function () {
      return regionsFeatureKey;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "adapter", function () {
      return adapter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "initialState", function () {
      return initialState;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "reducer", function () {
      return reducer;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "selectIds", function () {
      return selectIds;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "selectEntities", function () {
      return selectEntities;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "selectAll", function () {
      return selectAll;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "selectTotal", function () {
      return selectTotal;
    });
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
    /* harmony import */


    var _ngrx_entity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ngrx/entity */
    "./node_modules/@ngrx/entity/__ivy_ngcc__/fesm2015/ngrx-entity.js");
    /* harmony import */


    var _region_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./region.actions */
    "./src/app/pages/regions/store/region.actions.ts");

    var regionsFeatureKey = 'regions';
    var adapter = Object(_ngrx_entity__WEBPACK_IMPORTED_MODULE_1__["createEntityAdapter"])();
    var initialState = adapter.getInitialState({
      // additional entity state properties
      Data: undefined,
      regionDetails: undefined,
      error: undefined
    });
    var reducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createReducer"])(initialState, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_region_actions__WEBPACK_IMPORTED_MODULE_2__["loadRegionsSuccess"], function (state, action) {
      return adapter.setAll(action.Data, state);
    }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_region_actions__WEBPACK_IMPORTED_MODULE_2__["loadRegionSuccess"], function (state, action) {
      return Object.assign(Object.assign({}, state), {
        regionDetails: action.region
      });
    }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_region_actions__WEBPACK_IMPORTED_MODULE_2__["addRegions"], function (state, action) {
      return adapter.addMany(action.regions, state);
    }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_region_actions__WEBPACK_IMPORTED_MODULE_2__["deleteRegion"], function (state, action) {
      return adapter.removeOne(action.id, state);
    }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_region_actions__WEBPACK_IMPORTED_MODULE_2__["addRegion"], function (state, action) {
      return adapter.addOne(action.region, state);
    }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_region_actions__WEBPACK_IMPORTED_MODULE_2__["upsertRegion"], function (state, action) {
      return adapter.upsertOne(action.region, state);
    }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_region_actions__WEBPACK_IMPORTED_MODULE_2__["addRegions"], function (state, action) {
      return adapter.addMany(action.regions, state);
    }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_region_actions__WEBPACK_IMPORTED_MODULE_2__["upsertRegions"], function (state, action) {
      return adapter.upsertMany(action.regions, state);
    }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_region_actions__WEBPACK_IMPORTED_MODULE_2__["updateRegionSuccess"], function (state, action) {
      return adapter.updateOne(action.region, state);
    }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_region_actions__WEBPACK_IMPORTED_MODULE_2__["updateRegions"], function (state, action) {
      return adapter.updateMany(action.regions, state);
    }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_region_actions__WEBPACK_IMPORTED_MODULE_2__["deleteRegions"], function (state, action) {
      return adapter.removeMany(action.ids, state);
    }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_region_actions__WEBPACK_IMPORTED_MODULE_2__["clearRegions"], function (state) {
      return adapter.removeAll(state);
    }));

    var _adapter$getSelectors = adapter.getSelectors(),
        selectIds = _adapter$getSelectors.selectIds,
        selectEntities = _adapter$getSelectors.selectEntities,
        selectAll = _adapter$getSelectors.selectAll,
        selectTotal = _adapter$getSelectors.selectTotal;
    /***/

  },

  /***/
  "./src/app/pages/regions/store/region.selector.ts":
  /*!********************************************************!*\
    !*** ./src/app/pages/regions/store/region.selector.ts ***!
    \********************************************************/

  /*! exports provided: getAllRegionsSelector, getRegionSelector */

  /***/
  function srcAppPagesRegionsStoreRegionSelectorTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getAllRegionsSelector", function () {
      return getAllRegionsSelector;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getRegionSelector", function () {
      return getRegionSelector;
    });
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
    /* harmony import */


    var _region_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./region.reducer */
    "./src/app/pages/regions/store/region.reducer.ts");

    var regionsFeatureState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"])(_region_reducer__WEBPACK_IMPORTED_MODULE_1__["regionsFeatureKey"]);
    var getAllRegionsSelector = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(regionsFeatureState, _region_reducer__WEBPACK_IMPORTED_MODULE_1__["selectAll"]);
    var getRegionSelector = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(regionsFeatureState, function (state) {
      return state.regionDetails;
    });
    /***/
  }
}]);
//# sourceMappingURL=regions-regions-module-es5.js.map