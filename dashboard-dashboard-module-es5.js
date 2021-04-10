function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dashboard-dashboard-module"], {
  /***/
  "./src/app/pages/dashboard/dashboard-routing.module.ts":
  /*!*************************************************************!*\
    !*** ./src/app/pages/dashboard/dashboard-routing.module.ts ***!
    \*************************************************************/

  /*! exports provided: DashboardRoutingModule */

  /***/
  function srcAppPagesDashboardDashboardRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashboardRoutingModule", function () {
      return DashboardRoutingModule;
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


    var _dashboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./dashboard.component */
    "./src/app/pages/dashboard/dashboard.component.ts");

    var routes = [{
      path: '',
      component: _dashboard_component__WEBPACK_IMPORTED_MODULE_2__["DashboardComponent"]
    }, {
      path: 'dashboard',
      redirectTo: '',
      pathMatch: 'full'
    }];

    var DashboardRoutingModule = function DashboardRoutingModule() {
      _classCallCheck(this, DashboardRoutingModule);
    };

    DashboardRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: DashboardRoutingModule
    });
    DashboardRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function DashboardRoutingModule_Factory(t) {
        return new (t || DashboardRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DashboardRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DashboardRoutingModule, [{
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
  "./src/app/pages/dashboard/dashboard.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/pages/dashboard/dashboard.component.ts ***!
    \********************************************************/

  /*! exports provided: DashboardComponent */

  /***/
  function srcAppPagesDashboardDashboardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashboardComponent", function () {
      return DashboardComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_theme_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/@theme/components */
    "./src/app/@theme/components/index.ts");
    /* harmony import */


    var _store_dashboard_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./store/dashboard.actions */
    "./src/app/pages/dashboard/store/dashboard.actions.ts");
    /* harmony import */


    var _store_dashboard_selector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./store/dashboard.selector */
    "./src/app/pages/dashboard/store/dashboard.selector.ts");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
    /* harmony import */


    var _services_dashboard_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./services/dashboard.service */
    "./src/app/pages/dashboard/services/dashboard.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _theme_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../@theme/components/footer/footer.component */
    "./src/app/@theme/components/footer/footer.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");

    function DashboardComponent_div_0_div_96_ng_container_1_ng_container_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 44);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 45);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var guide_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", guide_r8 == null ? null : guide_r8.name.slice(0, 20), " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/guides/", guide_r8 == null ? null : guide_r8.id, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 3, "view"));
      }
    }

    function DashboardComponent_div_0_div_96_ng_container_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DashboardComponent_div_0_div_96_ng_container_1_ng_container_1_Template, 6, 5, "ng-container", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var i_r9 = ctx.index;

        var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", i_r9 < ctx_r7.latestGuidesNumber);
      }
    }

    function DashboardComponent_div_0_div_96_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DashboardComponent_div_0_div_96_ng_container_1_Template, 2, 1, "ng-container", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r3.allGuides);
      }
    }

    function DashboardComponent_div_0_div_97_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 44);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 1, "guides-not-found"), " ");
      }
    }

    function DashboardComponent_div_0_div_105_ng_container_1_ng_container_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 44);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 45);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var event_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", event_r13 == null ? null : event_r13.name.slice(0, 20), " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/events/edit/", event_r13 == null ? null : event_r13.id, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 3, "update"));
      }
    }

    function DashboardComponent_div_0_div_105_ng_container_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DashboardComponent_div_0_div_105_ng_container_1_ng_container_1_Template, 6, 5, "ng-container", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var i_r14 = ctx.index;

        var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", i_r14 < ctx_r12.latestEventsNumber);
      }
    }

    function DashboardComponent_div_0_div_105_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DashboardComponent_div_0_div_105_ng_container_1_Template, 2, 1, "ng-container", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r5.allEvents);
      }
    }

    function DashboardComponent_div_0_div_106_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 44);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 1, "events-not-found"), " ");
      }
    }

    function DashboardComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h6");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "i", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "h6");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](23, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "i", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "h6");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](33, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "a", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "i", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "h6");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](43, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "a", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "i", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "h6");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](53, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "a", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "span", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](66, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](70, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "i", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "span", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](81, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](85, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](86, "i", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "div", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "div", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](94, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](95, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](96, DashboardComponent_div_0_div_96_Template, 2, 1, "div", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](97, DashboardComponent_div_0_div_97_Template, 4, 3, "div", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "div", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "div", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "div", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "div", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](103, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](104, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](105, DashboardComponent_div_0_div_105_Template, 2, 1, "div", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](106, DashboardComponent_div_0_div_106_Template, 4, 3, "div", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var statistics_r2 = ctx.ngIf;

        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 27, "dashboard-page"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](13, 29, "total-regions"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](statistics_r2 == null ? null : statistics_r2.regions);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](23, 31, "total-events"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](statistics_r2 == null ? null : statistics_r2.events);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](33, 33, "total-completed-orders"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](statistics_r2 == null ? null : statistics_r2.completedOrders);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](43, 35, "total-guides"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](statistics_r2 == null ? null : statistics_r2.users == null ? null : statistics_r2.users.guides);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](53, 37, "total-tourists"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](statistics_r2 == null ? null : statistics_r2.users == null ? null : statistics_r2.users.tourists);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](66, 39, "rating"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](70, 41, "rating"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](statistics_r2 == null ? null : statistics_r2.ratings);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](81, 43, "comments-number"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](85, 45, "comments-number"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](statistics_r2 == null ? null : statistics_r2.comments);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](94, 47, "latest"), " ", ctx_r0.latestGuidesNumber, " ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](95, 49, "guides"), " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r0.allGuides == null ? null : ctx_r0.allGuides.length) != 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r0.allGuides == null ? null : ctx_r0.allGuides.length) == 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](103, 51, "latest"), " ", ctx_r0.latestEventsNumber, " ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](104, 53, "events"), " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r0.allEvents == null ? null : ctx_r0.allEvents.length) != 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r0.allEvents == null ? null : ctx_r0.allEvents.length) == 0);
      }
    }

    function DashboardComponent_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var DashboardComponent = /*#__PURE__*/function () {
      function DashboardComponent(store, dashboardService) {
        _classCallCheck(this, DashboardComponent);

        this.store = store;
        this.dashboardService = dashboardService;
        this.latestGuidesNumber = 5;
        this.latestEventsNumber = 5;
      }

      _createClass(DashboardComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.store.dispatch(Object(_store_dashboard_actions__WEBPACK_IMPORTED_MODULE_2__["loadDashboards"])());
          this.getStatistics();
          this.getAllGuides();
          this.getAllEvents();
        }
      }, {
        key: "getStatistics",
        value: function getStatistics() {
          this.statistics$ = this.store.select(_store_dashboard_selector__WEBPACK_IMPORTED_MODULE_3__["getDashboardStatisticsSelector"]);
        }
      }, {
        key: "getAllGuides",
        value: function getAllGuides() {
          var _this = this;

          this.dashboardService.getAllGuides().subscribe(function (guidesResponse) {
            console.log(guidesResponse.Data);
            _this.allGuides = guidesResponse.Data.reverse();
          });
        }
      }, {
        key: "getAllEvents",
        value: function getAllEvents() {
          var _this2 = this;

          this.dashboardService.getAllEvents().subscribe(function (eventsResponse) {
            return _this2.allEvents = eventsResponse.Data.reverse();
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {// this.combinedObservable.unsubscribe();
        }
      }]);

      return DashboardComponent;
    }();

    DashboardComponent.ɵfac = function DashboardComponent_Factory(t) {
      return new (t || DashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_dashboard_service__WEBPACK_IMPORTED_MODULE_5__["DashboardService"]));
    };

    DashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: DashboardComponent,
      selectors: [["app-dashboard"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([src_app_theme_components__WEBPACK_IMPORTED_MODULE_1__["FooterComponent"]])],
      decls: 5,
      vars: 6,
      consts: [["class", "w-100 mb-4", 4, "ngIf"], [4, "ngIf"], [1, "w-100", "mb-4"], [1, "container"], [1, "home-stat"], [1, "my-4", "text-center"], [1, "row"], [1, "col-md-6", "col-lg-4"], [1, "stat", "mb-3", "st_categories"], [1, "fa", "fa-institution", "fa-fw", "fa-5x"], ["routerLink", "/regions"], [1, "stat", "mb-3", "st_animes"], [1, "fa", "fa-calendar-check-o", "fa-fw", "fa-5x"], ["routerLink", "/events"], [1, "stat", "mb-3", "st_episode_coming_soon"], [1, "fa", "fa-tags", "fa-fw", "fa-5x"], ["routerLink", "/orders/accepted"], [1, "col-md-6", "col-lg-4", "mx-auto"], [1, "stat", "mb-3", "st_clients"], [1, "fa", "fa-user-circle", "fa-fw", "fa-5x"], ["routerLink", "/guides"], [1, "stat", "mb-3", "st_pending"], [1, "fa", "fa-users", "fa-fw", "fa-5x"], ["routerLink", ""], [1, "latest", "mt-5"], [1, "col-12", "col-md-6", "mb-3"], [1, "card", "bg-gradient-x-dark-blue", "text-white", "border-0"], [1, "card-content"], [1, "card-body"], [1, "weather-details", "text-center"], [1, "block", "white", "darken-1"], [1, "card-footer", "bg-gradient-x-dark-blue", "border-0"], [1, "col-6", "text-center", "display-table-cell", "white", "mx-auto", 3, "title"], [1, "fa", "fa-star", "fa-fw", "mx-1"], [1, "card", "bg-gradient-x-info", "text-white", "border-0"], [1, "card-footer", "bg-gradient-x-info", "border-0"], [1, "col-4", "text-center", "display-table-cell", "white", "mx-auto", 3, "title"], [1, "fa", "fa-comments", "fa-fw", "mx-1"], [1, "col-12", "col-md-6"], [1, "late", "mb-3"], [1, "card"], [1, "card-header"], ["class", "card-body", 4, "ngIf"], [4, "ngFor", "ngForOf"], [1, "late_info"], [1, "btn", "btn-success", "btn-sm", "py-0", "float-right", 3, "routerLink"], [1, "lds-ring"]],
      template: function DashboardComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, DashboardComponent_div_0_Template, 107, 55, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DashboardComponent_div_2_Template, 6, 0, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-footer");
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 2, ctx.statistics$));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 4, ctx.statistics$));
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _theme_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["AsyncPipe"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslatePipe"]],
      styles: ["@media (min-width: 768px) and (max-width: 991px) {\n  .home-stat[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 2.2rem;\n  }\n}\n@media (min-width: 576px) and (max-width: 767px) {\n  .home-stat[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 2rem;\n  }\n}\n@media (max-width: 575px) {\n  .home-stat[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 1.8rem;\n  }\n}\n.home-stat[_ngcontent-%COMP%]   .stat[_ngcontent-%COMP%] {\n  background: cadetblue;\n  padding: 15px;\n  margin-bottom: 5px;\n  text-align: center;\n  border-radius: 10px;\n  color: #fff;\n  border: 1px solid #ccc;\n  position: relative;\n  overflow: hidden;\n  transition: all 0.5s ease-in-out;\n}\n.home-stat[_ngcontent-%COMP%]   .stat[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n  font-size: 14px;\n}\n.home-stat[_ngcontent-%COMP%]   .stat[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 50px;\n  font-weight: 600;\n}\n.home-stat[_ngcontent-%COMP%]   .stat[_ngcontent-%COMP%]:hover {\n  -o-box-shadow: 3px 3px 10px #888;\n  box-shadow: 3px 3px 10px #888;\n}\n.home-stat[_ngcontent-%COMP%]   .stat[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  float: right;\n}\n.home-stat[_ngcontent-%COMP%]   .stat[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: #fff;\n}\n.home-stat[_ngcontent-%COMP%]   .stat[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 10px;\n  top: 18px;\n}\n@media (min-width: 768px) and (max-width: 1199px) {\n  .home-stat[_ngcontent-%COMP%]   .stat[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    font-size: 4em;\n    transform: translateY(25%);\n  }\n}\n.home-stat[_ngcontent-%COMP%]   .st_member[_ngcontent-%COMP%] {\n  background: #3498db;\n}\n.home-stat[_ngcontent-%COMP%]   .st_pending[_ngcontent-%COMP%] {\n  background: #c0392b;\n}\n.home-stat[_ngcontent-%COMP%]   .st_item[_ngcontent-%COMP%] {\n  background: #d35400;\n}\n.home-stat[_ngcontent-%COMP%]   .st_comment[_ngcontent-%COMP%] {\n  background: #8e44ad;\n}\n.home-stat[_ngcontent-%COMP%]   .st_interactions[_ngcontent-%COMP%] {\n  background: #218c74;\n}\n.home-stat[_ngcontent-%COMP%]   .st_clients[_ngcontent-%COMP%] {\n  background: #40407a;\n}\n.late[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%] {\n  position: relative;\n}\n.late[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #999;\n  cursor: pointer;\n}\n.late[_ngcontent-%COMP%]   .late_info[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #ccc;\n  padding: 7px;\n}\n.late[_ngcontent-%COMP%]   .late_info[_ngcontent-%COMP%]:nth-child(odd) {\n  background: #eee;\n}\n.late[_ngcontent-%COMP%]   .late_info[_ngcontent-%COMP%]:last-of-type {\n  border-bottom: none;\n}\n.late[_ngcontent-%COMP%]   .member_comment[_ngcontent-%COMP%] {\n  position: relative;\n  overflow: hidden;\n}\n.late[_ngcontent-%COMP%]   .member_comment[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n  float: left;\n  padding: 6px 10px;\n  color: #329de5;\n  font-size: 16px;\n  width: 140px;\n}\n.late[_ngcontent-%COMP%]   .member_comment[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  float: right;\n  width: calc(100% - 140px);\n  background: #eee;\n  padding: 10px;\n  position: relative;\n}\n.late[_ngcontent-%COMP%]   .member_comment[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:before {\n  content: \"\";\n  position: absolute;\n  width: 0;\n  height: 0;\n  top: 10px;\n  left: -20px;\n  border-style: solid;\n  border-color: transparent #eee transparent transparent;\n  border-width: 10px;\n}\n\n\n.home-stat[_ngcontent-%COMP%]   .stat[_ngcontent-%COMP%] {\n  background: cadetblue;\n  padding: 15px;\n  margin-bottom: 5px;\n  text-align: center;\n  border-radius: 10px;\n  color: #fff;\n  border: 1px solid #ccc;\n  position: relative;\n  overflow: hidden;\n  transition: all 0.5s ease-in-out;\n}\n.home-stat[_ngcontent-%COMP%]   .stat[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n  font-size: 14px;\n}\n.home-stat[_ngcontent-%COMP%]   .stat[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 50px;\n  font-weight: 600;\n}\n.home-stat[_ngcontent-%COMP%]   .stat[_ngcontent-%COMP%]:hover {\n  -o-box-shadow: 3px 3px 10px #888;\n  box-shadow: 3px 3px 10px #888;\n}\n.home-stat[_ngcontent-%COMP%]   .st_categories[_ngcontent-%COMP%] {\n  background: #3498db;\n}\n.home-stat[_ngcontent-%COMP%]   .st_pending[_ngcontent-%COMP%] {\n  background: #008385;\n}\n.home-stat[_ngcontent-%COMP%]   .st_item[_ngcontent-%COMP%] {\n  background: #d35400;\n}\n.home-stat[_ngcontent-%COMP%]   .st_animes[_ngcontent-%COMP%] {\n  background: #8e44ad;\n}\n.home-stat[_ngcontent-%COMP%]   .st_episode_coming_soon[_ngcontent-%COMP%] {\n  background: #218c74;\n}\n.home-stat[_ngcontent-%COMP%]   .st_clients[_ngcontent-%COMP%] {\n  background: #40407a;\n}\n.home-stat[_ngcontent-%COMP%]   .stat[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  float: right;\n}\n.home-stat[_ngcontent-%COMP%]   .stat[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: #fff;\n}\n.home-stat[_ngcontent-%COMP%]   .stat[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 10px;\n  top: 18px;\n}\n.late[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%] {\n  position: relative;\n}\n.late[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #999;\n  cursor: pointer;\n}\n.late[_ngcontent-%COMP%]   .late_info[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #ccc;\n  padding: 7px;\n}\n.late[_ngcontent-%COMP%]   .late_info[_ngcontent-%COMP%]:nth-child(odd) {\n  background: #eee;\n}\n.late[_ngcontent-%COMP%]   .late_info[_ngcontent-%COMP%]:last-of-type {\n  border-bottom: none;\n}\n.late[_ngcontent-%COMP%]   .member_comment[_ngcontent-%COMP%] {\n  position: relative;\n  overflow: hidden;\n}\n.late[_ngcontent-%COMP%]   .member_comment[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n  float: left;\n  padding: 6px 10px;\n  color: #329de5;\n  font-size: 16px;\n  width: 140px;\n}\n.late[_ngcontent-%COMP%]   .member_comment[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  float: right;\n  width: calc(100% - 140px);\n  background: #eee;\n  padding: 10px;\n  position: relative;\n}\n.late[_ngcontent-%COMP%]   .member_comment[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:before {\n  content: \"\";\n  position: absolute;\n  width: 0;\n  height: 0;\n  top: 10px;\n  left: -20px;\n  border-style: solid;\n  border-color: transparent #eee transparent transparent;\n  border-width: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZGFzaGJvYXJkL0Q6XFxTZXJ2ZXJzXFxkYXNoYm9hcmRzXFx0b3VyaXN0LXRlc3QtZGVwbG95L3NyY1xcYXBwXFxwYWdlc1xcZGFzaGJvYXJkXFxkYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsaUNBQUE7QUFNTTtFQUpGO0lBS0ksaUJBQUE7RUNITjtBQUNGO0FESU07RUFQRjtJQVFJLGVBQUE7RUNETjtBQUNGO0FESU07RUFaRjtJQWFJLGlCQUFBO0VDRE47QUFDRjtBREtJO0VBQ0UscUJBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUlBLGdDQUFBO0FDSE47QURJTTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtBQ0ZSO0FESU07RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUNGUjtBRElNO0VBR0UsZ0NBQUE7RUFDQSw2QkFBQTtBQ0ZSO0FESU07RUFDRSxZQUFBO0FDRlI7QURJTTtFQUNFLHFCQUFBO0VBQ0EsV0FBQTtBQ0ZSO0FESU07RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0FDRlI7QURHUTtFQUpGO0lBS0ksY0FBQTtJQUNBLDBCQUFBO0VDQVI7QUFDRjtBREdJO0VBQ0UsbUJBQUE7QUNETjtBREdJO0VBQ0UsbUJBQUE7QUNETjtBREdJO0VBQ0UsbUJBQUE7QUNETjtBREdJO0VBQ0UsbUJBQUE7QUNETjtBREdJO0VBQ0UsbUJBQUE7QUNETjtBREdJO0VBQ0UsbUJBQUE7QUNETjtBRE1JO0VBQ0Usa0JBQUE7QUNITjtBRElNO0VBQ0UsV0FBQTtFQUNBLGVBQUE7QUNGUjtBREtJO0VBQ0UsNkJBQUE7RUFDQSxZQUFBO0FDSE47QURJTTtFQUNFLGdCQUFBO0FDRlI7QURJTTtFQUNFLG1CQUFBO0FDRlI7QURLSTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7QUNITjtBRElNO0VBQ0UsY0FBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBQ0ZSO0FESU07RUFDRSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtBQ0ZSO0FER1E7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxzREFBQTtFQUNBLGtCQUFBO0FDRFY7QURNRSwrQkFBQTtBQUNBLGlDQUFBO0FBQ0E7RUFDRSxxQkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBSUEsZ0NBQUE7QUNISjtBREtFO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0FDRko7QURJRTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtBQ0RKO0FER0U7RUFHRSxnQ0FBQTtFQUNBLDZCQUFBO0FDQUo7QURFRTtFQUNFLG1CQUFBO0FDQ0o7QURDRTtFQUNFLG1CQUFBO0FDRUo7QURBRTtFQUNFLG1CQUFBO0FDR0o7QURERTtFQUNFLG1CQUFBO0FDSUo7QURGRTtFQUNFLG1CQUFBO0FDS0o7QURIRTtFQUNFLG1CQUFBO0FDTUo7QURKRTtFQUNFLFlBQUE7QUNPSjtBRExFO0VBQ0UscUJBQUE7RUFDQSxXQUFBO0FDUUo7QURORTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7QUNTSjtBRFBFO0VBQ0Usa0JBQUE7QUNVSjtBRFJFO0VBQ0UsV0FBQTtFQUNBLGVBQUE7QUNXSjtBRFRFO0VBQ0UsNkJBQUE7RUFDQSxZQUFBO0FDWUo7QURWRTtFQUNFLGdCQUFBO0FDYUo7QURYRTtFQUNFLG1CQUFBO0FDY0o7QURaRTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7QUNlSjtBRFpFO0VBQ0UsY0FBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBQ2VKO0FEWkU7RUFDRSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtBQ2VKO0FEWkU7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxzREFBQTtFQUNBLGtCQUFBO0FDZUo7QURiRSwrQkFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAtLS0gU3RhcnQgRGFzaGJvYXJkIFBhZ2UgLS0tICovXHJcbi5ob21lLXN0YXQge1xyXG4gICAgaDEge1xyXG4gICAgICAvLyBAbWVkaWEgKG1pbi13aWR0aDogJzk5MnB4JykgYW5kIChtYXgtd2lkdGg6ICcxMTk5cHgnKSB7XHJcbiAgICAgIC8vICAgZm9udC1zaXplOiAyLjJyZW07XHJcbiAgICAgIC8vIH1cclxuICAgICAgQG1lZGlhIChtaW4td2lkdGg6ICc3NjhweCcpIGFuZCAobWF4LXdpZHRoOiAnOTkxcHgnKSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAyLjJyZW07XHJcbiAgICAgIH1cclxuICAgICAgQG1lZGlhIChtaW4td2lkdGg6ICc1NzZweCcpIGFuZCAobWF4LXdpZHRoOiAnNzY3cHgnKSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAycmVtO1xyXG4gICAgICAgIC8vIGJhY2tncm91bmQ6IG5vbmUgIWltcG9ydGFudDtcclxuICAgICAgICAvLyBjb2xvcjogIzIxYTViOCAhaW1wb3J0YW50O1xyXG4gICAgICB9XHJcbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAnNTc1cHgnKSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjhyZW07XHJcbiAgICAgICAgLy8gYmFja2dyb3VuZDogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgICAgIC8vIGNvbG9yOiAjMjFhNWI4ICFpbXBvcnRhbnQ7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC5zdGF0IHtcclxuICAgICAgYmFja2dyb3VuZDogY2FkZXRibHVlO1xyXG4gICAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgY29sb3I6I2ZmZjtcclxuICAgICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAtd2Via2l0LXRyYW5zaXRpb246YWxsIC41cyBlYXNlLWluLW91dDtcclxuICAgICAgLW1vei10cmFuc2l0aW9uOmFsbCAuNXMgZWFzZS1pbi1vdXQ7XHJcbiAgICAgIC1vLXRyYW5zaXRpb246YWxsIC41cyBlYXNlLWluLW91dDtcclxuICAgICAgdHJhbnNpdGlvbjphbGwgLjVzIGVhc2UtaW4tb3V0O1xyXG4gICAgICBoNiB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgICAgICBmb250LXNpemU6MTRweDtcclxuICAgICAgfVxyXG4gICAgICBzcGFuIHtcclxuICAgICAgICBmb250LXNpemU6NTBweDtcclxuICAgICAgICBmb250LXdlaWdodDogNjAwXHJcbiAgICAgIH1cclxuICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OjNweCAzcHggMTBweCAjODg4O1xyXG4gICAgICAgIC1tb3otYm94LXNoYWRvdzozcHggM3B4IDEwcHggIzg4ODtcclxuICAgICAgICAtby1ib3gtc2hhZG93OjNweCAzcHggMTBweCAjODg4O1xyXG4gICAgICAgIGJveC1zaGFkb3c6M3B4IDNweCAxMHB4ICM4ODg7XHJcbiAgICAgIH1cclxuICAgICAgZGl2IHtcclxuICAgICAgICBmbG9hdDpyaWdodDtcclxuICAgICAgfVxyXG4gICAgICBhIHtcclxuICAgICAgICB0ZXh0LWRlY29yYXRpb246bm9uZTtcclxuICAgICAgICBjb2xvcjojZmZmO1xyXG4gICAgICB9XHJcbiAgICAgIGkge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBsZWZ0OjEwcHg7XHJcbiAgICAgICAgdG9wOjE4cHg7XHJcbiAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6ICc3NjhweCcpIGFuZCAobWF4LXdpZHRoOiAnMTE5OXB4Jykge1xyXG4gICAgICAgICAgZm9udC1zaXplOiA0ZW07XHJcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMjUlKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC5zdF9tZW1iZXIge1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjMzQ5OGRiO1xyXG4gICAgfVxyXG4gICAgLnN0X3BlbmRpbmcge1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjYzAzOTJiXHJcbiAgICB9XHJcbiAgICAuc3RfaXRlbSB7XHJcbiAgICAgIGJhY2tncm91bmQ6ICNkMzU0MDBcclxuICAgIH1cclxuICAgIC5zdF9jb21tZW50IHtcclxuICAgICAgYmFja2dyb3VuZDogIzhlNDRhZFxyXG4gICAgfVxyXG4gICAgLnN0X2ludGVyYWN0aW9ucyB7XHJcbiAgICAgIGJhY2tncm91bmQ6ICMyMThjNzRcclxuICAgIH1cclxuICAgIC5zdF9jbGllbnRzIHtcclxuICAgICAgYmFja2dyb3VuZDogIzQwNDA3YVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmxhdGUge1xyXG4gICAgLmNhcmQtaGVhZGVyIHtcclxuICAgICAgcG9zaXRpb246cmVsYXRpdmU7XHJcbiAgICAgIHNwYW4ge1xyXG4gICAgICAgIGNvbG9yOiAjOTk5O1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlclxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAubGF0ZV9pbmZvIHtcclxuICAgICAgYm9yZGVyLWJvdHRvbToxcHggc29saWQgI2NjYztcclxuICAgICAgcGFkZGluZzo3cHg7XHJcbiAgICAgICY6bnRoLWNoaWxkKG9kZCkge1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNlZWVcclxuICAgICAgfVxyXG4gICAgICAmOmxhc3Qtb2YtdHlwZSB7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTpub25lO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAubWVtYmVyX2NvbW1lbnQge1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgIHNwYW4ge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgIHBhZGRpbmc6IDZweCAxMHB4O1xyXG4gICAgICAgIGNvbG9yOiAjMzI5ZGU1O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICB3aWR0aDogMTQwcHhcclxuICAgICAgfVxyXG4gICAgICBwIHtcclxuICAgICAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDE0MHB4KTtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjZWVlO1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICY6YmVmb3JlIHtcclxuICAgICAgICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgd2lkdGg6IDA7XHJcbiAgICAgICAgICBoZWlnaHQ6IDA7XHJcbiAgICAgICAgICB0b3A6IDEwcHg7XHJcbiAgICAgICAgICBsZWZ0OiAtMjBweDtcclxuICAgICAgICAgIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgICAgICAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50ICNlZWUgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICBib3JkZXItd2lkdGg6IDEwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIC8qIC0tLSBFbmQgRGFzaGJvYXJkIFBhZ2UgLS0tICovXHJcbiAgLyogLS0tIFN0YXJ0IERhc2hib2FyZCBQYWdlIC0tLSAqL1xyXG4gIC5ob21lLXN0YXQgLnN0YXQge1xyXG4gICAgYmFja2dyb3VuZDogY2FkZXRibHVlO1xyXG4gICAgcGFkZGluZzogMTVweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBjb2xvcjojZmZmO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246YWxsIC41cyBlYXNlLWluLW91dDtcclxuICAgIC1tb3otdHJhbnNpdGlvbjphbGwgLjVzIGVhc2UtaW4tb3V0O1xyXG4gICAgLW8tdHJhbnNpdGlvbjphbGwgLjVzIGVhc2UtaW4tb3V0O1xyXG4gICAgdHJhbnNpdGlvbjphbGwgLjVzIGVhc2UtaW4tb3V0O1xyXG4gIH1cclxuICAuaG9tZS1zdGF0IC5zdGF0IGg2IHtcclxuICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICBmb250LXNpemU6MTRweDtcclxuICB9XHJcbiAgLmhvbWUtc3RhdCAuc3RhdCBzcGFuIHtcclxuICAgIGZvbnQtc2l6ZTo1MHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMFxyXG4gIH1cclxuICAuaG9tZS1zdGF0IC5zdGF0OmhvdmVyIHtcclxuICAgIC13ZWJraXQtYm94LXNoYWRvdzozcHggM3B4IDEwcHggIzg4ODtcclxuICAgIC1tb3otYm94LXNoYWRvdzozcHggM3B4IDEwcHggIzg4ODtcclxuICAgIC1vLWJveC1zaGFkb3c6M3B4IDNweCAxMHB4ICM4ODg7XHJcbiAgICBib3gtc2hhZG93OjNweCAzcHggMTBweCAjODg4O1xyXG4gIH1cclxuICAuaG9tZS1zdGF0IC5zdF9jYXRlZ29yaWVzIHtcclxuICAgIGJhY2tncm91bmQ6ICMzNDk4ZGI7XHJcbiAgfVxyXG4gIC5ob21lLXN0YXQgLnN0X3BlbmRpbmcge1xyXG4gICAgYmFja2dyb3VuZDogIzAwODM4NVxyXG4gIH1cclxuICAuaG9tZS1zdGF0IC5zdF9pdGVtIHtcclxuICAgIGJhY2tncm91bmQ6ICNkMzU0MDBcclxuICB9XHJcbiAgLmhvbWUtc3RhdCAuc3RfYW5pbWVzIHtcclxuICAgIGJhY2tncm91bmQ6ICM4ZTQ0YWRcclxuICB9XHJcbiAgLmhvbWUtc3RhdCAuc3RfZXBpc29kZV9jb21pbmdfc29vbiB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMjE4Yzc0XHJcbiAgfVxyXG4gIC5ob21lLXN0YXQgLnN0X2NsaWVudHMge1xyXG4gICAgYmFja2dyb3VuZDogIzQwNDA3YVxyXG4gIH1cclxuICAuaG9tZS1zdGF0IC5zdGF0IGRpdiB7XHJcbiAgICBmbG9hdDpyaWdodDtcclxuICB9XHJcbiAgLmhvbWUtc3RhdCAuc3RhdCBhIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjpub25lO1xyXG4gICAgY29sb3I6I2ZmZjtcclxuICB9XHJcbiAgLmhvbWUtc3RhdCAuc3RhdCBpIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6MTBweDtcclxuICAgIHRvcDoxOHB4O1xyXG4gIH1cclxuICAubGF0ZSAuY2FyZC1oZWFkZXIge1xyXG4gICAgcG9zaXRpb246cmVsYXRpdmU7XHJcbiAgfVxyXG4gIC5sYXRlIC5jYXJkLWhlYWRlciBzcGFuIHtcclxuICAgIGNvbG9yOiAjOTk5O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyXHJcbiAgfVxyXG4gIC5sYXRlIC5sYXRlX2luZm8ge1xyXG4gICAgYm9yZGVyLWJvdHRvbToxcHggc29saWQgI2NjYztcclxuICAgIHBhZGRpbmc6N3B4O1xyXG4gIH1cclxuICAubGF0ZSAubGF0ZV9pbmZvOm50aC1jaGlsZChvZGQpIHtcclxuICAgIGJhY2tncm91bmQ6ICNlZWVcclxuICB9XHJcbiAgLmxhdGUgLmxhdGVfaW5mbzpsYXN0LW9mLXR5cGUge1xyXG4gICAgYm9yZGVyLWJvdHRvbTpub25lO1xyXG4gIH1cclxuICAubGF0ZSAubWVtYmVyX2NvbW1lbnQge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlblxyXG4gIH1cclxuXHJcbiAgLmxhdGUgLm1lbWJlcl9jb21tZW50IHNwYW4ge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIHBhZGRpbmc6IDZweCAxMHB4O1xyXG4gICAgY29sb3I6ICMzMjlkZTU7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICB3aWR0aDogMTQwcHhcclxuICB9XHJcblxyXG4gIC5sYXRlIC5tZW1iZXJfY29tbWVudCBwIHtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAxNDBweCk7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZWVlO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZVxyXG4gIH1cclxuXHJcbiAgLmxhdGUgLm1lbWJlcl9jb21tZW50IHA6YmVmb3JlIHtcclxuICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDA7XHJcbiAgICBoZWlnaHQ6IDA7XHJcbiAgICB0b3A6IDEwcHg7XHJcbiAgICBsZWZ0OiAtMjBweDtcclxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50ICNlZWUgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXItd2lkdGg6IDEwcHg7XHJcbiAgfVxyXG4gIC8qIC0tLSBFbmQgRGFzaGJvYXJkIFBhZ2UgLS0tICovXHJcbiIsIi8qIC0tLSBTdGFydCBEYXNoYm9hcmQgUGFnZSAtLS0gKi9cbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkgYW5kIChtYXgtd2lkdGg6IDk5MXB4KSB7XG4gIC5ob21lLXN0YXQgaDEge1xuICAgIGZvbnQtc2l6ZTogMi4ycmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNTc2cHgpIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xuICAuaG9tZS1zdGF0IGgxIHtcbiAgICBmb250LXNpemU6IDJyZW07XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA1NzVweCkge1xuICAuaG9tZS1zdGF0IGgxIHtcbiAgICBmb250LXNpemU6IDEuOHJlbTtcbiAgfVxufVxuLmhvbWUtc3RhdCAuc3RhdCB7XG4gIGJhY2tncm91bmQ6IGNhZGV0Ymx1ZTtcbiAgcGFkZGluZzogMTVweDtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGNvbG9yOiAjZmZmO1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XG4gIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XG4gIC1vLXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xuICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcbn1cbi5ob21lLXN0YXQgLnN0YXQgaDYge1xuICBtYXJnaW4tYm90dG9tOiAwO1xuICBmb250LXNpemU6IDE0cHg7XG59XG4uaG9tZS1zdGF0IC5zdGF0IHNwYW4ge1xuICBmb250LXNpemU6IDUwcHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG4uaG9tZS1zdGF0IC5zdGF0OmhvdmVyIHtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAzcHggM3B4IDEwcHggIzg4ODtcbiAgLW1vei1ib3gtc2hhZG93OiAzcHggM3B4IDEwcHggIzg4ODtcbiAgLW8tYm94LXNoYWRvdzogM3B4IDNweCAxMHB4ICM4ODg7XG4gIGJveC1zaGFkb3c6IDNweCAzcHggMTBweCAjODg4O1xufVxuLmhvbWUtc3RhdCAuc3RhdCBkaXYge1xuICBmbG9hdDogcmlnaHQ7XG59XG4uaG9tZS1zdGF0IC5zdGF0IGEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiAjZmZmO1xufVxuLmhvbWUtc3RhdCAuc3RhdCBpIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAxMHB4O1xuICB0b3A6IDE4cHg7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIGFuZCAobWF4LXdpZHRoOiAxMTk5cHgpIHtcbiAgLmhvbWUtc3RhdCAuc3RhdCBpIHtcbiAgICBmb250LXNpemU6IDRlbTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMjUlKTtcbiAgfVxufVxuLmhvbWUtc3RhdCAuc3RfbWVtYmVyIHtcbiAgYmFja2dyb3VuZDogIzM0OThkYjtcbn1cbi5ob21lLXN0YXQgLnN0X3BlbmRpbmcge1xuICBiYWNrZ3JvdW5kOiAjYzAzOTJiO1xufVxuLmhvbWUtc3RhdCAuc3RfaXRlbSB7XG4gIGJhY2tncm91bmQ6ICNkMzU0MDA7XG59XG4uaG9tZS1zdGF0IC5zdF9jb21tZW50IHtcbiAgYmFja2dyb3VuZDogIzhlNDRhZDtcbn1cbi5ob21lLXN0YXQgLnN0X2ludGVyYWN0aW9ucyB7XG4gIGJhY2tncm91bmQ6ICMyMThjNzQ7XG59XG4uaG9tZS1zdGF0IC5zdF9jbGllbnRzIHtcbiAgYmFja2dyb3VuZDogIzQwNDA3YTtcbn1cblxuLmxhdGUgLmNhcmQtaGVhZGVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmxhdGUgLmNhcmQtaGVhZGVyIHNwYW4ge1xuICBjb2xvcjogIzk5OTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmxhdGUgLmxhdGVfaW5mbyB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2NjO1xuICBwYWRkaW5nOiA3cHg7XG59XG4ubGF0ZSAubGF0ZV9pbmZvOm50aC1jaGlsZChvZGQpIHtcbiAgYmFja2dyb3VuZDogI2VlZTtcbn1cbi5sYXRlIC5sYXRlX2luZm86bGFzdC1vZi10eXBlIHtcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbn1cbi5sYXRlIC5tZW1iZXJfY29tbWVudCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5sYXRlIC5tZW1iZXJfY29tbWVudCBzcGFuIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZsb2F0OiBsZWZ0O1xuICBwYWRkaW5nOiA2cHggMTBweDtcbiAgY29sb3I6ICMzMjlkZTU7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgd2lkdGg6IDE0MHB4O1xufVxuLmxhdGUgLm1lbWJlcl9jb21tZW50IHAge1xuICBmbG9hdDogcmlnaHQ7XG4gIHdpZHRoOiBjYWxjKDEwMCUgLSAxNDBweCk7XG4gIGJhY2tncm91bmQ6ICNlZWU7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5sYXRlIC5tZW1iZXJfY29tbWVudCBwOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDA7XG4gIGhlaWdodDogMDtcbiAgdG9wOiAxMHB4O1xuICBsZWZ0OiAtMjBweDtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCAjZWVlIHRyYW5zcGFyZW50IHRyYW5zcGFyZW50O1xuICBib3JkZXItd2lkdGg6IDEwcHg7XG59XG5cbi8qIC0tLSBFbmQgRGFzaGJvYXJkIFBhZ2UgLS0tICovXG4vKiAtLS0gU3RhcnQgRGFzaGJvYXJkIFBhZ2UgLS0tICovXG4uaG9tZS1zdGF0IC5zdGF0IHtcbiAgYmFja2dyb3VuZDogY2FkZXRibHVlO1xuICBwYWRkaW5nOiAxNXB4O1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgY29sb3I6ICNmZmY7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcbiAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcbiAgLW8tdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XG4gIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xufVxuXG4uaG9tZS1zdGF0IC5zdGF0IGg2IHtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4uaG9tZS1zdGF0IC5zdGF0IHNwYW4ge1xuICBmb250LXNpemU6IDUwcHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbi5ob21lLXN0YXQgLnN0YXQ6aG92ZXIge1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDNweCAzcHggMTBweCAjODg4O1xuICAtbW96LWJveC1zaGFkb3c6IDNweCAzcHggMTBweCAjODg4O1xuICAtby1ib3gtc2hhZG93OiAzcHggM3B4IDEwcHggIzg4ODtcbiAgYm94LXNoYWRvdzogM3B4IDNweCAxMHB4ICM4ODg7XG59XG5cbi5ob21lLXN0YXQgLnN0X2NhdGVnb3JpZXMge1xuICBiYWNrZ3JvdW5kOiAjMzQ5OGRiO1xufVxuXG4uaG9tZS1zdGF0IC5zdF9wZW5kaW5nIHtcbiAgYmFja2dyb3VuZDogIzAwODM4NTtcbn1cblxuLmhvbWUtc3RhdCAuc3RfaXRlbSB7XG4gIGJhY2tncm91bmQ6ICNkMzU0MDA7XG59XG5cbi5ob21lLXN0YXQgLnN0X2FuaW1lcyB7XG4gIGJhY2tncm91bmQ6ICM4ZTQ0YWQ7XG59XG5cbi5ob21lLXN0YXQgLnN0X2VwaXNvZGVfY29taW5nX3Nvb24ge1xuICBiYWNrZ3JvdW5kOiAjMjE4Yzc0O1xufVxuXG4uaG9tZS1zdGF0IC5zdF9jbGllbnRzIHtcbiAgYmFja2dyb3VuZDogIzQwNDA3YTtcbn1cblxuLmhvbWUtc3RhdCAuc3RhdCBkaXYge1xuICBmbG9hdDogcmlnaHQ7XG59XG5cbi5ob21lLXN0YXQgLnN0YXQgYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6ICNmZmY7XG59XG5cbi5ob21lLXN0YXQgLnN0YXQgaSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMTBweDtcbiAgdG9wOiAxOHB4O1xufVxuXG4ubGF0ZSAuY2FyZC1oZWFkZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5sYXRlIC5jYXJkLWhlYWRlciBzcGFuIHtcbiAgY29sb3I6ICM5OTk7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmxhdGUgLmxhdGVfaW5mbyB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2NjO1xuICBwYWRkaW5nOiA3cHg7XG59XG5cbi5sYXRlIC5sYXRlX2luZm86bnRoLWNoaWxkKG9kZCkge1xuICBiYWNrZ3JvdW5kOiAjZWVlO1xufVxuXG4ubGF0ZSAubGF0ZV9pbmZvOmxhc3Qtb2YtdHlwZSB7XG4gIGJvcmRlci1ib3R0b206IG5vbmU7XG59XG5cbi5sYXRlIC5tZW1iZXJfY29tbWVudCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLmxhdGUgLm1lbWJlcl9jb21tZW50IHNwYW4ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgZmxvYXQ6IGxlZnQ7XG4gIHBhZGRpbmc6IDZweCAxMHB4O1xuICBjb2xvcjogIzMyOWRlNTtcbiAgZm9udC1zaXplOiAxNnB4O1xuICB3aWR0aDogMTQwcHg7XG59XG5cbi5sYXRlIC5tZW1iZXJfY29tbWVudCBwIHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICB3aWR0aDogY2FsYygxMDAlIC0gMTQwcHgpO1xuICBiYWNrZ3JvdW5kOiAjZWVlO1xuICBwYWRkaW5nOiAxMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5sYXRlIC5tZW1iZXJfY29tbWVudCBwOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDA7XG4gIGhlaWdodDogMDtcbiAgdG9wOiAxMHB4O1xuICBsZWZ0OiAtMjBweDtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCAjZWVlIHRyYW5zcGFyZW50IHRyYW5zcGFyZW50O1xuICBib3JkZXItd2lkdGg6IDEwcHg7XG59XG5cbi8qIC0tLSBFbmQgRGFzaGJvYXJkIFBhZ2UgLS0tICovIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DashboardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-dashboard',
          templateUrl: './dashboard.component.html',
          styleUrls: ['./dashboard.component.scss'],
          providers: [src_app_theme_components__WEBPACK_IMPORTED_MODULE_1__["FooterComponent"]]
        }]
      }], function () {
        return [{
          type: _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"]
        }, {
          type: _services_dashboard_service__WEBPACK_IMPORTED_MODULE_5__["DashboardService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/dashboard/dashboard.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/pages/dashboard/dashboard.module.ts ***!
    \*****************************************************/

  /*! exports provided: DashboardModule */

  /***/
  function srcAppPagesDashboardDashboardModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashboardModule", function () {
      return DashboardModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_theme_theme_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/@theme/theme.module */
    "./src/app/@theme/theme.module.ts");
    /* harmony import */


    var _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./dashboard-routing.module */
    "./src/app/pages/dashboard/dashboard-routing.module.ts");
    /* harmony import */


    var _dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./dashboard.component */
    "./src/app/pages/dashboard/dashboard.component.ts");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
    /* harmony import */


    var _store_dashboard_reducer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./store/dashboard.reducer */
    "./src/app/pages/dashboard/store/dashboard.reducer.ts");
    /* harmony import */


    var _ngrx_effects__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ngrx/effects */
    "./node_modules/@ngrx/effects/__ivy_ngcc__/fesm2015/ngrx-effects.js");
    /* harmony import */


    var _store_dashboard_effects__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./store/dashboard.effects */
    "./src/app/pages/dashboard/store/dashboard.effects.ts");

    var DashboardModule = function DashboardModule() {
      _classCallCheck(this, DashboardModule);
    };

    DashboardModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: DashboardModule
    });
    DashboardModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function DashboardModule_Factory(t) {
        return new (t || DashboardModule)();
      },
      imports: [[src_app_theme_theme_module__WEBPACK_IMPORTED_MODULE_1__["ThemeModule"], _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_2__["DashboardRoutingModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["StoreModule"].forFeature(_store_dashboard_reducer__WEBPACK_IMPORTED_MODULE_5__["dashboardsFeatureKey"], _store_dashboard_reducer__WEBPACK_IMPORTED_MODULE_5__["reducer"]), _ngrx_effects__WEBPACK_IMPORTED_MODULE_6__["EffectsModule"].forFeature([_store_dashboard_effects__WEBPACK_IMPORTED_MODULE_7__["DashboardEffects"]])]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DashboardModule, {
        declarations: [_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"]],
        imports: [src_app_theme_theme_module__WEBPACK_IMPORTED_MODULE_1__["ThemeModule"], _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_2__["DashboardRoutingModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["StoreFeatureModule"], _ngrx_effects__WEBPACK_IMPORTED_MODULE_6__["EffectsFeatureModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DashboardModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"]],
          imports: [src_app_theme_theme_module__WEBPACK_IMPORTED_MODULE_1__["ThemeModule"], _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_2__["DashboardRoutingModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["StoreModule"].forFeature(_store_dashboard_reducer__WEBPACK_IMPORTED_MODULE_5__["dashboardsFeatureKey"], _store_dashboard_reducer__WEBPACK_IMPORTED_MODULE_5__["reducer"]), _ngrx_effects__WEBPACK_IMPORTED_MODULE_6__["EffectsModule"].forFeature([_store_dashboard_effects__WEBPACK_IMPORTED_MODULE_7__["DashboardEffects"]])]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/dashboard/services/dashboard.service.ts":
  /*!***************************************************************!*\
    !*** ./src/app/pages/dashboard/services/dashboard.service.ts ***!
    \***************************************************************/

  /*! exports provided: DashboardService */

  /***/
  function srcAppPagesDashboardServicesDashboardServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashboardService", function () {
      return DashboardService;
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

    var DashboardService = /*#__PURE__*/function () {
      function DashboardService(httpClient) {
        _classCallCheck(this, DashboardService);

        this.httpClient = httpClient;
      }

      _createClass(DashboardService, [{
        key: "getStatistics",
        value: function getStatistics() {
          return this.httpClient.get(_AdminConfig__WEBPACK_IMPORTED_MODULE_1__["AdminConfig"].dashboardStatisticAPI);
        }
      }, {
        key: "getAllGuides",
        value: function getAllGuides() {
          return this.httpClient.get(_AdminConfig__WEBPACK_IMPORTED_MODULE_1__["AdminConfig"].guidesAPI);
        }
      }, {
        key: "getAllEvents",
        value: function getAllEvents() {
          return this.httpClient.get(_AdminConfig__WEBPACK_IMPORTED_MODULE_1__["AdminConfig"].eventsAPI);
        }
      }]);

      return DashboardService;
    }();

    DashboardService.ɵfac = function DashboardService_Factory(t) {
      return new (t || DashboardService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
    };

    DashboardService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: DashboardService,
      factory: DashboardService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DashboardService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/dashboard/store/dashboard.actions.ts":
  /*!************************************************************!*\
    !*** ./src/app/pages/dashboard/store/dashboard.actions.ts ***!
    \************************************************************/

  /*! exports provided: loadDashboards, loadDashboardsSuccess, loadDashboardsFailure */

  /***/
  function srcAppPagesDashboardStoreDashboardActionsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "loadDashboards", function () {
      return loadDashboards;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "loadDashboardsSuccess", function () {
      return loadDashboardsSuccess;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "loadDashboardsFailure", function () {
      return loadDashboardsFailure;
    });
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");

    var loadDashboards = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Dashboard/API] Load Dashboards');
    var loadDashboardsSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Dashboard/API] Load Dashboards Success', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
    var loadDashboardsFailure = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Dashboard/API] Load Dashboards Failure', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
    /***/
  },

  /***/
  "./src/app/pages/dashboard/store/dashboard.effects.ts":
  /*!************************************************************!*\
    !*** ./src/app/pages/dashboard/store/dashboard.effects.ts ***!
    \************************************************************/

  /*! exports provided: DashboardEffects */

  /***/
  function srcAppPagesDashboardStoreDashboardEffectsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashboardEffects", function () {
      return DashboardEffects;
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


    var _dashboard_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./dashboard.actions */
    "./src/app/pages/dashboard/store/dashboard.actions.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _services_dashboard_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../services/dashboard.service */
    "./src/app/pages/dashboard/services/dashboard.service.ts");

    var DashboardEffects = function DashboardEffects(actions$, dashboardService) {
      var _this3 = this;

      _classCallCheck(this, DashboardEffects);

      this.actions$ = actions$;
      this.dashboardService = dashboardService;
      this.loadDashboardStatistics$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["createEffect"])(function () {
        return _this3.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_dashboard_actions__WEBPACK_IMPORTED_MODULE_2__["loadDashboards"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function () {
          return _this3.dashboardService.getStatistics().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
            return _dashboard_actions__WEBPACK_IMPORTED_MODULE_2__["loadDashboardsSuccess"]({
              Data: response.Data
            });
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(_dashboard_actions__WEBPACK_IMPORTED_MODULE_2__["loadDashboardsFailure"]({
              error: error
            }));
          }));
        }));
      });
    };

    DashboardEffects.ɵfac = function DashboardEffects_Factory(t) {
      return new (t || DashboardEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Actions"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_dashboard_service__WEBPACK_IMPORTED_MODULE_5__["DashboardService"]));
    };

    DashboardEffects.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: DashboardEffects,
      factory: DashboardEffects.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DashboardEffects, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Actions"]
        }, {
          type: _services_dashboard_service__WEBPACK_IMPORTED_MODULE_5__["DashboardService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/dashboard/store/dashboard.reducer.ts":
  /*!************************************************************!*\
    !*** ./src/app/pages/dashboard/store/dashboard.reducer.ts ***!
    \************************************************************/

  /*! exports provided: dashboardsFeatureKey, adapter, initialState, reducer, selectIds, selectEntities, selectAll, selectTotal */

  /***/
  function srcAppPagesDashboardStoreDashboardReducerTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "dashboardsFeatureKey", function () {
      return dashboardsFeatureKey;
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


    var _dashboard_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./dashboard.actions */
    "./src/app/pages/dashboard/store/dashboard.actions.ts");

    var dashboardsFeatureKey = 'dashboards';
    var adapter = Object(_ngrx_entity__WEBPACK_IMPORTED_MODULE_1__["createEntityAdapter"])();
    var initialState = adapter.getInitialState({
      // additional entity state properties
      Data: undefined,
      error: undefined
    });
    var reducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createReducer"])(initialState, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_dashboard_actions__WEBPACK_IMPORTED_MODULE_2__["loadDashboardsSuccess"], function (state, action) {
      return Object.assign(Object.assign({}, state), {
        Data: action.Data
      });
    }));

    var _adapter$getSelectors = adapter.getSelectors(),
        selectIds = _adapter$getSelectors.selectIds,
        selectEntities = _adapter$getSelectors.selectEntities,
        selectAll = _adapter$getSelectors.selectAll,
        selectTotal = _adapter$getSelectors.selectTotal;
    /***/

  },

  /***/
  "./src/app/pages/dashboard/store/dashboard.selector.ts":
  /*!*************************************************************!*\
    !*** ./src/app/pages/dashboard/store/dashboard.selector.ts ***!
    \*************************************************************/

  /*! exports provided: getDashboardStatisticsSelector, getDashboardStatisticsErrorSelector */

  /***/
  function srcAppPagesDashboardStoreDashboardSelectorTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getDashboardStatisticsSelector", function () {
      return getDashboardStatisticsSelector;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getDashboardStatisticsErrorSelector", function () {
      return getDashboardStatisticsErrorSelector;
    });
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
    /* harmony import */


    var _dashboard_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./dashboard.reducer */
    "./src/app/pages/dashboard/store/dashboard.reducer.ts");

    var dashboardFeatureState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"])(_dashboard_reducer__WEBPACK_IMPORTED_MODULE_1__["dashboardsFeatureKey"]);
    var getDashboardStatisticsSelector = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(dashboardFeatureState, function (state) {
      return state.Data;
    });
    var getDashboardStatisticsErrorSelector = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(dashboardFeatureState, function (state) {
      return state.error;
    });
    /***/
  }
}]);
//# sourceMappingURL=dashboard-dashboard-module-es5.js.map