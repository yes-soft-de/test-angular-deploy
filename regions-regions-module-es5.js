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


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var src_app_theme_model_image_snippet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/@theme/model/image-snippet */
    "./src/app/@theme/model/image-snippet.ts");
    /* harmony import */


    var _store_region_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../store/region.actions */
    "./src/app/pages/regions/store/region.actions.ts");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
    /* harmony import */


    var _agm_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @agm/core */
    "./node_modules/@agm/core/__ivy_ngcc__/fesm2015/agm-core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");

    var _c0 = ["search"];

    function AddRegionComponent_span_18_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "name-field-required"));
      }
    }

    function AddRegionComponent_span_25_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "location Field Is Required");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AddRegionComponent_span_26_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please enter a vaild location address");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AddRegionComponent_span_31_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Location Id Field Is Required");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AddRegionComponent_span_39_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "descriptioon-field-required"));
      }
    }

    function AddRegionComponent_span_40_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "description Must Be Greater Than 3");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var _c1 = function _c1(a0) {
      return {
        "is-invalid": a0
      };
    };

    var AddRegionComponent = /*#__PURE__*/function () {
      function AddRegionComponent(store, toaster, mapsAPILoader, ngZone, router, activatedRoute) {
        _classCallCheck(this, AddRegionComponent);

        this.store = store;
        this.toaster = toaster;
        this.mapsAPILoader = mapsAPILoader;
        this.ngZone = ngZone;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.title = 'AGM project';
        this.isSubmited = false;
        this.uploadButtonValue = 'Upload';
        this.coverUploadButtonValue = 'Upload';
        this.imageName = 'Select Image';
        this.fileSelected = false;
        this.fileUploaded = false;
        this.imagePathReady = false;
        this.submitButtonValue = 'Waiting Uploading Image';
      }

      _createClass(AddRegionComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          // Fetch Form Data
          this.addRegionForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            location: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            path: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            placeId: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('')
          });
          this.mapsAPILoader.load().then(function () {
            _this.setCurrentLocation();

            _this.geoCoder = new google.maps.Geocoder();
            var autocomplete = new google.maps.places.Autocomplete(_this.searchElementRef.nativeElement);
            autocomplete.addListener("place_changed", function () {
              _this.ngZone.run(function () {
                var place = autocomplete.getPlace();

                if (place.geometry === undefined || place.geometry === null) {
                  return;
                }

                _this.latitude = place.geometry.location.lat();
                _this.longitude = place.geometry.location.lng();
                _this.zoom = 12;
              });
            });
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
          var _this2 = this;

          this.fileSelected = false;
          this.uploadButtonValue = 'Uploading...';
          console.log('Processing File');
          var file = imageInput.files[0];
          var reader = new FileReader();
          reader.addEventListener('load', function (event) {
            _this2.selectedFile = new src_app_theme_model_image_snippet__WEBPACK_IMPORTED_MODULE_2__["ImageSnippet"](event.target.result, file); // this.categoryService.uploadImage(this.selectedFile.file).subscribe(
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
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          this.isSubmited = true;

          if (!this.addRegionForm.valid) {
            this.toaster.error('Error : Form Not Valid');
            this.isSubmited = false;
            return false;
          } // Fetch All Form Data On Json Type


          var formObject = this.addRegionForm.getRawValue();
          this.store.dispatch(Object(_store_region_actions__WEBPACK_IMPORTED_MODULE_3__["addRegion"])({
            region: formObject
          }));
        }
      }, {
        key: "setCurrentLocation",
        value: function setCurrentLocation() {
          var _this3 = this;

          if ('geolocation' in navigator) {
            navigator.geolocation.getCurrentPosition(function (position) {
              _this3.latitude = position.coords.latitude;
              _this3.longitude = position.coords.longitude;
              _this3.zoom = 8;

              _this3.getAddress(_this3.latitude, _this3.longitude);
            });
          }
        }
      }, {
        key: "getAddress",
        value: function getAddress(latitude, longitude) {
          var _this4 = this;

          this.geoCoder.geocode({
            'location': {
              lat: latitude,
              lng: longitude
            }
          }, function (results, status) {
            if (status === 'OK') {
              if (results[0]) {
                _this4.zoom = 12;
                _this4.address = results[0].formatted_address;
              } else {
                window.alert('No results found');
              }
            } else {
              window.alert('Geocoder failed due to: ' + status);
            }
          });
        }
      }]);

      return AddRegionComponent;
    }();

    AddRegionComponent.ɵfac = function AddRegionComponent_Factory(t) {
      return new (t || AddRegionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_agm_core__WEBPACK_IMPORTED_MODULE_6__["MapsAPILoader"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]));
    };

    AddRegionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AddRegionComponent,
      selectors: [["app-add-region"]],
      viewQuery: function AddRegionComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.searchElementRef = _t.first);
        }
      },
      decls: 61,
      vars: 56,
      consts: [[1, "container-fluid"], [1, "content-header"], [1, "text-center", "my-5"], [1, "card", "card-info"], [1, "card-header", "bg-sidebar-item-button", "text-white"], [1, "card-title", "mb-0"], [3, "formGroup", "ngSubmit"], [1, "card-body"], [1, "form-group"], ["for", "inputNameSuccess", 1, "col-form-label"], ["type", "text", "name", "name", "id", "inputNameSuccess", "formControlName", "name", 1, "form-control", 3, "ngClass", "placeholder"], ["class", "invalid-feedback", 4, "ngIf"], ["for", "exampleInputEmail1"], ["type", "text", "name", "location", "formControlName", "location", "id", "exampleInputlocation1", 1, "form-control", 3, "ngClass", "placeholder"], ["for", "exampleInputplaceId1"], ["type", "text", "name", "placeId", "formControlName", "placeId", "id", "exampleInputplaceId1", "placeholder", "Type The Location Id", 1, "form-control", 3, "ngClass"], ["for", "exampleInputdescription1"], ["name", "description", "formControlName", "description", "id", "exampleInputdescription1", 1, "form-control", 3, "ngClass", "placeholder"], [1, "card-footer"], ["type", "submit", 1, "btn", "bg-sidebar-item-button", "text-white", 3, "disabled"], [1, "container"], ["type", "text", "placeholder", "Search Nearest Location", "autocorrect", "off", "autocapitalize", "off", "spellcheck", "off", "type", "text", 1, "form-control", 3, "keydown.enter"], ["search", ""], [3, "latitude", "longitude", "zoom"], [3, "latitude", "longitude", "markerDraggable"], [1, "invalid-feedback"]],
      template: function AddRegionComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h3", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "form", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function AddRegionComponent_Template_form_ngSubmit_10_listener() {
            return ctx.onSubmit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](15, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](17, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, AddRegionComponent_span_18_Template, 3, 3, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "label", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](22, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "input", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](24, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, AddRegionComponent_span_25_Template, 2, 0, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, AddRegionComponent_span_26_Template, 2, 0, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "label", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "PlaceId");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "input", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, AddRegionComponent_span_31_Template, 2, 0, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "label", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](35, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "textarea", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](37, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "                    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](39, AddRegionComponent_span_39_Template, 3, 3, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](40, AddRegionComponent_span_40_Template, 2, 0, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "button", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](44, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Angular Google Map with Search Box Example - ItSolutionStuff.com");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Enter address");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "input", 21, 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown.enter", function AddRegionComponent_Template_input_keydown_enter_51_listener($event) {
            return $event.preventDefault();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "agm-map", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "agm-marker", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 30, "create-region-page"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 32, "new-region"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.addRegionForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](15, 34, "name"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](17, 36, "name-type-placeholder"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](48, _c1, ctx.addRegionForm.get("name").errors && (ctx.addRegionForm.get("name").touched || ctx.addRegionForm.get("name").dirty)));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.addRegionForm.get("name").errors == null ? null : ctx.addRegionForm.get("name").errors.required);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](22, 38, "location"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](24, 40, "location-type-placeholder"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](50, _c1, ctx.addRegionForm.get("location").errors && (ctx.addRegionForm.get("location").touched || ctx.addRegionForm.get("location").dirty)));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.addRegionForm.get("location").errors == null ? null : ctx.addRegionForm.get("location").errors.required);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.addRegionForm.get("location").errors == null ? null : ctx.addRegionForm.get("location").errors.location);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](52, _c1, ctx.addRegionForm.get("placeId").errors && (ctx.addRegionForm.get("placeId").touched || ctx.addRegionForm.get("placeId").dirty)));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.addRegionForm.get("placeId").errors == null ? null : ctx.addRegionForm.get("placeId").errors.required);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](35, 42, "description"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](37, 44, "description-type-placeholder"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](54, _c1, ctx.addRegionForm.get("description").errors && (ctx.addRegionForm.get("description").touched || ctx.addRegionForm.get("description").dirty)));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.addRegionForm.get("description").errors == null ? null : ctx.addRegionForm.get("description").errors.required);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.addRegionForm.get("description").errors == null ? null : ctx.addRegionForm.get("description").errors.minlength);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.addRegionForm.invalid || ctx.isSubmited);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](44, 46, "create"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("latitude", ctx.latitude)("longitude", ctx.longitude)("zoom", ctx.zoom);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("latitude", ctx.latitude)("longitude", ctx.longitude)("markerDraggable", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Address: ", ctx.address, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Latitude: ", ctx.latitude, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Longitude: ", ctx.longitude, "");
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _agm_core__WEBPACK_IMPORTED_MODULE_6__["AgmMap"], _agm_core__WEBPACK_IMPORTED_MODULE_6__["AgmMarker"]],
      pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslatePipe"]],
      styles: [".card-footer[_ngcontent-%COMP%]   .btn.bg-sidebar-item-button[_ngcontent-%COMP%]:hover {\n  background: rgba(54, 72, 94, 0.8);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcmVnaW9ucy9jb21wb25lbnRzL2FkZC1yZWdpb24vRDpcXFNlcnZlcnNcXGRhc2hib2FyZHNcXHRvdXJpc3QtdGVzdC1kZXBsb3kvc3JjXFxhcHBcXHBhZ2VzXFxyZWdpb25zXFxjb21wb25lbnRzXFxhZGQtcmVnaW9uXFxhZGQtcmVnaW9uLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlcy9yZWdpb25zL2NvbXBvbmVudHMvYWRkLXJlZ2lvbi9hZGQtcmVnaW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVRO0VBQVUsaUNBQUE7QUNBbEIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9yZWdpb25zL2NvbXBvbmVudHMvYWRkLXJlZ2lvbi9hZGQtcmVnaW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmQtZm9vdGVyIHtcclxuICAgIC5idG4uYmctc2lkZWJhci1pdGVtLWJ1dHRvbiB7XHJcbiAgICAgICAgJjpob3ZlciB7IGJhY2tncm91bmQ6IHJnYmEoNTQsIDcyLCA5NCwgMC44KTsgfVxyXG4gICAgfVxyXG59IiwiLmNhcmQtZm9vdGVyIC5idG4uYmctc2lkZWJhci1pdGVtLWJ1dHRvbjpob3ZlciB7XG4gIGJhY2tncm91bmQ6IHJnYmEoNTQsIDcyLCA5NCwgMC44KTtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddRegionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-add-region',
          templateUrl: './add-region.component.html',
          styleUrls: ['./add-region.component.scss']
        }]
      }], function () {
        return [{
          type: _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"]
        }, {
          type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]
        }, {
          type: _agm_core__WEBPACK_IMPORTED_MODULE_6__["MapsAPILoader"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]
        }];
      }, {
        searchElementRef: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
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


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var ngx_pagination__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ngx-pagination */
    "./node_modules/ngx-pagination/__ivy_ngcc__/dist/ngx-pagination.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");

    function AllRegionsComponent_div_0_tr_34_Template(rf, ctx) {
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

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](16, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AllRegionsComponent_div_0_tr_34_Template_a_click_17_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

          var region_r3 = ctx.$implicit;

          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r4["delete"](region_r3 == null ? null : region_r3.id);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](19, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var region_r3 = ctx.$implicit;

        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", region_r3 == null ? null : region_r3.path[0].path, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("alt", "", region_r3.name, " Image");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](region_r3.name ? region_r3.name : "-");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](region_r3.description ? region_r3.description : "-");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](region_r3.location ? region_r3.location : "-");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](region_r3.commentNumber ? region_r3.commentNumber : "-");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](region_r3.ratingAverage ? region_r3.ratingAverage : "-");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/regions/", region_r3 == null ? null : region_r3.id, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](16, 13, "update"), " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("btn btn-danger confirm btn-sm mr-1 mb-1 ", ctx_r2.isDeleted ? "disabled" : "", "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](19, 15, "delete"), " ");
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

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](33, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, AllRegionsComponent_div_0_tr_34_Template, 20, 17, "tr", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](35, "paginate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "pagination-controls", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("pageChange", function AllRegionsComponent_div_0_Template_pagination_controls_pageChange_36_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r9.pageChanged($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](37, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](38, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](39, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 15, "manage-regions-page"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 17, "region-search-input"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 19, "region-search-input"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](15, 21, "image"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](18, 23, "name"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](21, 25, "description"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](24, 27, "location"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](27, 29, "comment-number"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](30, 31, "rating-average"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](33, 33, "control"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](35, 35, ctx_r0.regionsList, ctx_r0.config));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("previousLabel", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](37, 38, "prev"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("nextLabel", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](38, 40, "next"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("screenReaderCurrentLabel", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](39, 42, "you-are-on-page"));
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
      function AllRegionsComponent(store, http) {
        _classCallCheck(this, AllRegionsComponent);

        this.store = store;
        this.http = http;
        this.regionsList = [];
      }

      _createClass(AllRegionsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.http.get('https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=24.666626,46.7370781&rankby=distance&key=AIzaSyDwb8pKJI4CyMCgFuNtUo3zxVS7y5PN97I').subscribe(function (data) {
            return console.log(data);
          });
          this.store.dispatch(_store_region_actions__WEBPACK_IMPORTED_MODULE_1__["loadRegions"]());
          this.getAllRegions();
        }
      }, {
        key: "getAllRegions",
        value: function getAllRegions() {
          var _this5 = this;

          this.regionsSubscription = this.store.select(_store_region_selector__WEBPACK_IMPORTED_MODULE_2__["getAllRegionsSelector"]).subscribe(function (data) {
            console.log(data);
            _this5.regions = data;
            _this5.regionsList = data;
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
          var _this6 = this;

          if (confirm('Are You Sure You Want To Delete This Region')) {
            this.isDeleted = true;
            this.store.dispatch(_store_region_actions__WEBPACK_IMPORTED_MODULE_1__["deleteRegion"]({
              id: regionId
            })); // this.toaster.success('Region Successfully Deleted');

            setTimeout(function () {
              _this6.isDeleted = false;
            }, 1000);
          } else {
            return false;
          }
        }
      }, {
        key: "applyFilter",
        value: function applyFilter() {
          var _this7 = this;

          // if the search input value is empty
          if (!this.name) {
            this.regionsList = _toConsumableArray(this.regions);
          } else {
            this.regionsList = [];
            this.regionsList = this.regions.filter(function (res) {
              if (res.name) {
                var name = res.name.toLocaleLowerCase().match(_this7.name.toLocaleLowerCase());

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
      return new (t || AllRegionsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]));
    };

    AllRegionsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AllRegionsComponent,
      selectors: [["app-all-regions"]],
      decls: 2,
      vars: 2,
      consts: [[4, "ngIf"], [1, "text-center", "details-title", "my-4"], [1, "row"], [1, "col-10", "col-sm-8", "col-md-6", "col-xl-4"], [1, "form-group", "mb-4"], ["id", "exampleFormControlInput2", "type", "text", 1, "form-control", "form-control-underlined", "border-primary", "search-input", 3, "ngModel", "placeholder", "title", "ngModelChange", "keyup"], [1, "table-responsive", "text-center"], [1, "table", "table-bordered", "main-table"], [1, "bg-dark", "text-white"], [4, "ngFor", "ngForOf"], ["autoHide", "true", "maxSize", "5", "responsive", "true", "screenReaderPaginationLabel", "Pagination", "screenReaderPageLabel", "page", 1, "my-pagination", 3, "previousLabel", "nextLabel", "screenReaderCurrentLabel", "pageChange"], [1, "img-thumbnail", "img-custom", 3, "src", "alt"], [1, "td-custom"], [1, "btn", "btn-success", "btn-sm", "mr-1", "mb-1", 3, "routerLink"], [3, "click"], [1, "lds-ring"]],
      template: function AllRegionsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, AllRegionsComponent_div_0_Template, 40, 44, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AllRegionsComponent_div_1_Template, 6, 0, "div", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.regions.length != 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.regions.length == 0);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], ngx_pagination__WEBPACK_IMPORTED_MODULE_7__["PaginationControlsComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterLinkWithHref"]],
      pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslatePipe"], ngx_pagination__WEBPACK_IMPORTED_MODULE_7__["PaginatePipe"]],
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
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]
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


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var src_app_theme_model_image_snippet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/@theme/model/image-snippet */
    "./src/app/@theme/model/image-snippet.ts");
    /* harmony import */


    var _services_regions_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../services/regions.service */
    "./src/app/pages/regions/services/regions.service.ts");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");

    function EditRegionComponent_span_18_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "name-field-required"));
      }
    }

    function EditRegionComponent_span_23_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "location Field Is Required");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function EditRegionComponent_span_24_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please enter a vaild location address");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function EditRegionComponent_span_32_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "descriptioon-field-required"));
      }
    }

    function EditRegionComponent_span_33_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "description Must Be Greater Than 3");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var _c0 = function _c0(a0) {
      return {
        "is-invalid": a0
      };
    };

    var EditRegionComponent = /*#__PURE__*/function () {
      function EditRegionComponent(formBuilder, regionService, toaster, router, activatedRoute) {
        _classCallCheck(this, EditRegionComponent);

        this.formBuilder = formBuilder;
        this.regionService = regionService;
        this.toaster = toaster;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.isSubmited = false;
        this.uploadButtonValue = 'Upload';
        this.coverUploadButtonValue = 'Upload';
        this.imageName = 'Select Image';
        this.fileSelected = false;
        this.fileUploaded = false;
        this.imagePathReady = false;
        this.submitButtonValue = 'Waiting Uploading Image';
      }

      _createClass(EditRegionComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          // Fetch Form Data
          this.editRegionForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            location: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            path: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            placeId: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('')
          }); // this.initMap();
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
          var _this8 = this;

          this.fileSelected = false;
          this.uploadButtonValue = 'Uploading...';
          console.log('Processing File');
          var file = imageInput.files[0];
          var reader = new FileReader();
          reader.addEventListener('load', function (event) {
            _this8.selectedFile = new src_app_theme_model_image_snippet__WEBPACK_IMPORTED_MODULE_2__["ImageSnippet"](event.target.result, file); // this.categoryService.uploadImage(this.selectedFile.file).subscribe(
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
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          console.log(this.editRegionForm.getRawValue());
          this.regionService.createRegion(this.editRegionForm.getRawValue()).subscribe(function (data) {
            return console.log('data : ', data);
          }, function (error) {
            return console.log('error : ', error);
          }); // this.isSubmitted = true;
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
      }]);

      return EditRegionComponent;
    }();

    EditRegionComponent.ɵfac = function EditRegionComponent_Factory(t) {
      return new (t || EditRegionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_regions_service__WEBPACK_IMPORTED_MODULE_3__["RegionsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]));
    };

    EditRegionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: EditRegionComponent,
      selectors: [["app-edit-region"]],
      decls: 48,
      vars: 34,
      consts: [[1, "container-fluid"], [1, "content-header"], [1, "text-center", "my-5"], [1, "card", "card-info"], [1, "card-header", "bg-sidebar-item-button", "text-white"], [1, "card-title", "mb-0"], [3, "formGroup", "ngSubmit"], [1, "card-body"], [1, "form-group"], ["for", "inputNameSuccess", 1, "col-form-label"], ["type", "text", "name", "name", "id", "inputNameSuccess", "formControlName", "name", 1, "form-control", 3, "ngClass", "placeholder"], ["class", "invalid-feedback", 4, "ngIf"], ["for", "exampleInputEmail1"], ["type", "text", "name", "location", "formControlName", "location", "id", "exampleInputlocation1", "placeholder", "Type The location", 1, "form-control", 3, "ngClass"], ["for", "exampleInputdescription1"], ["name", "description", "formControlName", "description", "id", "exampleInputdescription1", 1, "form-control", 3, "ngClass", "placeholder"], [1, "card-footer"], ["type", "submit", 1, "btn", "bg-sidebar-item-button", "text-white", 3, "disabled"], [2, "display", "none"], ["id", "pac-input", "type", "text", "placeholder", "Enter a location", 1, "controls"], ["id", "map"], ["id", "infowindow-content"], ["id", "place-name", 1, "title"], ["id", "place-id"], ["id", "place-address"], [1, "invalid-feedback"]],
      template: function EditRegionComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h3", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "form", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function EditRegionComponent_Template_form_ngSubmit_10_listener() {
            return ctx.onSubmit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](15, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](17, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, EditRegionComponent_span_18_Template, 3, 3, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "label", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Location");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "input", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, EditRegionComponent_span_23_Template, 2, 0, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, EditRegionComponent_span_24_Template, 2, 0, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "label", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](28, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "textarea", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](30, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "                    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, EditRegionComponent_span_32_Template, 3, 3, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, EditRegionComponent_span_33_Template, 2, 0, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "button", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Submit");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "input", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "span", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Place ID:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "span", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "span", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 16, "update-region-page"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 18, "new-region"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.editRegionForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](15, 20, "name"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](17, 22, "name-type-placeholder"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](28, _c0, ctx.editRegionForm.get("name").errors && (ctx.editRegionForm.get("name").touched || ctx.editRegionForm.get("name").dirty)));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.editRegionForm.get("name").errors == null ? null : ctx.editRegionForm.get("name").errors.required);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](30, _c0, ctx.editRegionForm.get("location").errors && (ctx.editRegionForm.get("location").touched || ctx.editRegionForm.get("location").dirty)));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.editRegionForm.get("location").errors == null ? null : ctx.editRegionForm.get("location").errors.required);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.editRegionForm.get("location").errors == null ? null : ctx.editRegionForm.get("location").errors.location);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](28, 24, "description"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](30, 26, "description-type-placeholder"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](32, _c0, ctx.editRegionForm.get("description").errors && (ctx.editRegionForm.get("description").touched || ctx.editRegionForm.get("description").dirty)));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.editRegionForm.get("description").errors == null ? null : ctx.editRegionForm.get("description").errors.required);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.editRegionForm.get("description").errors == null ? null : ctx.editRegionForm.get("description").errors.minlength);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.editRegionForm.invalid || ctx.isSubmited);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"]],
      pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslatePipe"]],
      styles: [".card-footer[_ngcontent-%COMP%]   .btn.bg-sidebar-item-button[_ngcontent-%COMP%]:hover {\n  background: rgba(54, 72, 94, 0.8);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcmVnaW9ucy9jb21wb25lbnRzL2VkaXQtcmVnaW9uL0Q6XFxTZXJ2ZXJzXFxkYXNoYm9hcmRzXFx0b3VyaXN0LXRlc3QtZGVwbG95L3NyY1xcYXBwXFxwYWdlc1xccmVnaW9uc1xcY29tcG9uZW50c1xcZWRpdC1yZWdpb25cXGVkaXQtcmVnaW9uLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlcy9yZWdpb25zL2NvbXBvbmVudHMvZWRpdC1yZWdpb24vZWRpdC1yZWdpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRVE7RUFBVSxpQ0FBQTtBQ0FsQiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3JlZ2lvbnMvY29tcG9uZW50cy9lZGl0LXJlZ2lvbi9lZGl0LXJlZ2lvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkLWZvb3RlciB7XHJcbiAgICAuYnRuLmJnLXNpZGViYXItaXRlbS1idXR0b24ge1xyXG4gICAgICAgICY6aG92ZXIgeyBiYWNrZ3JvdW5kOiByZ2JhKDU0LCA3MiwgOTQsIDAuOCk7IH1cclxuICAgIH1cclxufSIsIi5jYXJkLWZvb3RlciAuYnRuLmJnLXNpZGViYXItaXRlbS1idXR0b246aG92ZXIge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDU0LCA3MiwgOTQsIDAuOCk7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EditRegionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-edit-region',
          templateUrl: './edit-region.component.html',
          styleUrls: ['./edit-region.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }, {
          type: _services_regions_service__WEBPACK_IMPORTED_MODULE_3__["RegionsService"]
        }, {
          type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]
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
    /* harmony import */


    var _agm_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @agm/core */
    "./node_modules/@agm/core/__ivy_ngcc__/fesm2015/agm-core.js");

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
      imports: [[src_app_theme_theme_module__WEBPACK_IMPORTED_MODULE_7__["ThemeModule"], _regions_routing_module__WEBPACK_IMPORTED_MODULE_1__["RegionsRoutingModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["StoreModule"].forFeature(_store_region_reducer__WEBPACK_IMPORTED_MODULE_4__["regionsFeatureKey"], _store_region_reducer__WEBPACK_IMPORTED_MODULE_4__["reducer"]), _ngrx_effects__WEBPACK_IMPORTED_MODULE_5__["EffectsModule"].forFeature([_store_region_effects__WEBPACK_IMPORTED_MODULE_6__["RegionEffects"]]), _agm_core__WEBPACK_IMPORTED_MODULE_10__["AgmCoreModule"] // AgmCoreModule.forRoot({
      //   apiKey: 'AIzaSyDwb8pKJI4CyMCgFuNtUo3zxVS7y5PN97I',
      //   libraries: ['places']
      // })
      ]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](RegionsModule, {
        declarations: [_components_all_regions_all_regions_component__WEBPACK_IMPORTED_MODULE_2__["AllRegionsComponent"], _components_add_region_add_region_component__WEBPACK_IMPORTED_MODULE_8__["AddRegionComponent"], _components_edit_region_edit_region_component__WEBPACK_IMPORTED_MODULE_9__["EditRegionComponent"]],
        imports: [src_app_theme_theme_module__WEBPACK_IMPORTED_MODULE_7__["ThemeModule"], _regions_routing_module__WEBPACK_IMPORTED_MODULE_1__["RegionsRoutingModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["StoreFeatureModule"], _ngrx_effects__WEBPACK_IMPORTED_MODULE_5__["EffectsFeatureModule"], _agm_core__WEBPACK_IMPORTED_MODULE_10__["AgmCoreModule"] // AgmCoreModule.forRoot({
        //   apiKey: 'AIzaSyDwb8pKJI4CyMCgFuNtUo3zxVS7y5PN97I',
        //   libraries: ['places']
        // })
        ]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RegionsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_components_all_regions_all_regions_component__WEBPACK_IMPORTED_MODULE_2__["AllRegionsComponent"], _components_add_region_add_region_component__WEBPACK_IMPORTED_MODULE_8__["AddRegionComponent"], _components_edit_region_edit_region_component__WEBPACK_IMPORTED_MODULE_9__["EditRegionComponent"]],
          imports: [src_app_theme_theme_module__WEBPACK_IMPORTED_MODULE_7__["ThemeModule"], _regions_routing_module__WEBPACK_IMPORTED_MODULE_1__["RegionsRoutingModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["StoreModule"].forFeature(_store_region_reducer__WEBPACK_IMPORTED_MODULE_4__["regionsFeatureKey"], _store_region_reducer__WEBPACK_IMPORTED_MODULE_4__["reducer"]), _ngrx_effects__WEBPACK_IMPORTED_MODULE_5__["EffectsModule"].forFeature([_store_region_effects__WEBPACK_IMPORTED_MODULE_6__["RegionEffects"]]), _agm_core__WEBPACK_IMPORTED_MODULE_10__["AgmCoreModule"] // AgmCoreModule.forRoot({
          //   apiKey: 'AIzaSyDwb8pKJI4CyMCgFuNtUo3zxVS7y5PN97I',
          //   libraries: ['places']
          // })
          ]
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


    var _AdminConfig__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../AdminConfig */
    "./src/app/pages/AdminConfig.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var src_app_theme_admin_service_token_token_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
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
          return this.httpClient.get(_AdminConfig__WEBPACK_IMPORTED_MODULE_1__["AdminConfig"].regionsAPI);
        } // Get Region Details

      }, {
        key: "getRegion",
        value: function getRegion(regionId) {
          return this.httpClient["delete"]("".concat(_AdminConfig__WEBPACK_IMPORTED_MODULE_1__["AdminConfig"].regionAPI, "/").concat(regionId));
        } // Create New Regions

      }, {
        key: "createRegion",
        value: function createRegion(data) {
          return this.httpClient.post(_AdminConfig__WEBPACK_IMPORTED_MODULE_1__["AdminConfig"].regionAPI, JSON.stringify(data));
        } // Update Exists Region

      }, {
        key: "updateRegion",
        value: function updateRegion(regionId, data) {
          return this.httpClient.put("".concat(_AdminConfig__WEBPACK_IMPORTED_MODULE_1__["AdminConfig"].regionAPI, "/").concat(regionId), JSON.stringify(data));
        } // Delete Region

      }, {
        key: "deleteRegion",
        value: function deleteRegion(regionId) {
          return this.httpClient["delete"]("".concat(_AdminConfig__WEBPACK_IMPORTED_MODULE_1__["AdminConfig"].regionAPI, "/").concat(regionId));
        }
      }]);

      return RegionsService;
    }();

    RegionsService.ɵfac = function RegionsService_Factory(t) {
      return new (t || RegionsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](src_app_theme_admin_service_token_token_service__WEBPACK_IMPORTED_MODULE_3__["TokenService"]));
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
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }, {
          type: src_app_theme_admin_service_token_token_service__WEBPACK_IMPORTED_MODULE_3__["TokenService"]
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

  /*! exports provided: loadRegions, loadRegionsSuccess, loadRegionsFailure, loadRegion, loadRegionSuccess, loadRegionFailure, deleteRegion, deleteRegionSuccess, deleteRegionFailure, addRegion, addRegionSuccess, addRegionFailure, upsertRegion, addRegions, upsertRegions, updateRegion, updateRegions, deleteRegions, clearRegions */

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


    __webpack_require__.d(__webpack_exports__, "upsertRegions", function () {
      return upsertRegions;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "updateRegion", function () {
      return updateRegion;
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
    var upsertRegions = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Region/API] Upsert Regions', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
    var updateRegion = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Region/API] Update Region', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
    var updateRegions = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Region/API] Update Regions', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
    var deleteRegions = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Region/API] Delete Regions', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
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
      var _this9 = this;

      _classCallCheck(this, RegionEffects);

      this.actions$ = actions$;
      this.store = store;
      this.toaster = toaster;
      this.router = router;
      this.activatedRoute = activatedRoute;
      this.regionService = regionService;
      this.loadRegions$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["createEffect"])(function () {
        return _this9.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_store_region_actions__WEBPACK_IMPORTED_MODULE_4__["loadRegions"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mergeMap"])(function () {
          return _this9.regionService.getAllRegions().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
            // this.store.dispatch(setLoadSpinner({status: false}));
            return _store_region_actions__WEBPACK_IMPORTED_MODULE_4__["loadRegionsSuccess"](response);
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) {
            console.log('error effect: ', error);

            if (error.error.error) {
              _this9.toaster.error(error.error.error);
            } else if (error.error.msg) {
              _this9.toaster.error(error.error.msg);
            }

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(_store_region_actions__WEBPACK_IMPORTED_MODULE_4__["loadRegionsFailure"](error));
          }));
        }));
      });
      this.loadRegion$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["createEffect"])(function () {
        return _this9.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_store_region_actions__WEBPACK_IMPORTED_MODULE_4__["loadRegion"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mergeMap"])(function (action) {
          return _this9.regionService.createRegion(action.id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
            return _store_region_actions__WEBPACK_IMPORTED_MODULE_4__["loadRegionSuccess"]({
              region: response
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
        return _this9.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_store_region_actions__WEBPACK_IMPORTED_MODULE_4__["addRegion"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["exhaustMap"])(function (action) {
          return _this9.regionService.createRegion(action.region).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
            console.log('create effect reseponse :', response);

            _this9.toaster.success(response === null || response === void 0 ? void 0 : response.msg);

            return _store_region_actions__WEBPACK_IMPORTED_MODULE_4__["addRegionSuccess"]();
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) {
            console.log('error create effect', error);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(_store_region_actions__WEBPACK_IMPORTED_MODULE_4__["addRegionFailure"]({
              error: error
            }));
          }));
        }));
      });
      this.redirectAddRegion$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["createEffect"])(function () {
        return _this9.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_store_region_actions__WEBPACK_IMPORTED_MODULE_4__["addRegionSuccess"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
          _this9.router.navigate(['../'], {
            relativeTo: _this9.activatedRoute
          });
        }));
      }, {
        dispatch: false
      });
      this.deleteRegion$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["createEffect"])(function () {
        return _this9.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_store_region_actions__WEBPACK_IMPORTED_MODULE_4__["deleteRegion"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["exhaustMap"])(function (action) {
          return _this9.regionService.deleteRegion(action.id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
            console.log(response);

            _this9.toaster.success('Region Successfully Deleted');

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
    }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_region_actions__WEBPACK_IMPORTED_MODULE_2__["updateRegion"], function (state, action) {
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

  /*! exports provided: getAllRegionsSelector */

  /***/
  function srcAppPagesRegionsStoreRegionSelectorTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getAllRegionsSelector", function () {
      return getAllRegionsSelector;
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
    /***/
  }
}]);
//# sourceMappingURL=regions-regions-module-es5.js.map