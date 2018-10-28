(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _pages_basic_basic_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/basic/basic.page */ "./src/app/pages/basic/basic.page.ts");
/* harmony import */ var _pages_lines_lines_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/lines/lines.page */ "./src/app/pages/lines/lines.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var appRoutes = [
    { path: 'basic', component: _pages_basic_basic_page__WEBPACK_IMPORTED_MODULE_2__["BasicPage"] },
    { path: 'lines', component: _pages_lines_lines_page__WEBPACK_IMPORTED_MODULE_3__["LinesPage"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(appRoutes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!navigating\" \n  class=\"pictureBg\">\n  <p>&nbsp;\n  <svg height=\"470\" width=\"460\"\n  viewBox=\"0 0 110 100\">\n    <g fill=\"none\">\n      <path stroke=\"#894635\" \n        d=\"M5 0 110 0\"\n        stroke-linecap=\"round\"\n        stroke-width=\"10\"\n        stroke-dasharray=\"1,10\"\n        (click)=\"clickDot('1')\"/>\n      <path stroke=\"#894635\" \n        d=\"M5 10 110 10\"\n        stroke-linecap=\"round\"\n        stroke-width=\"10\"\n        stroke-dasharray=\"1,10\"\n        (click)=\"clickDot('2')\"/>\n      <path stroke=\"#894635\" \n        d=\"M5 20 110 20\" \n        stroke-linecap=\"round\"\n        stroke-width=\"10\"\n        stroke-dasharray=\"1,10\"/>\n      <path stroke=\"#894635\"\n        d=\"M5 30 110 30\" \n        stroke-linecap=\"round\"\n        stroke-width=\"10\"\n        stroke-dasharray=\"1,10\"/>\n      <path stroke=\"#894635\"\n        d=\"M5 40 110 40\" \n        stroke-linecap=\"round\"\n        stroke-width=\"10\"\n        stroke-dasharray=\"1,10\"/>\n      <path stroke=\"#894635\"\n        d=\"M5 50 110 50\" \n        stroke-linecap=\"round\"\n        stroke-width=\"10\"\n        stroke-dasharray=\"1,10\"/>\n        \n      <path stroke=\"#fff\"\n        d=\"M5 60 110 60\" \n        stroke-linecap=\"round\"\n        stroke-width=\"10\"\n        stroke-dasharray=\"1,10\"/>\n      <path stroke=\"#fff\"\n        d=\"M5 70 110 70\" \n        stroke-linecap=\"round\"\n        stroke-width=\"10\"\n        stroke-dasharray=\"1,10\"/>\n      <path stroke=\"#fff\"\n        d=\"M5 80 110 80\" \n        stroke-linecap=\"round\"\n        stroke-width=\"10\"\n        stroke-dasharray=\"1,10\"/>\n      <path stroke=\"#894635\"\n        d=\"M5 90 110 90\" \n        stroke-linecap=\"round\"\n        stroke-width=\"10\"\n        stroke-dasharray=\"1,10\"/>\n      <path stroke=\"#894635\"\n        d=\"M5 100 110 100\" \n        stroke-linecap=\"round\"\n        stroke-width=\"10\"\n        stroke-dasharray=\"1,10\"/>\n    </g>\n  </svg>\n</div> \n<div *ngIf=\"navigating\" >\n  <router-outlet></router-outlet>\n</div>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".pictureBg {\n  background-color: #caa04c;\n  border: solid black 15px;\n  max-width: 480px; }\n\nbody {\n  background-color: tomato; }\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(router) {
        this.router = router;
        this.title = 'Stringybark';
    }
    AppComponent.prototype.clickDot = function (arg) {
        this.navigating = true;
        if (arg === '2') {
            this.router.navigate(['lines']);
        }
        else {
            this.router.navigate(['basic']);
        }
    };
    AppComponent.prototype.ngOnDestroy = function () {
        this.navigating = false;
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _pages_basic_basic_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/basic/basic.module */ "./src/app/pages/basic/basic.module.ts");
/* harmony import */ var _pages_lines_lines_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/lines/lines.module */ "./src/app/pages/lines/lines.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _pages_basic_basic_module__WEBPACK_IMPORTED_MODULE_4__["BasicModule"],
                _pages_lines_lines_module__WEBPACK_IMPORTED_MODULE_5__["LinesModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/dot/dot.component.html":
/*!***************************************************!*\
  !*** ./src/app/components/dot/dot.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<svg attr.height=\"{{dotHeight}}\" \n  attr.width=\"{{dotWidth}}\">\n  <circle \n    attr.cx=\"{{dotCx}}\" \n    attr.cy=\"{{dotCy}}\" \n    attr.r=\"{{dotR}}\" \n    attr.fill=\"{{dotFill}}\" />\n</svg>\n"

/***/ }),

/***/ "./src/app/components/dot/dot.component.scss":
/*!***************************************************!*\
  !*** ./src/app/components/dot/dot.component.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/dot/dot.component.ts":
/*!*************************************************!*\
  !*** ./src/app/components/dot/dot.component.ts ***!
  \*************************************************/
/*! exports provided: DotComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DotComponent", function() { return DotComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DotComponent = /** @class */ (function () {
    function DotComponent() {
    }
    DotComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], DotComponent.prototype, "dotHeight", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], DotComponent.prototype, "dotWidth", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], DotComponent.prototype, "dotCx", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], DotComponent.prototype, "dotCy", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], DotComponent.prototype, "dotR", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], DotComponent.prototype, "dotFill", void 0);
    DotComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'dot-component',
            template: __webpack_require__(/*! ./dot.component.html */ "./src/app/components/dot/dot.component.html"),
            styles: [__webpack_require__(/*! ./dot.component.scss */ "./src/app/components/dot/dot.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], DotComponent);
    return DotComponent;
}());



/***/ }),

/***/ "./src/app/pages/basic/basic.module.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/basic/basic.module.ts ***!
  \*********************************************/
/*! exports provided: BasicModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicModule", function() { return BasicModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _basic_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./basic.page */ "./src/app/pages/basic/basic.page.ts");
/* harmony import */ var _components_dot_dot_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/dot/dot.component */ "./src/app/components/dot/dot.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    {
        path: 'basic',
        component: _basic_page__WEBPACK_IMPORTED_MODULE_3__["BasicPage"]
    }
];
var BasicModule = /** @class */ (function () {
    function BasicModule() {
    }
    BasicModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)
            ],
            declarations: [_basic_page__WEBPACK_IMPORTED_MODULE_3__["BasicPage"], _components_dot_dot_component__WEBPACK_IMPORTED_MODULE_4__["DotComponent"]],
            entryComponents: [_components_dot_dot_component__WEBPACK_IMPORTED_MODULE_4__["DotComponent"]]
        })
    ], BasicModule);
    return BasicModule;
}());



/***/ }),

/***/ "./src/app/pages/basic/basic.page.html":
/*!*********************************************!*\
  !*** ./src/app/pages/basic/basic.page.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div *ngFor=\"let row of rows; let i = index;\">\n        <div *ngFor=\"let col of cols;let j = index;\" \n            id=\"{{row+'*'+col}}\"\n            class=\"group2\">\n            <dot-component id=\"{{row+'-'+col}}\"\n                class=\"invisible\"\n                dotHeight=\"100\" \n                dotWidth=\"100\"\n                dotCx=\"50\" \n                dotCy=\"50\" \n                dotR=\"40\" \n                dotFill=\"brown\">\n            </dot-component>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/pages/basic/basic.page.scss":
/*!*********************************************!*\
  !*** ./src/app/pages/basic/basic.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  display: flex; }\n\n.group1 {\n  background-color: brown; }\n\n.group2 {\n  background-color: black; }\n\n.invisible {\n  opacity: 0; }\n"

/***/ }),

/***/ "./src/app/pages/basic/basic.page.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/basic/basic.page.ts ***!
  \*******************************************/
/*! exports provided: BasicPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicPage", function() { return BasicPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var BasicPage = /** @class */ (function () {
    function BasicPage(document, renderer) {
        this.renderer = renderer;
        // two sections of rows and columns of dots that snake along this path
        this.order = [[0, 0], [1, 0], [1, 1], [0, 1], [2, 0], [2, 1], [2, 2], [1, 2], [0, 2],
            [3, 0], [3, 1], [3, 2], [4, 2], [4, 1], [4, 0], [5, 0], [5, 1], [5, 2],
            [0, 3], [1, 3], [2, 3], [3, 3], [4, 3], [5, 3],
            [5, 4], [4, 4], [3, 4], [2, 4], [1, 4], [0, 4],
            [0, 5], [1, 5], [2, 5], [3, 5], [4, 5], [5, 5]];
        // coloring in the background on an up and back patter
        this.bgOrder1 = [[0, 0], [1, 0], [2, 0], [3, 0], [4, 0], [5, 0],
            [5, 1], [4, 1], [3, 1], [2, 1], [1, 1], [0, 1],
            [0, 2], [1, 2], [2, 2], [3, 2], [4, 2], [5, 2]];
        this.bgOrder2 = [[0, 3], [1, 3], [2, 3], [3, 3], [4, 3], [5, 3],
            [5, 4], [4, 4], [3, 4], [2, 4], [1, 4], [0, 4],
            [0, 5], [1, 5], [2, 5], [3, 5], [4, 5], [5, 5]];
        this.origDelay = 500;
        this.rows = [0, 1, 2, 3, 4, 5, 6, 7, 8];
        this.cols = [0, 1, 2, 3, 4, 5, 6, 7, 8];
    }
    BasicPage.prototype.ngOnInit = function () {
        // for (let i = 0; i < this.rows.length; i++) {
        //   for (let j = 0; j < this.cols.length; j++) {
        //     let item = document.getElementById(i+'-'+j);
        //   }
        // }
    };
    /** This kicks off the promise chain to paint the background and then
     * follow a specific consecutive route to fill in the dots.
     */
    BasicPage.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.runBgOrder1().then(function () {
            _this.runBgOrder2().then(function () {
                setTimeout(function () {
                    _this.runOrder();
                }, _this.origDelay * 5);
            });
        });
    };
    BasicPage.prototype.runOrder = function () {
        var _this = this;
        var delay = 0;
        var _loop_1 = function (i) {
            var row = this_1.order[i][0];
            var col = this_1.order[i][1];
            setTimeout(function () {
                var item = document.getElementById(row + '-' + col);
                if (item) {
                    _this.renderer.setStyle(item, 'opacity', '1');
                }
            }, delay);
            delay += this_1.origDelay;
        };
        var this_1 = this;
        for (var i = 0; i < this.order.length; i++) {
            _loop_1(i);
        }
    };
    BasicPage.prototype.runBgOrder1 = function () {
        var _this = this;
        return new Promise(function (resolve) {
            var delay1 = 0;
            var _loop_2 = function (i) {
                var row = _this.bgOrder1[i][0];
                var col = _this.bgOrder1[i][1];
                setTimeout(function () {
                    var item = document.getElementById(row + '*' + col);
                    if (item) {
                        _this.renderer.setStyle(item, 'background', 'bisque');
                    }
                }, delay1);
                delay1 += _this.origDelay / 4;
            };
            for (var i = 0; i < _this.bgOrder1.length; i++) {
                _loop_2(i);
            }
            setTimeout(function () {
                resolve();
            }, delay1);
        });
    };
    BasicPage.prototype.runBgOrder2 = function () {
        var _this = this;
        return new Promise(function (resolve) {
            var delay2 = _this.origDelay / 4;
            var _loop_3 = function (i) {
                var row = _this.bgOrder2[i][0];
                var col = _this.bgOrder2[i][1];
                setTimeout(function () {
                    var item = document.getElementById(row + '*' + col);
                    if (item) {
                        _this.renderer.setStyle(item, 'background', 'white');
                    }
                }, delay2);
                delay2 += _this.origDelay / 4;
            };
            for (var i = 0; i < _this.bgOrder2.length; i++) {
                _loop_3(i);
            }
            resolve();
        });
    };
    BasicPage.prototype.inOrder = function () {
        var _this = this;
        var delay = this.origDelay;
        var _loop_4 = function (i) {
            var _loop_5 = function (j) {
                setTimeout(function () {
                    var item = document.getElementById(i + '-' + j);
                    _this.renderer.setStyle(item, 'opacity', '1');
                }, delay);
                delay += this_2.origDelay;
            };
            for (var j = 0; j < this_2.cols.length; j++) {
                _loop_5(j);
            }
        };
        var this_2 = this;
        for (var i = 0; i < this.rows.length; i++) {
            _loop_4(i);
        }
    };
    BasicPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-page-detail',
            template: __webpack_require__(/*! ./basic.page.html */ "./src/app/pages/basic/basic.page.html"),
            styles: [__webpack_require__(/*! ./basic.page.scss */ "./src/app/pages/basic/basic.page.scss")],
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"])),
        __metadata("design:paramtypes", [Object, _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]])
    ], BasicPage);
    return BasicPage;
}());



/***/ }),

/***/ "./src/app/pages/lines/lines.module.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/lines/lines.module.ts ***!
  \*********************************************/
/*! exports provided: LinesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinesModule", function() { return LinesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _lines_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lines.page */ "./src/app/pages/lines/lines.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    {
        path: 'lines',
        component: _lines_page__WEBPACK_IMPORTED_MODULE_3__["LinesPage"]
    }
];
var LinesModule = /** @class */ (function () {
    function LinesModule() {
    }
    LinesModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)
            ],
            declarations: [_lines_page__WEBPACK_IMPORTED_MODULE_3__["LinesPage"]],
        })
    ], LinesModule);
    return LinesModule;
}());



/***/ }),

/***/ "./src/app/pages/lines/lines.page.html":
/*!*********************************************!*\
  !*** ./src/app/pages/lines/lines.page.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<svg    width=\"763.29248\"\n        height=\"618.78619\">\n    <g\n        id=\"g5184\"\n        style=\"stroke-linecap:round;stroke-linejoin:round\"\n        transform=\"translate(8.7663171,-210.49892)\">\n    <g\n        id=\"g5186\"\n        style=\"stroke-width:20\">\n          \n        <path stroke=\"#000000\"\n         class=\"path\"\n         style=\"fill:none;stroke-width:17.56599998;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1\"\n         d=\"M 1.6656186,287.47832 C 34.029369,240.138 100.43712,219.03262 132.8492,221.14267 c 34.84729,0.37391 80.56199,13.0128 121.78331,64.83223\"\n         id=\"path0\"\n         inkscape:connector-curvature=\"0\" />\n\n        <path stroke=\"#000000\"\n         class=\"path\"\n         style=\"fill:none\"\n         d=\"m 254.31846,286.85265 c 32.36454,-47.33935 88.58697,-68.44473 120.99904,-66.33468 34.8473,0.37391 80.56199,13.01279 121.78333,64.83223\"\n         id=\"path1\"\n         inkscape:connector-curvature=\"0\" />\n\n        <path stroke=\"#000000\"\n         class=\"path\"\n         stroke=\"#000000\"\n         style=\"fill:none\"\n         d=\"m 497.85246,286.72565 c 32.36454,-47.33935 88.58697,-68.44473 120.99904,-66.33468 34.8473,0.37391 85.51245,13.55905 126.73378,65.37751\"\n         id=\"path2\"\n         inkscape:connector-curvature=\"0\" /> \n\n        <path stroke=\"#696969\"\n         class=\"path\"\n         d=\"M -6.156,73.814 C 43.882,12.362 120,-12.638 160.914,-10.47 c 43.99,0.383 99.17,17.886 154.91,82.884\"\n         transform=\"matrix(0.7922,0,0,0.97372,4.104,268.525)\"\n         id=\"path3\"\n         style=\"fill:none;\"\n         inkscape:connector-curvature=\"0\" />\n\n        <path stroke=\"#696969\"\n         class=\"path\"\n         stroke=\"#A7A7A7\"\n         d=\"M 9.962,73.814 C 60,12.362 120,-12.638 160.915,-10.47 c 43.988,0.383 99.168,17.886 154.91,82.884\"\n         transform=\"matrix(0.7922,0,0,0.97372,247.073,266.424)\"\n         id=\"path4\"\n         style=\"fill:none\" />\n\n        <path stroke=\"#696969\"\n         class=\"path\"\n         d=\"M 9.962,73.814 C 60,12.362 120,-12.638 160.915,-10.47 c 43.988,0.383 104.223,17.886 159.966,82.884\"\n         transform=\"matrix(0.7922,0,0,0.97372,490.607,266.297)\"\n         id=\"path5\"\n         style=\"fill:none\" /> \n\n        <path stroke=\"#696969\"\n         class=\"path\"\n         d=\"M -4.5,133.614 C 47.08,54.65 128.35,28.474 162.08,29.374 c 36.27,-0.9 97.92,22.988 152.17,99.19\"\n         transform=\"matrix(0.7922,0,0,0.97372,4.104,268.525)\"\n         id=\"path6\"\n         style=\"fill:none\" /> \n\n        <path stroke=\"#696969\"\n         class=\"path\"\n         d=\"M 10.93,133.614 C 62.51,54.65 128.35,28.474 162.08,29.374 c 36.27,-0.9 97.92,22.988 152.17,99.19\"\n         transform=\"matrix(0.7922,0,0,0.97372,247.073,266.424)\"\n         id=\"path7\"\n         style=\"fill:none\" />\n\n        <path stroke=\"#A9A9A9\"\n         class=\"path\"\n         d=\"M 10.93,133.614 C 62.51,54.65 128.35,28.474 162.08,29.374 c 36.27,-0.9 104.49,26.462 158.738,102.664\"\n         transform=\"matrix(0.7922,0,0,0.97372,490.607,266.297)\"\n         id=\"path8\"\n         style=\"fill:none\" />\n\n        <path stroke=\"#A9A9A9\"\n         class=\"path\"\n         d=\"M -3.054,211.616 C 46.454,102.362 125,72.362 158.73,73.266 195,72.36 260,92.36 314.85,210.898\"\n         transform=\"matrix(0.7922,0,0,0.97372,4.104,268.525)\"\n         id=\"path9\"\n         style=\"fill:none\" />\n\n        <path stroke=\"#A9A9A9\"\n         class=\"path\"\n         d=\"M 10.493,211.616 C 60,102.362 125,72.362 158.73,73.266 195,72.36 260,92.36 314.85,210.898\"\n         transform=\"matrix(0.7922,0,0,0.97372,247.073,266.424)\"\n         id=\"path10\"\n         style=\"fill:none\" />\n        \n        <path stroke=\"#A5A5A5\"\n         class=\"path\"\n         d=\"M 10.493,211.616 C 60,102.362 125,72.362 158.73,73.266 195,72.36 266.066,92.36 320.916,210.898\"\n         transform=\"matrix(0.7922,0,0,0.97372,490.607,266.297)\"\n         id=\"path11\"\n         style=\"fill:none\" />\n\n        <path stroke=\"#000000\"\n         class=\"path\"\n         style=\"fill:none;stroke-width:17.56599998;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1\"\n         d=\"m -2.0544977,570.18366 c 8.69677,0.23174 31.6578907,-70.62099 47.3212707,-106.85798 24.558204,-56.81267 47.999404,-82.38353 82.186007,-82.21605 12.72273,-0.19864 42.50945,-8.50058 85.22884,91.11682 11.81962,27.55822 23.95611,98.19187 38.44862,101.15977\"\n         id=\"path12\"\n         inkscape:connector-curvature=\"0\" />\n      \n        <path stroke=\"#000000\"\n         class=\"path\"\n         style=\"fill:none\"\n         d=\"m 254.35094,573.80988 c 10.64955,3.55018 27.92664,-66.02796 35.98965,-95.70986 16.36368,-60.24016 46.36746,-97.33111 83.44242,-97.14805 12.46923,-0.19864 54.1643,-8.86085 85.30885,88.84708 11.3047,35.46776 30.90372,107.55712 38.36783,103.42465\"\n         id=\"path13\" />\n      \n        <path stroke=\"#000000\"\n         class=\"path\"\n         style=\"fill:none\"\n         d=\"m 497.88732,573.68288 c 12.11511,3.67774 25.10719,-53.94117 41.83608,-100.67486 20.55759,-57.42806 43.64547,-92.34761 77.59599,-92.18207 12.48507,-0.1967 50.93846,-8.39931 91.00635,86.42738 19.58319,46.34421 26.67338,110.10826 36.12907,104.63595\"\n         id=\"path14\" />\n\n        <path stroke=\"#696969\"\n         class=\"path\"\n         d=\"m 0.49,617.524 c 26.03,-0.078 49.537,-36.134 72.634,-92.34\"\n         id=\"path15\"\n         style=\"fill:none;stroke-width:16.98399925\" />\n      \n        <path stroke=\"#696969\"\n         class=\"path\"\n         style=\"fill:none;\"\n         d=\"M 73.513071,523.92133 C 85.055425,491.81486 104.73922,419.90564 128.95915,419.8258 c 25.77977,0.0798 52.37234,35.17563 66.56302,107.72069\"\n         id=\"path16\"\n         inkscape:connector-curvature=\"0\" />\n\n        <path stroke=\"#696969\"\n         class=\"path\"\n         d=\"m -66.12,264.458 c 12.8,48.954 41.332,102.976 71.903,103.06 32.543,-0.084 64.467,-35.282 82.38,-109.785\"\n         transform=\"matrix(0.7922,0,0,0.97372,247.073,266.424)\"\n         id=\"path17\"\n         style=\"fill:none;\"\n         inkscape:connector-curvature=\"0\" />\n\n        <path stroke=\"#696969\"\n         class=\"path\"\n         style=\"fill:none;;stroke-width:19.22871399\"\n         d=\"m 317.25628,520.3827 c 10.1104,-44.19246 35.03886,-95.18236 59.18534,-95.25458 25.70489,0.0723 48.24082,38.07655 62.38985,105.3325\"\n         id=\"path18\"\n         inkscape:connector-curvature=\"0\" />\n\n         <path stroke=\"#696969\"\n         class=\"path\"\n         d=\"m 437.902,526.793 c 10.238,46.75 34.85,91.332 59.303,91.41 26.028,-0.078 51.268,-21.425 65.596,-92.572\"\n         id=\"path19\"\n         style=\"fill:none;stroke-width:16.10000038\" />\n\n        <path stroke=\"#696969\"\n         class=\"path\"\n         d=\"m 562.93,525.148 c 10.143,-47.668 33.018,-104.466 57.237,-104.546 25.78,0.08 50.78,35.08 64.972,107.626\"\n         id=\"path20\"\n         style=\"fill:none;stroke-width:16.60000038\"\n         inkscape:connector-curvature=\"0\" />\n\n        <path stroke=\"#696969\"\n         class=\"path\"\n         d=\"m 684.31,524.613 c 10.14,47.668 37.44,95.143 61.66,95.223\"\n         id=\"path21\"\n         style=\"fill:none;stroke-width:16.87199974\"\n         inkscape:connector-curvature=\"0\" /> \n\n         <path stroke=\"#000000\"\n         class=\"path\"\n         style=\"fill:none\"\n         d=\"M 0.5813568,657.82162 C 16.468928,658.07479 81.747,661.85087 134.0829,464.45738\"\n         id=\"path22\"\n         inkscape:connector-curvature=\"0\" />\n\n         <path stroke=\"#000000\"\n         class=\"path\"\n         style=\"fill:none\"\n         d=\"M 133.94394,465.97412 C 160.83755,581.58098 201.925,659.08227 253.37601,658.82911 269.262,659.08422 324.716,663.95282 377.0519,466.5603\"\n         id=\"path23\"\n         inkscape:connector-curvature=\"0\" />\n\n         <path stroke=\"#000000\"\n         class=\"path\"\n         style=\"fill:none\"\n         d=\"M 377.47794,466.10112 C 404.37155,581.70798 445.459,659.20927 496.91001,658.95611 512.796,659.21122 568.25,664.07982 620.5859,466.6873\"\n         id=\"path24\"\n         inkscape:connector-curvature=\"0\" />\n\n         <path stroke=\"#000000\"\n         class=\"path\"\n         style=\"fill:none\"\n         d=\"m 622.44032,465.79212 c 26.89123,115.60686 70.20001,193.65344 121.65023,193.40222\"\n         id=\"path25\"\n         inkscape:connector-curvature=\"0\" />\n\n        <path stroke=\"#000000\"\n        class=\"path\"\n         style=\"fill:none\"\n         d=\"M 0.7112776,698.82886 C 29.444372,699.70813 89.669,681.32527 133.12117,565.90245\"\n         id=\"path26\"\n         inkscape:connector-curvature=\"0\" />\n\n        <path stroke=\"#000000\"\n         class=\"path\"\n         d=\"M 10.493,211.616 C 60,102.362 125,72.362 158.73,73.266 195,72.36 260,92.36 314.85,210.898\"\n         transform=\"matrix(0.7922,0,0,-0.97372,126.666,773.36)\"\n         id=\"path27\"\n         style=\"fill:none;\"\n         inkscape:connector-curvature=\"0\" />\n\n         <path stroke=\"#000000\"\n         class=\"path\"\n         d=\"M 10.493,211.616 C 60,102.362 125,72.362 158.73,73.266 195,72.36 260,92.36 314.85,210.898\"\n         transform=\"matrix(0.7922,0,0,-0.97372,370.2,773.487)\"\n         id=\"path28\"\n         style=\"fill:none;\"\n         inkscape:connector-curvature=\"0\" />\n\n         <path stroke=\"#000000\"\n         class=\"path\"\n         style=\"fill:none\"\n         d=\"m 623.47255,567.12327 c 39.21945,106.3828 94.02622,134.64892 120.74713,133.76965\"\n         id=\"path29\" />\n\n         <path stroke=\"#000000\"\n         class=\"path\"\n         style=\"fill:none\"\n         d=\"M 2.6030512,742.65697 C 31.336145,743.53527 89.669,720.27407 132.64506,646.07369\"\n         id=\"path30\"\n         inkscape:connector-curvature=\"0\" />\n\n      <path stroke=\"#000000\"\n         class=\"path\"\n         d=\"M 10.93,133.614 C 62.51,54.65 128.35,28.474 162.08,29.374 c 36.27,-0.9 97.92,22.988 152.17,99.19\"\n         transform=\"matrix(0.7922,0,0,-0.97372,126.666,773.36)\"\n         id=\"path31\"\n         style=\"fill:none;\"\n         inkscape:connector-curvature=\"0\" />\n\n         <path stroke=\"#202020\"\n         class=\"path\"\n         d=\"M 10.93,133.614 C 62.51,54.65 128.35,28.474 162.08,29.374 c 36.27,-0.9 97.92,22.988 152.17,99.19\"\n         transform=\"matrix(0.7922,0,0,-0.97372,370.2,773.487)\"\n         id=\"path32\"\n         style=\"fill:none\" />\n\n         <path stroke=\"#000000\"\n         class=\"path\"\n         style=\"fill:none\"\n         d=\"m 623.81875,643.07538 c 40.86167,76.88882 92.94882,102.37692 119.67131,101.50057\"\n         id=\"path33\"\n         inkscape:connector-curvature=\"0\" />\n\n         <path stroke=\"#696969\"\n         class=\"path\"\n         style=\"fill:none\"\n         d=\"M -0.103104,781.45485 C 34.743397,781.08191 89.734753,764.03889 133.89357,700.74904\"\n         id=\"path34\"\n         inkscape:connector-curvature=\"0\" />\n\n        <path stroke=\"#696969\"\n         class=\"path\"\n         d=\"M 9.962,73.814 C 60,12.362 120,-12.638 160.915,-10.47 c 43.988,0.383 99.168,17.886 154.91,82.884\"\n         transform=\"matrix(0.7922,0,0,-0.97372,126.666,773.36)\"\n         id=\"path35\"\n         style=\"fill:none;\"\n         inkscape:connector-curvature=\"0\" />\n\n         <path stroke=\"#696969\"\n         class=\"path\"\n         d=\"M 9.962,73.814 C 60,12.362 120,-12.638 160.915,-10.47 c 43.988,0.383 99.168,17.886 154.91,82.884\"\n         transform=\"matrix(0.7922,0,0,-0.97372,370.2,773.487)\"\n         id=\"path36\"\n         style=\"fill:none\" />\n\n         <path stroke=\"#696969\"\n         class=\"path\"\n         style=\"fill:none\"\n         d=\"m 623.0519,701.30383 c 39.6401,59.83704 88.99416,84.18004 121.40702,82.06902\"\n         id=\"path37\"\n         inkscape:connector-curvature=\"0\" />\n\n         <path stroke=\"#000000\"\n         class=\"path\"\n         style=\"fill:none\"\n         d=\"M 1.7561894,817.167 C 36.603483,816.79309 92.502699,804.15421 133.72483,752.33478\"\n         id=\"path38\"\n         inkscape:connector-curvature=\"0\" />\n\n      <path stroke=\"#000000\"\n         class=\"path\"\n         style=\"fill:none\"\n         d=\"m 133.91146,752.93135 c 32.36454,47.33935 88.58697,68.44473 120.99904,66.33468 34.8473,-0.37391 80.56199,-13.01279 121.78333,-64.83223\"\n         id=\"path39\"\n         inkscape:connector-curvature=\"0\" />\n\n      <path stroke=\"#000000\"\n         class=\"path\"\n         style=\"fill:none\"\n         d=\"m 377.44546,753.05835 c 32.36454,47.33935 88.58697,68.44473 120.99904,66.33468 34.8473,-0.37391 80.56199,-13.01279 121.78333,-64.83223\"\n         id=\"path40\"\n         inkscape:connector-curvature=\"0\" />\n      \n        <path stroke=\"#000000\"\n         class=\"path\"\n         style=\"fill:none\"\n         d=\"m 622.40467,752.74935 c 32.36533,47.33935 89.31659,68.44473 121.72945,66.33468\"\n         id=\"path41\"\n         inkscape:connector-curvature=\"0\" />\n      \n        \n\n    </g>\n  </g>\n</svg>\n"

/***/ }),

/***/ "./src/app/pages/lines/lines.page.scss":
/*!*********************************************!*\
  !*** ./src/app/pages/lines/lines.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  display: flex; }\n\nsvg {\n  background-color: brown; }\n\n.group2 {\n  background-color: black; }\n\n.path {\n  stroke-dasharray: 1000;\n  stroke-dashoffset: 1000;\n  -webkit-animation: dash 10s linear forwards;\n          animation: dash 10s linear forwards;\n  opacity: 0; }\n\n@-webkit-keyframes dash {\n  to {\n    stroke-dashoffset: 0; } }\n\n@keyframes dash {\n  to {\n    stroke-dashoffset: 0; } }\n"

/***/ }),

/***/ "./src/app/pages/lines/lines.page.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/lines/lines.page.ts ***!
  \*******************************************/
/*! exports provided: LinesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinesPage", function() { return LinesPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var LinesPage = /** @class */ (function () {
    function LinesPage(document, renderer) {
        this.renderer = renderer;
        this.origDelay = 400;
    }
    LinesPage.prototype.ngOnInit = function () {
    };
    /** This kicks off the promise chain to paint the background and then
     * follow a specific consecutive route to fill in the dots.
     */
    LinesPage.prototype.ngAfterViewInit = function () {
        this.inOrder();
    };
    LinesPage.prototype.inOrder = function () {
        var _this = this;
        var delay = this.origDelay;
        var paths = document.getElementsByClassName('path');
        var origSmallDelay = 4;
        var smallDelay = -4;
        var _loop_1 = function (i) {
            setTimeout(function () {
                var item = document.getElementById('path' + i);
                _this.renderer.setStyle(item, 'opacity', '1');
                _this.renderer.setStyle(item, 'animation-delay', smallDelay + 's');
                smallDelay += origSmallDelay;
            }, delay);
            delay += this_1.origDelay;
        };
        var this_1 = this;
        for (var i = 0; i < paths.length; i++) {
            _loop_1(i);
        }
    };
    LinesPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-page-detail',
            template: __webpack_require__(/*! ./lines.page.html */ "./src/app/pages/lines/lines.page.html"),
            styles: [__webpack_require__(/*! ./lines.page.scss */ "./src/app/pages/lines/lines.page.scss")],
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('path', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('inactive', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                        'stroke-dashoffset': '0',
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('active', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                        'stroke-dashoffset': '1',
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('inactive => active', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('dash 10s linear forwards'))
                ])
            ]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"])),
        __metadata("design:paramtypes", [Object, _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]])
    ], LinesPage);
    return LinesPage;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/tim/repos/stringybark/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map