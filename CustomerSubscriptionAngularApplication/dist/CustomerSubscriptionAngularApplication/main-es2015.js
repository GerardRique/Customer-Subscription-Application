(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-dark bg-dark\">\n  <a class=\"navbar-brand\" href=\"#\">Digicel</a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n    <ul class=\"navbar-nav mr-auto\">\n      <li class=\"nav-item active\">\n        <a class=\"nav-link\" href=\"#\">Customers<span class=\"sr-only\">(current)</span></a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"#\">Services</a>\n      </li>\n      <li class=\"nav-item dropdown\">\n        <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n          Dropdown\n        </a>\n        <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\n          <a class=\"dropdown-item\" href=\"#\">Action</a>\n          <a class=\"dropdown-item\" href=\"#\">Another action</a>\n          <div class=\"dropdown-divider\"></div>\n          <a class=\"dropdown-item\" href=\"#\">Something else here</a>\n        </div>\n      </li>\n    </ul>\n    \n  </div>\n</nav>\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/customer-listing/customer-listing.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/customer-listing/customer-listing.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<input [(ngModel)]=\"searchText\" placeholder=\"Search Customer\">\n<table class=\"table table-bordered\">\n  <thead>\n    <th>First Name</th>\n    <th>Last Name</th>\n    <th>Email</th>\n    <th>Contact Number</th>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let customer of customers | filter : searchText\">\n      <td>{{customer.first_name}}</td>\n      <td>{{customer.last_name}}</td>\n      <td>{{customer.email}}</td>\n      <td>{{customer.phone_number}}</td>\n      <td><button type=\"button\" class=\"btn btn-success\" (click)=\"goToEditPage(customer.id)\">Edit</button></td>\n    </tr>\n  </tbody>\n</table>\n<button type=\"button\" class=\"btn btn-primary\" (click)=\"createCustomerPage()\">Create New Customer</button>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/edit-customer/edit-customer.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/edit-customer/edit-customer.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 *ngIf=\"subscribedToServices === false\">No services found</h2>\n<table class=\"table table-bordered\" *ngIf=\"subscribedToServices === true\">\n  <thead>\n    <th>Service Name</th>\n    <th>Price</th>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let service of services\">\n      <td>{{service.name}}</td>\n      <td>{{service.price}}</td>\n    </tr>\n  </tbody>\n</table>\n<button type=\"button\" class=\"btn btn-primary\" (click)=\"goToSubscribePage()\">Subscribe to service</button>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/login/login.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/login/login.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"login-form\">    \n  <form action=\"/examples/actions/confirmation.php\" method=\"post\">\n  <div class=\"avatar\"><i class=\"material-icons\">&#xE7FF;</i></div>\n    <h4 class=\"modal-title\">Login to Your Account</h4>\n      <div class=\"form-group\">\n          <input type=\"text\" class=\"form-control\" placeholder=\"Username\" required=\"required\">\n      </div>\n      <div class=\"form-group\">\n          <input type=\"password\" class=\"form-control\" placeholder=\"Password\" required=\"required\">\n      </div>\n      <div class=\"form-group small clearfix\">\n          <label class=\"checkbox-inline\"><input type=\"checkbox\"> Remember me</label>\n          <a href=\"#\" class=\"forgot-link\">Forgot Password?</a>\n      </div> \n      <input type=\"submit\" class=\"btn btn-primary btn-block btn-lg\" value=\"Login\">              \n  </form>\t\t\t\n  <div class=\"text-center small\">Don't have an account? <a href=\"#\">Sign up</a></div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/new-customer/new-customer.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/new-customer/new-customer.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form>\n  <div class=\"form-group\">\n    <label for=\"firstName\">First Name</label>\n    <input type=\"text\" class=\"form-control\" id=\"firstName\" [(ngModel)]=\"customer.firstName\" name=\"firstName\" placeholder=\"Enter First Name\">\n  </div>\n\n  <div class=\"form-group\">\n    <label for=\"lastName\">Last Name</label>\n    <input type=\"text\" class=\"form-control\" id=\"lastName\" [(ngModel)]=\"customer.lastName\" name=\"lastName\" placeholder=\"Enter Last Name\">\n  </div>\n\n  <div class=\"form-group\">\n    <label for=\"emailAddress\">Email Address</label>\n    <input type=\"email\" class=\"form-control\" id=\"emailAddress\" [(ngModel)]=\"customer.email\" name=\"email\" placeholder=\"Enter Email Address\">\n  </div>\n\n  <div class=\"form-group\">\n    <label for=\"contactNumber\">Password</label>\n    <input type=\"text\" class=\"form-control\" id=\"contactNumber\" [(ngModel)]=\"customer.contactNumber\" name=\"contactNumber\" placeholder=\"Enter Contact Number\">\n  </div>\n  \n  <button type=\"submit\" class=\"btn btn-primary\" (click)=\"createCustomer()\">Submit</button>\n</form>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/signup/signup.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/signup/signup.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"login-form\">    \n  <form >\n  <div class=\"avatar\"><i class=\"material-icons\">face</i></div>\n    <h4 class=\"modal-title\">Sign up for an Account</h4>\n      <div class=\"form-group\">\n          <input type=\"email\" class=\"form-control\" id=\"myemail\" [(ngModel)]=\"data.email\" name=\"email\" placeholder=\"Email\" required=\"required\">\n      </div>\n      <div class=\"form-group\">\n          <input type=\"password\" class=\"form-control\" [(ngModel)]=\"data.password\" name=\"password\" placeholder=\"Password\" required=\"required\">\n      </div>\n      <div class=\"form-group small clearfix\">\n          <label class=\"checkbox-inline\"><input type=\"checkbox\"> Remember me</label>\n      </div> \n      <input type=\"submit\" class=\"btn btn-primary btn-block btn-lg\" (click)=\"signUp()\" value=\"Sign up\">              \n  </form>\t\t\t\n  <div class=\"text-center small\">Already have an account? <a href=\"#\">Log in</a></div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/subscribe-service/subscribe-service.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/subscribe-service/subscribe-service.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<table class=\"table table-bordered\" >\n  <thead>\n    <th>Service Name</th>\n    <th>Price</th>\n    <th>Action</th>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let service of serviceListing\">\n      <td>{{service.name}}</td>\n      <td>{{service.price}}</td>\n      <td *ngIf=\"service.subscribed === false\"><button type=\"button\" (click)=\"subscribe(service.id)\" class=\"btn btn-success\">Subscribe</button></td>\n      <td *ngIf=\"service.subscribed === true\"><button type=\"button\" class=\"btn btn-danger\">Un-subscribe</button></td>\n    </tr>\n  </tbody>\n</table>\n"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _customer_listing_customer_listing_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./customer-listing/customer-listing.component */ "./src/app/customer-listing/customer-listing.component.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/signup/signup.component.ts");
/* harmony import */ var _new_customer_new_customer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./new-customer/new-customer.component */ "./src/app/new-customer/new-customer.component.ts");
/* harmony import */ var _edit_customer_edit_customer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./edit-customer/edit-customer.component */ "./src/app/edit-customer/edit-customer.component.ts");
/* harmony import */ var _subscribe_service_subscribe_service_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./subscribe-service/subscribe-service.component */ "./src/app/subscribe-service/subscribe-service.component.ts");








const routes = [
    { path: 'customerlisting', component: _customer_listing_customer_listing_component__WEBPACK_IMPORTED_MODULE_3__["CustomerListingComponent"] },
    { path: 'signup', component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_4__["SignupComponent"] },
    { path: 'newcustomer', component: _new_customer_new_customer_component__WEBPACK_IMPORTED_MODULE_5__["NewCustomerComponent"] },
    { path: 'edit/:id', component: _edit_customer_edit_customer_component__WEBPACK_IMPORTED_MODULE_6__["EditCustomerComponent"] },
    { path: 'subscribe/:id', component: _subscribe_service_subscribe_service_component__WEBPACK_IMPORTED_MODULE_7__["SubscribeServiceComponent"] },
    { path: '', component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_4__["SignupComponent"] },
    { path: '**', component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_4__["SignupComponent"] }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'CustomerSubscriptionAngularApplication';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
    })
], AppComponent);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _customer_listing_customer_listing_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./customer-listing/customer-listing.component */ "./src/app/customer-listing/customer-listing.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/signup/signup.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _new_customer_new_customer_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./new-customer/new-customer.component */ "./src/app/new-customer/new-customer.component.ts");
/* harmony import */ var _edit_customer_edit_customer_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./edit-customer/edit-customer.component */ "./src/app/edit-customer/edit-customer.component.ts");
/* harmony import */ var _subscribe_service_subscribe_service_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./subscribe-service/subscribe-service.component */ "./src/app/subscribe-service/subscribe-service.component.ts");
/* harmony import */ var _filter_pipe__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./filter.pipe */ "./src/app/filter.pipe.ts");














let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _customer_listing_customer_listing_component__WEBPACK_IMPORTED_MODULE_5__["CustomerListingComponent"],
            _login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"],
            _signup_signup_component__WEBPACK_IMPORTED_MODULE_7__["SignupComponent"],
            _new_customer_new_customer_component__WEBPACK_IMPORTED_MODULE_10__["NewCustomerComponent"],
            _edit_customer_edit_customer_component__WEBPACK_IMPORTED_MODULE_11__["EditCustomerComponent"],
            _subscribe_service_subscribe_service_component__WEBPACK_IMPORTED_MODULE_12__["SubscribeServiceComponent"],
            _filter_pipe__WEBPACK_IMPORTED_MODULE_13__["FilterPipe"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/customer-listing/customer-listing.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/customer-listing/customer-listing.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2N1c3RvbWVyLWxpc3RpbmcvY3VzdG9tZXItbGlzdGluZy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/customer-listing/customer-listing.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/customer-listing/customer-listing.component.ts ***!
  \****************************************************************/
/*! exports provided: CustomerListingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerListingComponent", function() { return CustomerListingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");




let CustomerListingComponent = class CustomerListingComponent {
    constructor(router, http) {
        this.router = router;
        this.http = http;
        this.customers = Array();
    }
    ngOnInit() {
        let result = this.http.get("http://3.14.143.5:80/customer");
        result.subscribe((response) => {
            this.customers = response['customers'];
            console.log(this.customers);
        });
    }
    goToEditPage(id) {
        let editRoute = '/edit/' + id;
        this.router.navigate(['/edit', id]);
    }
    createCustomerPage() {
        this.router.navigate(['/newcustomer']);
    }
};
CustomerListingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-customer-listing',
        template: __webpack_require__(/*! raw-loader!./customer-listing.component.html */ "./node_modules/raw-loader/index.js!./src/app/customer-listing/customer-listing.component.html"),
        styles: [__webpack_require__(/*! ./customer-listing.component.scss */ "./src/app/customer-listing/customer-listing.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
], CustomerListingComponent);



/***/ }),

/***/ "./src/app/edit-customer/edit-customer.component.scss":
/*!************************************************************!*\
  !*** ./src/app/edit-customer/edit-customer.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VkaXQtY3VzdG9tZXIvZWRpdC1jdXN0b21lci5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/edit-customer/edit-customer.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/edit-customer/edit-customer.component.ts ***!
  \**********************************************************/
/*! exports provided: EditCustomerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditCustomerComponent", function() { return EditCustomerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");




let EditCustomerComponent = class EditCustomerComponent {
    constructor(route, router, http) {
        this.route = route;
        this.router = router;
        this.http = http;
        this.services = Array();
        this.subscribedToServices = false;
    }
    ngOnInit() {
        this.route.params.subscribe(params => {
            console.log(params);
            let id = params['id'];
            this.customerId = params['id'];
            let result = this.http.get("http://127.0.0.1:5000/subscribe/" + id);
            result.subscribe((response) => {
                this.services = response['services'];
                if (this.services.length > 0)
                    this.subscribedToServices = true;
                else
                    this.subscribedToServices = false;
            });
        });
    }
    goToSubscribePage() {
        this.router.navigate(['/subscribe', this.customerId]);
    }
};
EditCustomerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-edit-customer',
        template: __webpack_require__(/*! raw-loader!./edit-customer.component.html */ "./node_modules/raw-loader/index.js!./src/app/edit-customer/edit-customer.component.html"),
        styles: [__webpack_require__(/*! ./edit-customer.component.scss */ "./src/app/edit-customer/edit-customer.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
], EditCustomerComponent);



/***/ }),

/***/ "./src/app/filter.pipe.ts":
/*!********************************!*\
  !*** ./src/app/filter.pipe.ts ***!
  \********************************/
/*! exports provided: FilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterPipe", function() { return FilterPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FilterPipe = class FilterPipe {
    transform(items, searchText) {
        if (!items)
            return [];
        if (!searchText)
            return items;
        searchText = searchText.toLocaleLowerCase();
        return items.filter(it => {
            return it.toLocaleLowerCase().includes(searchText);
        });
    }
};
FilterPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'filter'
    })
], FilterPipe);



/***/ }),

/***/ "./src/app/login/login.component.scss":
/*!********************************************!*\
  !*** ./src/app/login/login.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-control {\n  box-shadow: none;\n  border-color: #ddd;\n}\n\n.form-control:focus {\n  border-color: #4aba70;\n}\n\n.login-form {\n  width: 350px;\n  margin: 0 auto;\n  padding: 30px 0;\n}\n\n.login-form form {\n  color: #434343;\n  border-radius: 1px;\n  margin-bottom: 15px;\n  background: #fff;\n  border: 1px solid #f3f3f3;\n  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);\n  padding: 30px;\n}\n\n.login-form h4 {\n  text-align: center;\n  font-size: 22px;\n  margin-bottom: 20px;\n}\n\n.login-form .avatar {\n  color: #fff;\n  margin: 0 auto 30px;\n  text-align: center;\n  width: 100px;\n  height: 100px;\n  border-radius: 50%;\n  z-index: 9;\n  background: #4aba70;\n  padding: 15px;\n  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.1);\n}\n\n.login-form .avatar i {\n  font-size: 62px;\n}\n\n.login-form .form-group {\n  margin-bottom: 20px;\n}\n\n.login-form .form-control, .login-form .btn {\n  min-height: 40px;\n  border-radius: 2px;\n  transition: all 0.5s;\n}\n\n.login-form .close {\n  position: absolute;\n  top: 15px;\n  right: 15px;\n}\n\n.login-form .btn {\n  background: #4aba70;\n  border: none;\n  line-height: normal;\n}\n\n.login-form .btn:hover, .login-form .btn:focus {\n  background: #42ae68;\n}\n\n.login-form .checkbox-inline {\n  float: left;\n}\n\n.login-form input[type=checkbox] {\n  margin-top: 2px;\n}\n\n.login-form .forgot-link {\n  float: right;\n}\n\n.login-form .small {\n  font-size: 13px;\n}\n\n.login-form a {\n  color: #4aba70;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2dlcmFyZHJpcXVlL0RvY3VtZW50cy9kZXYvQ3VzdG9tZXJTdWJzY3JpcHRpb25BcHBsaWNhdGlvbi9DdXN0b21lclN1YnNjcmlwdGlvbkFuZ3VsYXJBcHBsaWNhdGlvbi9zcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0VBQ0Esa0JBQUE7QUNDSjs7QURDQTtFQUNJLHFCQUFBO0FDRUo7O0FEQUE7RUFDSSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUNHSjs7QUREQTtFQUNJLGNBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLDBDQUFBO0VBQ0EsYUFBQTtBQ0lKOztBREZBO0VBQ0ksa0JBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QUNLSjs7QURIQTtFQUNJLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSwwQ0FBQTtBQ01KOztBREpBO0VBQ0ksZUFBQTtBQ09KOztBRExBO0VBQ0ksbUJBQUE7QUNRSjs7QUROQTtFQUNJLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtBQ1NKOztBRFBBO0VBQ0ksa0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtBQ1VKOztBRFJBO0VBQ0ksbUJBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUNXSjs7QURUQTtFQUNJLG1CQUFBO0FDWUo7O0FEVkE7RUFDSSxXQUFBO0FDYUo7O0FEWEE7RUFDSSxlQUFBO0FDY0o7O0FEWkE7RUFDSSxZQUFBO0FDZUo7O0FEYkE7RUFDSSxlQUFBO0FDZ0JKOztBRGRBO0VBQ0ksY0FBQTtBQ2lCSiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvcm0tY29udHJvbCB7XG4gICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICBib3JkZXItY29sb3I6ICNkZGQ7XG59XG4uZm9ybS1jb250cm9sOmZvY3VzIHtcbiAgICBib3JkZXItY29sb3I6ICM0YWJhNzA7IFxufVxuLmxvZ2luLWZvcm0ge1xuICAgIHdpZHRoOiAzNTBweDtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICBwYWRkaW5nOiAzMHB4IDA7XG59XG4ubG9naW4tZm9ybSBmb3JtIHtcbiAgICBjb2xvcjogIzQzNDM0MztcbiAgICBib3JkZXItcmFkaXVzOiAxcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNmM2YzZjM7XG4gICAgYm94LXNoYWRvdzogMHB4IDJweCAycHggcmdiYSgwLCAwLCAwLCAwLjMpO1xuICAgIHBhZGRpbmc6IDMwcHg7XG59XG4ubG9naW4tZm9ybSBoNCB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuLmxvZ2luLWZvcm0gLmF2YXRhciB7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgbWFyZ2luOiAwIGF1dG8gMzBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgd2lkdGg6IDEwMHB4O1xuICAgIGhlaWdodDogMTAwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIHotaW5kZXg6IDk7XG4gICAgYmFja2dyb3VuZDogIzRhYmE3MDtcbiAgICBwYWRkaW5nOiAxNXB4O1xuICAgIGJveC1zaGFkb3c6IDBweCAycHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbn1cbi5sb2dpbi1mb3JtIC5hdmF0YXIgaSB7XG4gICAgZm9udC1zaXplOiA2MnB4O1xufVxuLmxvZ2luLWZvcm0gLmZvcm0tZ3JvdXAge1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG4ubG9naW4tZm9ybSAuZm9ybS1jb250cm9sLCAubG9naW4tZm9ybSAuYnRuIHtcbiAgICBtaW4taGVpZ2h0OiA0MHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDJweDsgXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNXM7XG59XG4ubG9naW4tZm9ybSAuY2xvc2Uge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDE1cHg7XG4gICAgcmlnaHQ6IDE1cHg7XG59XG4ubG9naW4tZm9ybSAuYnRuIHtcbiAgICBiYWNrZ3JvdW5kOiAjNGFiYTcwO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xufVxuLmxvZ2luLWZvcm0gLmJ0bjpob3ZlciwgLmxvZ2luLWZvcm0gLmJ0bjpmb2N1cyB7XG4gICAgYmFja2dyb3VuZDogIzQyYWU2ODtcbn1cbi5sb2dpbi1mb3JtIC5jaGVja2JveC1pbmxpbmUge1xuICAgIGZsb2F0OiBsZWZ0O1xufVxuLmxvZ2luLWZvcm0gaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdIHtcbiAgICBtYXJnaW4tdG9wOiAycHg7XG59XG4ubG9naW4tZm9ybSAuZm9yZ290LWxpbmsge1xuICAgIGZsb2F0OiByaWdodDtcbn1cbi5sb2dpbi1mb3JtIC5zbWFsbCB7XG4gICAgZm9udC1zaXplOiAxM3B4O1xufVxuLmxvZ2luLWZvcm0gYSB7XG4gICAgY29sb3I6ICM0YWJhNzA7XG59IiwiLmZvcm0tY29udHJvbCB7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG4gIGJvcmRlci1jb2xvcjogI2RkZDtcbn1cblxuLmZvcm0tY29udHJvbDpmb2N1cyB7XG4gIGJvcmRlci1jb2xvcjogIzRhYmE3MDtcbn1cblxuLmxvZ2luLWZvcm0ge1xuICB3aWR0aDogMzUwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBwYWRkaW5nOiAzMHB4IDA7XG59XG5cbi5sb2dpbi1mb3JtIGZvcm0ge1xuICBjb2xvcjogIzQzNDM0MztcbiAgYm9yZGVyLXJhZGl1czogMXB4O1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZjNmM2YzO1xuICBib3gtc2hhZG93OiAwcHggMnB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gIHBhZGRpbmc6IDMwcHg7XG59XG5cbi5sb2dpbi1mb3JtIGg0IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDIycHg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbi5sb2dpbi1mb3JtIC5hdmF0YXIge1xuICBjb2xvcjogI2ZmZjtcbiAgbWFyZ2luOiAwIGF1dG8gMzBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aWR0aDogMTAwcHg7XG4gIGhlaWdodDogMTAwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgei1pbmRleDogOTtcbiAgYmFja2dyb3VuZDogIzRhYmE3MDtcbiAgcGFkZGluZzogMTVweDtcbiAgYm94LXNoYWRvdzogMHB4IDJweCAycHggcmdiYSgwLCAwLCAwLCAwLjEpO1xufVxuXG4ubG9naW4tZm9ybSAuYXZhdGFyIGkge1xuICBmb250LXNpemU6IDYycHg7XG59XG5cbi5sb2dpbi1mb3JtIC5mb3JtLWdyb3VwIHtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuLmxvZ2luLWZvcm0gLmZvcm0tY29udHJvbCwgLmxvZ2luLWZvcm0gLmJ0biB7XG4gIG1pbi1oZWlnaHQ6IDQwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXM7XG59XG5cbi5sb2dpbi1mb3JtIC5jbG9zZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxNXB4O1xuICByaWdodDogMTVweDtcbn1cblxuLmxvZ2luLWZvcm0gLmJ0biB7XG4gIGJhY2tncm91bmQ6ICM0YWJhNzA7XG4gIGJvcmRlcjogbm9uZTtcbiAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcbn1cblxuLmxvZ2luLWZvcm0gLmJ0bjpob3ZlciwgLmxvZ2luLWZvcm0gLmJ0bjpmb2N1cyB7XG4gIGJhY2tncm91bmQ6ICM0MmFlNjg7XG59XG5cbi5sb2dpbi1mb3JtIC5jaGVja2JveC1pbmxpbmUge1xuICBmbG9hdDogbGVmdDtcbn1cblxuLmxvZ2luLWZvcm0gaW5wdXRbdHlwZT1jaGVja2JveF0ge1xuICBtYXJnaW4tdG9wOiAycHg7XG59XG5cbi5sb2dpbi1mb3JtIC5mb3Jnb3QtbGluayB7XG4gIGZsb2F0OiByaWdodDtcbn1cblxuLmxvZ2luLWZvcm0gLnNtYWxsIHtcbiAgZm9udC1zaXplOiAxM3B4O1xufVxuXG4ubG9naW4tZm9ybSBhIHtcbiAgY29sb3I6ICM0YWJhNzA7XG59Il19 */"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let LoginComponent = class LoginComponent {
    constructor() { }
    ngOnInit() {
    }
};
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: __webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/index.js!./src/app/login/login.component.html"),
        styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/login/login.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], LoginComponent);



/***/ }),

/***/ "./src/app/new-customer/new-customer.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/new-customer/new-customer.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25ldy1jdXN0b21lci9uZXctY3VzdG9tZXIuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/new-customer/new-customer.component.ts":
/*!********************************************************!*\
  !*** ./src/app/new-customer/new-customer.component.ts ***!
  \********************************************************/
/*! exports provided: NewCustomerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewCustomerComponent", function() { return NewCustomerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);





let NewCustomerComponent = class NewCustomerComponent {
    constructor(router, http) {
        this.router = router;
        this.http = http;
    }
    ngOnInit() {
        this.customer = {
            "firstName": "",
            "lastName": "",
            "email": "",
            "contactNumber": ""
        };
    }
    createCustomer() {
        console.log(this.customer);
        let postData = {
            'first_name': this.customer.firstName,
            'last_name': this.customer.lastName,
            'email': this.customer.email,
            'phone_number': this.customer.contactNumber
        };
        let result = this.http.post("http://3.14.143.5:80/customer", postData);
        result.subscribe((response) => {
            console.log(response);
            if (response['status'] === 200) {
                this.displaySuccessfullAlert();
                this.router.navigate(['/customerlisting']);
            }
            else {
                this.displayErrorMessage('Error creating customer', 'Please try again');
            }
        });
    }
    displaySuccessfullAlert() {
        const toast = sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000
        });
        toast.fire({
            type: 'success',
            title: 'Successfully created new customer'
        });
    }
    displayErrorMessage(titleString, textString) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
            title: titleString,
            text: textString,
            type: 'error',
            confirmButtonText: 'cool'
        });
    }
};
NewCustomerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-new-customer',
        template: __webpack_require__(/*! raw-loader!./new-customer.component.html */ "./node_modules/raw-loader/index.js!./src/app/new-customer/new-customer.component.html"),
        styles: [__webpack_require__(/*! ./new-customer.component.scss */ "./src/app/new-customer/new-customer.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
], NewCustomerComponent);



/***/ }),

/***/ "./src/app/signup/signup.component.scss":
/*!**********************************************!*\
  !*** ./src/app/signup/signup.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-control {\n  box-shadow: none;\n  border-color: #ddd;\n}\n\n.form-control:focus {\n  border-color: #4aba70;\n}\n\n.login-form {\n  width: 350px;\n  margin: 0 auto;\n  padding: 30px 0;\n}\n\n.login-form form {\n  color: #434343;\n  border-radius: 1px;\n  margin-bottom: 15px;\n  background: #fff;\n  border: 1px solid #f3f3f3;\n  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);\n  padding: 30px;\n}\n\n.login-form h4 {\n  text-align: center;\n  font-size: 22px;\n  margin-bottom: 20px;\n}\n\n.login-form .avatar {\n  color: #fff;\n  margin: 0 auto 30px;\n  text-align: center;\n  width: 100px;\n  height: 100px;\n  border-radius: 50%;\n  z-index: 9;\n  background: #4aba70;\n  padding: 15px;\n  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.1);\n}\n\n.login-form .avatar i {\n  font-size: 62px;\n}\n\n.login-form .form-group {\n  margin-bottom: 20px;\n}\n\n.login-form .form-control, .login-form .btn {\n  min-height: 40px;\n  border-radius: 2px;\n  transition: all 0.5s;\n}\n\n.login-form .close {\n  position: absolute;\n  top: 15px;\n  right: 15px;\n}\n\n.login-form .btn {\n  background: #4aba70;\n  border: none;\n  line-height: normal;\n}\n\n.login-form .btn:hover, .login-form .btn:focus {\n  background: #42ae68;\n}\n\n.login-form .checkbox-inline {\n  float: left;\n}\n\n.login-form input[type=checkbox] {\n  margin-top: 2px;\n}\n\n.login-form .forgot-link {\n  float: right;\n}\n\n.login-form .small {\n  font-size: 13px;\n}\n\n.login-form a {\n  color: #4aba70;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2dlcmFyZHJpcXVlL0RvY3VtZW50cy9kZXYvQ3VzdG9tZXJTdWJzY3JpcHRpb25BcHBsaWNhdGlvbi9DdXN0b21lclN1YnNjcmlwdGlvbkFuZ3VsYXJBcHBsaWNhdGlvbi9zcmMvYXBwL3NpZ251cC9zaWdudXAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NpZ251cC9zaWdudXAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBQTtFQUNBLGtCQUFBO0FDQ0o7O0FEQ0E7RUFDSSxxQkFBQTtBQ0VKOztBREFBO0VBQ0ksWUFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FDR0o7O0FEREE7RUFDSSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSwwQ0FBQTtFQUNBLGFBQUE7QUNJSjs7QURGQTtFQUNJLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FDS0o7O0FESEE7RUFDSSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsMENBQUE7QUNNSjs7QURKQTtFQUNJLGVBQUE7QUNPSjs7QURMQTtFQUNJLG1CQUFBO0FDUUo7O0FETkE7RUFDSSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7QUNTSjs7QURQQTtFQUNJLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7QUNVSjs7QURSQTtFQUNJLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FDV0o7O0FEVEE7RUFDSSxtQkFBQTtBQ1lKOztBRFZBO0VBQ0ksV0FBQTtBQ2FKOztBRFhBO0VBQ0ksZUFBQTtBQ2NKOztBRFpBO0VBQ0ksWUFBQTtBQ2VKOztBRGJBO0VBQ0ksZUFBQTtBQ2dCSjs7QURkQTtFQUNJLGNBQUE7QUNpQkoiLCJmaWxlIjoic3JjL2FwcC9zaWdudXAvc2lnbnVwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvcm0tY29udHJvbCB7XG4gICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICBib3JkZXItY29sb3I6ICNkZGQ7XG59XG4uZm9ybS1jb250cm9sOmZvY3VzIHtcbiAgICBib3JkZXItY29sb3I6ICM0YWJhNzA7IFxufVxuLmxvZ2luLWZvcm0ge1xuICAgIHdpZHRoOiAzNTBweDtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICBwYWRkaW5nOiAzMHB4IDA7XG59XG4ubG9naW4tZm9ybSBmb3JtIHtcbiAgICBjb2xvcjogIzQzNDM0MztcbiAgICBib3JkZXItcmFkaXVzOiAxcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNmM2YzZjM7XG4gICAgYm94LXNoYWRvdzogMHB4IDJweCAycHggcmdiYSgwLCAwLCAwLCAwLjMpO1xuICAgIHBhZGRpbmc6IDMwcHg7XG59XG4ubG9naW4tZm9ybSBoNCB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuLmxvZ2luLWZvcm0gLmF2YXRhciB7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgbWFyZ2luOiAwIGF1dG8gMzBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgd2lkdGg6IDEwMHB4O1xuICAgIGhlaWdodDogMTAwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIHotaW5kZXg6IDk7XG4gICAgYmFja2dyb3VuZDogIzRhYmE3MDtcbiAgICBwYWRkaW5nOiAxNXB4O1xuICAgIGJveC1zaGFkb3c6IDBweCAycHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbn1cbi5sb2dpbi1mb3JtIC5hdmF0YXIgaSB7XG4gICAgZm9udC1zaXplOiA2MnB4O1xufVxuLmxvZ2luLWZvcm0gLmZvcm0tZ3JvdXAge1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG4ubG9naW4tZm9ybSAuZm9ybS1jb250cm9sLCAubG9naW4tZm9ybSAuYnRuIHtcbiAgICBtaW4taGVpZ2h0OiA0MHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDJweDsgXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNXM7XG59XG4ubG9naW4tZm9ybSAuY2xvc2Uge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDE1cHg7XG4gICAgcmlnaHQ6IDE1cHg7XG59XG4ubG9naW4tZm9ybSAuYnRuIHtcbiAgICBiYWNrZ3JvdW5kOiAjNGFiYTcwO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xufVxuLmxvZ2luLWZvcm0gLmJ0bjpob3ZlciwgLmxvZ2luLWZvcm0gLmJ0bjpmb2N1cyB7XG4gICAgYmFja2dyb3VuZDogIzQyYWU2ODtcbn1cbi5sb2dpbi1mb3JtIC5jaGVja2JveC1pbmxpbmUge1xuICAgIGZsb2F0OiBsZWZ0O1xufVxuLmxvZ2luLWZvcm0gaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdIHtcbiAgICBtYXJnaW4tdG9wOiAycHg7XG59XG4ubG9naW4tZm9ybSAuZm9yZ290LWxpbmsge1xuICAgIGZsb2F0OiByaWdodDtcbn1cbi5sb2dpbi1mb3JtIC5zbWFsbCB7XG4gICAgZm9udC1zaXplOiAxM3B4O1xufVxuLmxvZ2luLWZvcm0gYSB7XG4gICAgY29sb3I6ICM0YWJhNzA7XG59IiwiLmZvcm0tY29udHJvbCB7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG4gIGJvcmRlci1jb2xvcjogI2RkZDtcbn1cblxuLmZvcm0tY29udHJvbDpmb2N1cyB7XG4gIGJvcmRlci1jb2xvcjogIzRhYmE3MDtcbn1cblxuLmxvZ2luLWZvcm0ge1xuICB3aWR0aDogMzUwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBwYWRkaW5nOiAzMHB4IDA7XG59XG5cbi5sb2dpbi1mb3JtIGZvcm0ge1xuICBjb2xvcjogIzQzNDM0MztcbiAgYm9yZGVyLXJhZGl1czogMXB4O1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZjNmM2YzO1xuICBib3gtc2hhZG93OiAwcHggMnB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gIHBhZGRpbmc6IDMwcHg7XG59XG5cbi5sb2dpbi1mb3JtIGg0IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDIycHg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbi5sb2dpbi1mb3JtIC5hdmF0YXIge1xuICBjb2xvcjogI2ZmZjtcbiAgbWFyZ2luOiAwIGF1dG8gMzBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aWR0aDogMTAwcHg7XG4gIGhlaWdodDogMTAwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgei1pbmRleDogOTtcbiAgYmFja2dyb3VuZDogIzRhYmE3MDtcbiAgcGFkZGluZzogMTVweDtcbiAgYm94LXNoYWRvdzogMHB4IDJweCAycHggcmdiYSgwLCAwLCAwLCAwLjEpO1xufVxuXG4ubG9naW4tZm9ybSAuYXZhdGFyIGkge1xuICBmb250LXNpemU6IDYycHg7XG59XG5cbi5sb2dpbi1mb3JtIC5mb3JtLWdyb3VwIHtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuLmxvZ2luLWZvcm0gLmZvcm0tY29udHJvbCwgLmxvZ2luLWZvcm0gLmJ0biB7XG4gIG1pbi1oZWlnaHQ6IDQwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXM7XG59XG5cbi5sb2dpbi1mb3JtIC5jbG9zZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxNXB4O1xuICByaWdodDogMTVweDtcbn1cblxuLmxvZ2luLWZvcm0gLmJ0biB7XG4gIGJhY2tncm91bmQ6ICM0YWJhNzA7XG4gIGJvcmRlcjogbm9uZTtcbiAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcbn1cblxuLmxvZ2luLWZvcm0gLmJ0bjpob3ZlciwgLmxvZ2luLWZvcm0gLmJ0bjpmb2N1cyB7XG4gIGJhY2tncm91bmQ6ICM0MmFlNjg7XG59XG5cbi5sb2dpbi1mb3JtIC5jaGVja2JveC1pbmxpbmUge1xuICBmbG9hdDogbGVmdDtcbn1cblxuLmxvZ2luLWZvcm0gaW5wdXRbdHlwZT1jaGVja2JveF0ge1xuICBtYXJnaW4tdG9wOiAycHg7XG59XG5cbi5sb2dpbi1mb3JtIC5mb3Jnb3QtbGluayB7XG4gIGZsb2F0OiByaWdodDtcbn1cblxuLmxvZ2luLWZvcm0gLnNtYWxsIHtcbiAgZm9udC1zaXplOiAxM3B4O1xufVxuXG4ubG9naW4tZm9ybSBhIHtcbiAgY29sb3I6ICM0YWJhNzA7XG59Il19 */"

/***/ }),

/***/ "./src/app/signup/signup.component.ts":
/*!********************************************!*\
  !*** ./src/app/signup/signup.component.ts ***!
  \********************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);


//import { FormGroup, FormBuilder, ReactiveFormsModule } from '@angular/forms';



let SignupComponent = class SignupComponent {
    constructor(router, http) {
        this.router = router;
        this.http = http;
    }
    ngOnInit() {
        this.data = { "email": "", password: "" };
    }
    signUp() {
        console.log(this.data.email);
        console.log(this.data.password);
        let post_data = {
            email: this.data.email,
            password: this.data.email
        };
        let headers = new Headers({ 'Content-Type': 'application/json' });
        // let options = new RequestOp
        let result = this.http.post("http://3.14.143.5:80/signup", post_data);
        result.subscribe(response => {
            console.log(response);
            if (response['status'] === 200) {
                this.displaySuccessfullSignInAlert();
                this.router.navigate(['/customerlisting']);
            }
            else {
                this.displayErrorMessage('Error signing in.', 'PLease Try again');
            }
        });
    }
    displaySuccessfullSignInAlert() {
        const toast = sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000
        });
        toast.fire({
            type: 'success',
            title: 'Signed in successfully'
        });
    }
    displayErrorMessage(errorTitle, errorText) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
            type: 'error',
            title: errorTitle,
            text: errorText
        });
    }
};
SignupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-signup',
        template: __webpack_require__(/*! raw-loader!./signup.component.html */ "./node_modules/raw-loader/index.js!./src/app/signup/signup.component.html"),
        styles: [__webpack_require__(/*! ./signup.component.scss */ "./src/app/signup/signup.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
], SignupComponent);



/***/ }),

/***/ "./src/app/subscribe-service/subscribe-service.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/subscribe-service/subscribe-service.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N1YnNjcmliZS1zZXJ2aWNlL3N1YnNjcmliZS1zZXJ2aWNlLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/subscribe-service/subscribe-service.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/subscribe-service/subscribe-service.component.ts ***!
  \******************************************************************/
/*! exports provided: SubscribeServiceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubscribeServiceComponent", function() { return SubscribeServiceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");




let SubscribeServiceComponent = class SubscribeServiceComponent {
    constructor(route, router, http) {
        this.route = route;
        this.router = router;
        this.http = http;
        this.services = Array();
        this.customerServices = Array();
        this.customerId = "";
        this.serviceListing = Array();
    }
    ngOnInit() {
        this.route.params.subscribe(params => {
            this.customerId = params['id'];
            let result = this.http.get("http://127.0.0.1:5000/service");
            result.subscribe((response) => {
                this.serviceListing = response['services'];
                console.log(this.serviceListing);
                this.http.get("http://127.0.0.1:5000/subscribe/" + this.customerId).subscribe((serviceResponse) => {
                    this.customerServices = serviceResponse['services'];
                    console.log(this.customerServices);
                    for (let service of this.serviceListing) {
                        let currentId = service['id'];
                        let found = false;
                        for (let userService of this.customerServices) {
                            if (currentId === userService['id'])
                                found = true;
                            service['subscribed'] = true;
                        }
                        if (found === false)
                            service['subscribed'] = false;
                    }
                    console.log(this.serviceListing);
                });
            });
        });
    }
    subscribe(serviceId) {
        let postData = {
            'customer_id': this.customerId,
            'service_id': serviceId
        };
        this.http.post("http://127.0.0.1:5000/subscribe", postData).subscribe((response) => {
            console.log(response);
        });
    }
};
SubscribeServiceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-subscribe-service',
        template: __webpack_require__(/*! raw-loader!./subscribe-service.component.html */ "./node_modules/raw-loader/index.js!./src/app/subscribe-service/subscribe-service.component.html"),
        styles: [__webpack_require__(/*! ./subscribe-service.component.scss */ "./src/app/subscribe-service/subscribe-service.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
], SubscribeServiceComponent);



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

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/gerardrique/Documents/dev/CustomerSubscriptionApplication/CustomerSubscriptionAngularApplication/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map