(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-pages-module"],{

/***/ "./src/app/@theme/admin-service/guard/after-login.service.ts":
/*!*******************************************************************!*\
  !*** ./src/app/@theme/admin-service/guard/after-login.service.ts ***!
  \*******************************************************************/
/*! exports provided: AfterLoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AfterLoginService", function() { return AfterLoginService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _token_token_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../token/token.service */ "./src/app/@theme/admin-service/token/token.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




class AfterLoginService {
    constructor(tokenService, router) {
        this.tokenService = tokenService;
        this.router = router;
    }
    canActivate(next, state) {
        // return true;
        const flag = this.tokenService.loggedIn();
        if (flag) {
            return flag;
        }
        else {
            this.router.navigate(['/login']);
            return;
        }
        return flag;
    }
}
AfterLoginService.ɵfac = function AfterLoginService_Factory(t) { return new (t || AfterLoginService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_token_token_service__WEBPACK_IMPORTED_MODULE_1__["TokenService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
AfterLoginService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AfterLoginService, factory: AfterLoginService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AfterLoginService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _token_token_service__WEBPACK_IMPORTED_MODULE_1__["TokenService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/@theme/admin-service/guard/super-admin.service.ts":
/*!*******************************************************************!*\
  !*** ./src/app/@theme/admin-service/guard/super-admin.service.ts ***!
  \*******************************************************************/
/*! exports provided: SuperAdminService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuperAdminService", function() { return SuperAdminService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _token_token_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../token/token.service */ "./src/app/@theme/admin-service/token/token.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




class SuperAdminService {
    constructor(tokenService, router) {
        this.tokenService = tokenService;
        this.router = router;
    }
    canActivate(route, state) {
        const isSuperAdmin = this.tokenService.isSuperAdmin();
        if (isSuperAdmin) {
            return isSuperAdmin;
        }
        else {
            this.router.navigate(['/']);
            return;
        }
    }
}
SuperAdminService.ɵfac = function SuperAdminService_Factory(t) { return new (t || SuperAdminService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_token_token_service__WEBPACK_IMPORTED_MODULE_1__["TokenService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
SuperAdminService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SuperAdminService, factory: SuperAdminService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SuperAdminService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _token_token_service__WEBPACK_IMPORTED_MODULE_1__["TokenService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/@theme/components/index.ts":
/*!********************************************!*\
  !*** ./src/app/@theme/components/index.ts ***!
  \********************************************/
/*! exports provided: SidebarComponent, FooterComponent, NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sidebar/sidebar.component */ "./src/app/@theme/components/sidebar/sidebar.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_0__["SidebarComponent"]; });

/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/@theme/components/footer/footer.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return _footer_footer_component__WEBPACK_IMPORTED_MODULE_1__["FooterComponent"]; });

/* harmony import */ var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./not-found/not-found.component */ "./src/app/@theme/components/not-found/not-found.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_2__["NotFoundComponent"]; });






/***/ }),

/***/ "./src/app/@theme/store/shared/shared.selector.ts":
/*!********************************************************!*\
  !*** ./src/app/@theme/store/shared/shared.selector.ts ***!
  \********************************************************/
/*! exports provided: getLoadSpinner */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLoadSpinner", function() { return getLoadSpinner; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
/* harmony import */ var _shared_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared.reducer */ "./src/app/@theme/store/shared/shared.reducer.ts");


const sharedFeatureState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"])(_shared_reducer__WEBPACK_IMPORTED_MODULE_1__["SHARED_STATE_KEY"]);
const getLoadSpinner = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(sharedFeatureState, state => state.showLoading);


/***/ }),

/***/ "./src/app/pages/pages-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/pages-routing.module.ts ***!
  \***********************************************/
/*! exports provided: PagesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagesRoutingModule", function() { return PagesRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _theme_admin_service_guard_after_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../@theme/admin-service/guard/after-login.service */ "./src/app/@theme/admin-service/guard/after-login.service.ts");
/* harmony import */ var _theme_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../@theme/components */ "./src/app/@theme/components/index.ts");
/* harmony import */ var _pages_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages.component */ "./src/app/pages/pages.component.ts");
/* harmony import */ var _theme_admin_service_guard_super_admin_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../@theme/admin-service/guard/super-admin.service */ "./src/app/@theme/admin-service/guard/super-admin.service.ts");








const routes = [
    {
        path: '',
        component: _pages_component__WEBPACK_IMPORTED_MODULE_4__["PagesComponent"],
        children: [
            {
                path: '',
                loadChildren: () => __webpack_require__.e(/*! import() | dashboard-dashboard-module */ "dashboard-dashboard-module").then(__webpack_require__.bind(null, /*! ./dashboard/dashboard.module */ "./src/app/pages/dashboard/dashboard.module.ts")).then(m => m.DashboardModule),
                canActivate: [_theme_admin_service_guard_after_login_service__WEBPACK_IMPORTED_MODULE_2__["AfterLoginService"]]
            },
            {
                path: 'admins',
                loadChildren: () => Promise.all(/*! import() | admins-admins-module */[__webpack_require__.e("common"), __webpack_require__.e("admins-admins-module")]).then(__webpack_require__.bind(null, /*! ./admins/admins.module */ "./src/app/pages/admins/admins.module.ts")).then(m => m.AdminsModule),
                canActivate: [_theme_admin_service_guard_after_login_service__WEBPACK_IMPORTED_MODULE_2__["AfterLoginService"], _theme_admin_service_guard_super_admin_service__WEBPACK_IMPORTED_MODULE_5__["SuperAdminService"]]
            },
            {
                path: 'regions',
                loadChildren: () => Promise.all(/*! import() | regions-regions-module */[__webpack_require__.e("common"), __webpack_require__.e("regions-regions-module")]).then(__webpack_require__.bind(null, /*! ./regions/regions.module */ "./src/app/pages/regions/regions.module.ts")).then(m => m.RegionsModule),
                canActivate: [_theme_admin_service_guard_after_login_service__WEBPACK_IMPORTED_MODULE_2__["AfterLoginService"]]
            },
            {
                path: 'events',
                loadChildren: () => __webpack_require__.e(/*! import() | events-events-module */ "events-events-module").then(__webpack_require__.bind(null, /*! ./events/events.module */ "./src/app/pages/events/events.module.ts")).then(m => m.EventsModule),
                canActivate: [_theme_admin_service_guard_after_login_service__WEBPACK_IMPORTED_MODULE_2__["AfterLoginService"]]
            },
            {
                path: 'guides',
                loadChildren: () => __webpack_require__.e(/*! import() | guides-guides-module */ "guides-guides-module").then(__webpack_require__.bind(null, /*! ./guides/guides.module */ "./src/app/pages/guides/guides.module.ts")).then(m => m.GuidesModule),
                canActivate: [_theme_admin_service_guard_after_login_service__WEBPACK_IMPORTED_MODULE_2__["AfterLoginService"]]
            },
            {
                path: 'orders',
                loadChildren: () => __webpack_require__.e(/*! import() | accept-orders-accept-orders-module */ "accept-orders-accept-orders-module").then(__webpack_require__.bind(null, /*! ./accept-orders/accept-orders.module */ "./src/app/pages/accept-orders/accept-orders.module.ts")).then(m => m.AcceptOrdersModule),
                canActivate: [_theme_admin_service_guard_after_login_service__WEBPACK_IMPORTED_MODULE_2__["AfterLoginService"]]
            },
            { path: '**', component: _theme_components__WEBPACK_IMPORTED_MODULE_3__["NotFoundComponent"] }
        ]
    }
];
class PagesRoutingModule {
}
PagesRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: PagesRoutingModule });
PagesRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function PagesRoutingModule_Factory(t) { return new (t || PagesRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PagesRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PagesRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pages/pages.component.ts":
/*!******************************************!*\
  !*** ./src/app/pages/pages.component.ts ***!
  \******************************************/
/*! exports provided: PagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagesComponent", function() { return PagesComponent; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _theme_store_shared_shared_selector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../@theme/store/shared/shared.selector */ "./src/app/@theme/store/shared/shared.selector.ts");
/* harmony import */ var _sidebar_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../sidebar-menu */ "./src/app/sidebar-menu.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
/* harmony import */ var _theme_components_header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../@theme/components/header/header.component */ "./src/app/@theme/components/header/header.component.ts");
/* harmony import */ var _theme_components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../@theme/components/sidebar/sidebar.component */ "./src/app/@theme/components/sidebar/sidebar.component.ts");
/* harmony import */ var _theme_components_loading_spinner_loading_spinner_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../@theme/components/loading-spinner/loading-spinner.component */ "./src/app/@theme/components/loading-spinner/loading-spinner.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");











function PagesComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-header", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("menus", ctx_r0.menu);
} }
function PagesComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-sidebar", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("menus", ctx_r1.menu);
} }
function PagesComponent_app_loading_spinner_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-loading-spinner");
} }
function PagesComponent_router_outlet_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "router-outlet");
} }
class PagesComponent {
    constructor(document, render, store) {
        this.document = document;
        this.render = render;
        this.store = store;
        this.menu = _sidebar_menu__WEBPACK_IMPORTED_MODULE_3__["SIDEBAR_MENU_ITEM"];
        this.isMobile = false;
    }
    ngOnInit() {
        this.showLoadingIndicator$ = this.store.select(_theme_store_shared_shared_selector__WEBPACK_IMPORTED_MODULE_2__["getLoadSpinner"]);
        this.onResize();
    }
    onResize() {
        const screenWidth = window.innerWidth;
        if (screenWidth < 768) {
            this.isMobile = true;
            this.render.removeClass(this.document.getElementById('body_div'), 'col-8');
            this.render.addClass(this.document.getElementById('body_div'), 'col-12');
            if (screenWidth < 576) {
                this.render.removeClass(this.document.getElementById('parent_body_div'), 'row');
                this.render.addClass(this.document.getElementById('parent_body_div'), 'pb-5');
                this.render.removeClass(this.document.getElementById('body_div'), 'pr-0');
                this.render.removeClass(this.document.getElementById('body_div'), 'col-12');
            }
        }
        else {
            this.isMobile = false;
        }
    }
    toggleSidebar() {
        // this.render.addClass(this.document.getElementById('sidebar_div'), 'd-none');
        // this.render.removeClass(this.document.getElementById('body_div'), 'col-8');
        // this.render.addClass(this.document.getElementById('body_div'), 'col-12');
    }
}
PagesComponent.ɵfac = function PagesComponent_Factory(t) { return new (t || PagesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"])); };
PagesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: PagesComponent, selectors: [["app-pages"]], decls: 8, vars: 8, consts: [["id", "mobile_header", "class", "d-md-none", 4, "ngIf"], ["id", "parent_body_div", 1, "row", "w-100"], ["id", "sidebar_div", "class", "col-4 col-xl-3 px-0 d-none d-md-block", 4, "ngIf"], ["id", "body_div", 1, "col-8", "col-xl-9", "pr-0"], [4, "ngIf"], ["id", "mobile_header", 1, "d-md-none"], [3, "menus"], ["id", "sidebar_div", 1, "col-4", "col-xl-3", "px-0", "d-none", "d-md-block"]], template: function PagesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, PagesComponent_div_0_Template, 2, 1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, PagesComponent_div_2_Template, 2, 1, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, PagesComponent_app_loading_spinner_4_Template, 1, 0, "app-loading-spinner", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](5, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, PagesComponent_router_outlet_6_Template, 1, 0, "router-outlet", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](7, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isMobile);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.isMobile);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](5, 4, ctx.showLoadingIndicator$));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](7, 6, ctx.showLoadingIndicator$));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["NgIf"], _theme_components_header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"], _theme_components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_6__["SidebarComponent"], _theme_components_loading_spinner_loading_spinner_component__WEBPACK_IMPORTED_MODULE_7__["LoadingSpinnerComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterOutlet"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["AsyncPipe"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](PagesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-pages',
                // template: `
                //   <router-outlet></router-outlet>`
                template: `
  <div *ngIf="isMobile" id="mobile_header" class="d-md-none">
    <app-header [menus]="menu"></app-header>
  </div>
  <div id="parent_body_div" class="row w-100">
    <div *ngIf="!isMobile" id="sidebar_div" class="col-4 col-xl-3 px-0 d-none d-md-block">
      <app-sidebar [menus]="menu"></app-sidebar>
    </div>
    <div id="body_div" class="col-8 col-xl-9 pr-0">
      
      <app-loading-spinner *ngIf="showLoadingIndicator$ | async"></app-loading-spinner>
      <router-outlet *ngIf="!(showLoadingIndicator$ | async)"></router-outlet>
    </div>
  </div>`
            }]
    }], function () { return [{ type: Document, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]]
            }] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] }, { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/pages.module.ts":
/*!***************************************!*\
  !*** ./src/app/pages/pages.module.ts ***!
  \***************************************/
/*! exports provided: PagesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagesModule", function() { return PagesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _theme_theme_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../@theme/theme.module */ "./src/app/@theme/theme.module.ts");
/* harmony import */ var _pages_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages-routing.module */ "./src/app/pages/pages-routing.module.ts");
/* harmony import */ var _pages_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages.component */ "./src/app/pages/pages.component.ts");





class PagesModule {
}
PagesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: PagesModule });
PagesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function PagesModule_Factory(t) { return new (t || PagesModule)(); }, imports: [[
            _pages_routing_module__WEBPACK_IMPORTED_MODULE_2__["PagesRoutingModule"],
            _theme_theme_module__WEBPACK_IMPORTED_MODULE_1__["ThemeModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PagesModule, { declarations: [_pages_component__WEBPACK_IMPORTED_MODULE_3__["PagesComponent"]], imports: [_pages_routing_module__WEBPACK_IMPORTED_MODULE_2__["PagesRoutingModule"],
        _theme_theme_module__WEBPACK_IMPORTED_MODULE_1__["ThemeModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PagesModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_pages_component__WEBPACK_IMPORTED_MODULE_3__["PagesComponent"]],
                imports: [
                    _pages_routing_module__WEBPACK_IMPORTED_MODULE_2__["PagesRoutingModule"],
                    _theme_theme_module__WEBPACK_IMPORTED_MODULE_1__["ThemeModule"]
                ]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=pages-pages-module-es2015.js.map