(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Angular5\g12-local-session-storage\src\main.ts */"zUnb");


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "Q1sU":
/*!**************************************************************!*\
  !*** ./src/app/session-storage/session-storage.component.ts ***!
  \**************************************************************/
/*! exports provided: SessionStorageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SessionStorageComponent", function() { return SessionStorageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");


function SessionStorageComponent_h3_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "key1 = null");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function SessionStorageComponent_h3_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("key1 = ", ctx_r1.key1, "");
} }
class SessionStorageComponent {
    constructor() {
        this.key1 = '';
        this.index = 1;
    }
    /**
     * window.localStorage v?? window.sessionStorage c??ng interface l?? Storage
     *
     * store.length
     * store.key(index):
     * store.getItem(key)
     * store.setItem(key, value)
     * store.removeItem(key)
     *
     * store.clear()
     */
    ngOnInit() {
        /**
         * Ctrl + click: jump code ????? xem c??c function c???a n??
         *
         * window.localStorage v?? window.sessionStorage c??ng interface l?? Storage
         */
        this.store = window.sessionStorage;
        /**
         * store: l?? bi???n to??n c???c b??? "window." v???n ok
         */
        this.showAll();
    }
    onSetItem() {
        this.index++;
        // save data v??o store
        this.store.setItem('key1', 'value' + '-' + this.index);
        //show value
        this.onGetItem();
        this.onGetKeys();
        this.onGetItem();
    }
    onSetItem2() {
        // save data v??o store
        this.store.setItem('key2', 'value2');
        this.store.setItem('key3', 'value3');
        this.store.setItem('key4', 'value4');
        this.store.setItem('key5', 'value5');
        //show value
        //????? show c??c key l??u ??? store
        this.showAll();
    }
    onGetItem() {
        // l???y data store
        this.key1 = this.store.getItem('key1');
    }
    onRemoveItem() {
        //remove from store
        this.store.removeItem('key1');
        //show value
        this.showAll();
    }
    //????? show c??c key l??u ??? store
    onGetKeys() {
        this.keys = []; //reset
        for (let i = 0; i < this.store.length; i++) {
            this.keys.push(this.store.key(i));
        }
    }
    onClear() {
        this.store.clear();
        //????? show c??c key l??u ??? store
        this.showAll();
    }
    // c???p nh???t l???i th??ng tin c???a window.localStorage
    showAll() {
        //show value
        this.onGetItem();
        this.onGetKeys();
        this.onGetItem();
    }
}
SessionStorageComponent.??fac = function SessionStorageComponent_Factory(t) { return new (t || SessionStorageComponent)(); };
SessionStorageComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: SessionStorageComponent, selectors: [["app-session-storage"]], decls: 41, vars: 6, consts: [[1, "container"], ["href", "https://developer.mozilla.org/en-US/docs/Web/API/Window/sessionStorage"], [2, "color", "blue"], [4, "ngIf"], [3, "click"]], template: function SessionStorageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "session-storage.component:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, "https://developer.mozilla.org/en-US/docs/Web/API/Window/sessionStorage");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, " window.sessionStorage: l\u00E0 bi\u1EBFn global lu\u00F4n \u1EDF TypeScript. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](7, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, " + b\u1EA3n ch\u1EA5t l\u00E0 1 HashMap. c\u00F9ng ch\u00F9ng Storage interface v\u1EDBi window.localStorage => d\u00F9ng gi\u1ED1ng h\u1EC7t ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](9, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, " + kh\u00E1c bi\u1EC7t \u1EDF ch\u1ED7 n\u00F3 ch\u1EC9 c\u00F3 t\u00E1c d\u1EE5ng trong 1 browser window tab th\u00F4i (c\u00E1c tab kh\u00E1c nhau s\u1EBD kh\u00E1c nhau) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](11, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12, " + khi reload URL tr\u00EAn window Tab th\u00EC window.localStorage v\u00E0 window.sessionStorage ko b\u1ECB x\u00F3a (tested) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, " + x\u00F3a window.localStorage \u1EDF Browser cookies ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](15, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](16, " + m\u1EDF browser tab kh\u00E1c \u0111\u1EC3 xem k\u1EBFt qu\u1EA3 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](17, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](18, " + reload URL tr\u00EAn window tab address bar \u0111\u1EC3 xem k\u1EBFt qu\u1EA3 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](19, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](20, " + test v\u1EDBi Browser kh\u00E1c (chrome, edge, firefox) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](25, "json");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](26, SessionStorageComponent_h3_26_Template, 2, 0, "h3", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](27, SessionStorageComponent_h3_27_Template, 2, 1, "h3", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function SessionStorageComponent_Template_button_click_28_listener() { return ctx.onSetItem(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](29, "store.setItem(key, value)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function SessionStorageComponent_Template_button_click_30_listener() { return ctx.onGetItem(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](31, "store.getItem(key)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function SessionStorageComponent_Template_button_click_32_listener() { return ctx.onRemoveItem(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](33, "store.removeItem(key)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function SessionStorageComponent_Template_button_click_35_listener() { return ctx.onSetItem2(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](36, "add key2,key3, key4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function SessionStorageComponent_Template_button_click_37_listener() { return ctx.onGetKeys(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](38, "store.key(n)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function SessionStorageComponent_Template_button_click_39_listener() { return ctx.onClear(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](40, "store.clear()");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("store.length = ", ctx.store.length, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("store.keys = ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](25, 4, ctx.keys), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.key1 == null);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.key1 != null);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["JsonPipe"]], styles: ["h3[_ngcontent-%COMP%] {\n  color: red;\n}\n\nbutton[_ngcontent-%COMP%] {\n  margin: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHNlc3Npb24tc3RvcmFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFVBQUE7QUFDRjs7QUFFQTtFQUNFLFlBQUE7QUFDRiIsImZpbGUiOiJzZXNzaW9uLXN0b3JhZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMyB7XHJcbiAgY29sb3I6IHJlZDtcclxufVxyXG5cclxuYnV0dG9uIHtcclxuICBtYXJnaW46IDEwcHg7XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ "RUEf":
/*!*******************************!*\
  !*** ./src/app/app.routes.ts ***!
  \*******************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");



const routes = [];
class AppRoutingModule {
}
AppRoutingModule.??fac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["????setNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _local_storage_local_storage_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./local-storage/local-storage.component */ "pX95");
/* harmony import */ var _session_storage_session_storage_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./session-storage/session-storage.component */ "Q1sU");



class AppComponent {
    constructor() {
        this.title = 'g12-local-session-storage';
    }
}
AppComponent.??fac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "app-local-storage");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "app-session-storage");
    } }, directives: [_local_storage_local_storage_component__WEBPACK_IMPORTED_MODULE_1__["LocalStorageComponent"], _session_storage_session_storage_component__WEBPACK_IMPORTED_MODULE_2__["SessionStorageComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_routes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.routes */ "RUEf");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _session_storage_session_storage_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./session-storage/session-storage.component */ "Q1sU");
/* harmony import */ var _local_storage_local_storage_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./local-storage/local-storage.component */ "pX95");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");






class AppModule {
}
AppModule.??fac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????defineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????defineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routes__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["????setNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _session_storage_session_storage_component__WEBPACK_IMPORTED_MODULE_3__["SessionStorageComponent"],
        _local_storage_local_storage_component__WEBPACK_IMPORTED_MODULE_4__["LocalStorageComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routes__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"]] }); })();


/***/ }),

/***/ "pX95":
/*!**********************************************************!*\
  !*** ./src/app/local-storage/local-storage.component.ts ***!
  \**********************************************************/
/*! exports provided: LocalStorageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalStorageComponent", function() { return LocalStorageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");


function LocalStorageComponent_h3_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "key1 = null");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function LocalStorageComponent_h3_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("key1 = ", ctx_r1.key1, "");
} }
class LocalStorageComponent {
    constructor() {
        this.key1 = '';
        this.index = 1;
    }
    /**
     * localStorage.length
     * localStorage.key(index):
     * localStorage.getItem(key)
     * localStorage.setItem(key, value)
     * localStorage.removeItem(key)
     *
     * localStorage.clear()
     */
    ngOnInit() {
        /**
         * Ctrl + click: jump code ????? xem c??c function c???a n??
         *
         *  window.localStorage v?? window.sessionStorage c??ng interface l?? Storage
         */
        this.store = window.localStorage;
        /**
         * localStorage: l?? bi???n to??n c???c b??? "window." v???n ok
         */
        this.showAll();
    }
    onSetItem() {
        this.index++;
        // save data v??o localStorage
        localStorage.setItem('key1', 'value' + '-' + this.index);
        this.showAll();
    }
    // c???p nh???t l???i th??ng tin c???a window.localStorage
    showAll() {
        //show value
        this.onGetItem();
        this.onGetKeys();
        this.onGetItem();
    }
    onSetItem2() {
        // save data v??o localStorage
        localStorage.setItem('key2', 'value2');
        localStorage.setItem('key3', 'value3');
        localStorage.setItem('key4', 'value4');
        localStorage.setItem('key5', 'value5');
        //show value
        //????? show c??c key l??u ??? localStorage
        this.showAll();
    }
    onGetItem() {
        // l???y data localStorage
        this.key1 = localStorage.getItem('key1');
    }
    onRemoveItem() {
        //remove from localStorage
        localStorage.removeItem('key1');
        //show value
        this.showAll();
    }
    //????? show c??c key l??u ??? localStorage
    onGetKeys() {
        this.keys = []; //reset
        for (let i = 0; i < localStorage.length; i++) {
            this.keys.push(localStorage.key(i));
        }
    }
    onClear() {
        localStorage.clear();
        //????? show c??c key l??u ??? localStorage
        this.showAll();
    }
}
LocalStorageComponent.??fac = function LocalStorageComponent_Factory(t) { return new (t || LocalStorageComponent)(); };
LocalStorageComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: LocalStorageComponent, selectors: [["app-local-storage"]], decls: 45, vars: 6, consts: [[1, "container"], ["href", "https://developer.mozilla.org/en-US/docs/Web/API/Storage"], [4, "ngIf"], [3, "click"]], template: function LocalStorageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "local-storage.component:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, "https://developer.mozilla.org/en-US/docs/Web/API/Storage");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, " window.localStorage: l\u00E0 bi\u1EBFn global lu\u00F4n \u1EDF TypeScript. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](7, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, " + b\u1EA3n ch\u1EA5t l\u00E0 1 HashMap => d\u00F9ng gi\u1ED1ng v\u1EADy, ch\u1EC9 kh\u00E1c t\u00EAn method ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](9, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, " + window.localStorage: Browser h\u1ED7 tr\u1EE3 l\u01B0u data cho 1 domain \u1EDF local ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](11, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12, " + c\u00E1c window tab c\u1EE7a c\u00F9ng 1 domain \u0111\u1EC1u read/write \u0111c v\u00E0o localStorage ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](13, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, " + domain kh\u00E1c ko th\u1EC3 truy c\u1EADp \u0111c => xem \u1EDF cookies c\u1EE7a browser s\u1EBD th\u1EA5y ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](15, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](16, " + khi reload URL th\u00EC window.localStorage v\u00E0 window.sessionStorage ko b\u1ECB x\u00F3a (tested) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](18, " + x\u00F3a window.localStorage \u1EDF Browser cookies ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](19, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](20, " + m\u1EDF browser tab kh\u00E1c \u0111\u1EC3 xem k\u1EBFt qu\u1EA3 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](21, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](22, " + reload URL tr\u00EAn window tab address bar \u0111\u1EC3 xem k\u1EBFt qu\u1EA3 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](23, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](24, " + test v\u1EDBi Browser kh\u00E1c (chrome, edge, firefox) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](29, "json");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](30, LocalStorageComponent_h3_30_Template, 2, 0, "h3", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](31, LocalStorageComponent_h3_31_Template, 2, 1, "h3", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function LocalStorageComponent_Template_button_click_32_listener() { return ctx.onSetItem(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](33, "localStorage.setItem(key, value)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function LocalStorageComponent_Template_button_click_34_listener() { return ctx.onGetItem(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](35, "localStorage.getItem(key)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function LocalStorageComponent_Template_button_click_36_listener() { return ctx.onRemoveItem(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](37, "localStorage.removeItem(key)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function LocalStorageComponent_Template_button_click_39_listener() { return ctx.onSetItem2(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](40, "add key2,key3, key4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](41, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function LocalStorageComponent_Template_button_click_41_listener() { return ctx.onGetKeys(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](42, "localStorage.key(n)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](43, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function LocalStorageComponent_Template_button_click_43_listener() { return ctx.onClear(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](44, "localStorage.clear()");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("localStorage.length = ", ctx.store.length, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("localStorage.keys = ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](29, 4, ctx.keys), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.key1 == null);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.key1 != null);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["JsonPipe"]], styles: ["h3[_ngcontent-%COMP%] {\n  color: red;\n}\n\nbutton[_ngcontent-%COMP%] {\n  margin: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGxvY2FsLXN0b3JhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxVQUFBO0FBQ0Y7O0FBRUE7RUFDRSxZQUFBO0FBQ0YiLCJmaWxlIjoibG9jYWwtc3RvcmFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImgzIHtcclxuICBjb2xvcjogcmVkO1xyXG59XHJcblxyXG5idXR0b24ge1xyXG4gIG1hcmdpbjogMTBweDtcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map