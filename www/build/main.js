webpackJsonp([0],{

/***/ 107:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 107;

/***/ }),

/***/ 149:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 149;

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__details_details__ = __webpack_require__(195);
<<<<<<< HEAD
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_newsapi_global_model__ = __webpack_require__(265);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__newsapi_newsapi__ = __webpack_require__(269);
=======
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_newsapi_global_model__ = __webpack_require__(268);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_newsapi_service__ = __webpack_require__(196);
>>>>>>> 1e0b4fbe1b40beff1838dedd51f58d9c0d81bad1
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HomePage = (function () {
<<<<<<< HEAD
    function HomePage(navCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.news = new __WEBPACK_IMPORTED_MODULE_3__models_newsapi_global_model__["a" /* NewsApiGlobal */]();
        console.log("Hello World");
        console.log("this.news");
    }
=======
    function HomePage(navCtrl, alertCtrl, newsApiService) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.newsApiService = newsApiService;
        this.news = new __WEBPACK_IMPORTED_MODULE_3__models_newsapi_global_model__["a" /* NewsApiGlobal */]();
        console.log("Hello World");
        this.getArticles(null);
        console.log("this.news");
    }
    // Chargement des articles
    HomePage.prototype.getArticles = function (refresher) {
        var _this = this;
        this.newsApiService.getArticles()
            .then(function (newsFetched) {
            _this.news = newsFetched;
            console.log(_this.news);
            // Si la variable refresher est null alors on ne fait rien
            (refresher) ? refresher.complete() : null;
            console.log('Données récupérées depuis le serveur !');
        });
    };
>>>>>>> 1e0b4fbe1b40beff1838dedd51f58d9c0d81bad1
    HomePage.prototype.alertAction = function () {
        console.log("appuyer bouton");
    };
    HomePage.prototype.showAlert = function () {
        var alert = this.alertCtrl.create({
            title: 'Pop Up',
            subTitle: 'pop up fonctionne',
            buttons: ['OK']
        });
        alert.present();
    };
    HomePage.prototype.showDetails = function () {
        console.log(this.nom);
        console.log(this.prenom);
        console.log(this.age);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__details_details__["a" /* DetailsPage */], { nom: this.nom, prenom: this.prenom, age: this.age });
    };
<<<<<<< HEAD
    HomePage.prototype.showAPI = function () {
        console.log(this.nom);
        console.log(this.prenom);
        console.log(this.age);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__newsapi_newsapi__["a" /* NewsapiPage */]);
    };
=======
>>>>>>> 1e0b4fbe1b40beff1838dedd51f58d9c0d81bad1
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
<<<<<<< HEAD
        selector: 'page-home',template:/*ion-inline-start:"C:\CAT_USERDATA\ionic\ionic_tuto\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n     Test First Appli\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  The world is your oyster.\n  <p>\n    If you get lost, the <a href="http://ionicframework.com/docs/v2">docs</a> will be your guide.\n  </p>\n\n\n  <!-- Boutons -->\n  <button ion-button color="light" clear (tap)="alertAction()">Boutton Console</button>\n  <button ion-button clear (tap)="showAlert()">Bouton pop up</button>\n  <button ion-button color="secondary" clear (tap)="showAPI()">Bouton API</button>\n  <button ion-button color="danger" clear>Danger Clear</button>\n  <button ion-button color="dark" clear>Dark Clear</button>\n\n  <!-- Formulaire -->\n  <ion-list>\n    \n      <ion-item>\n        <ion-label floating>Nom</ion-label>\n        <ion-input type="text" [(ngModel)] = "nom"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>Prenom</ion-label>\n        <ion-input type="text" [(ngModel)] = "prenom"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>Age</ion-label>\n        <ion-input type="number" [(ngModel)] = "age"></ion-input>\n      </ion-item>\n    \n      <button id="validateButton" ion-button round (tap)="showDetails()">Valider</button>\n    </ion-list>\n\n\n    <!-- API -->\n    <ion-card *ngFor="let article of news.articles">\n      <img src="{{article.urlToImage}}"/>\n      <ion-card-content>\n        <ion-card-title>\n          {{article.title}}\n          </ion-card-title>\n        <p>\n          {{article.description}}\n        </p>\n      </ion-card-content>\n    </ion-card>\n\n</ion-content>\n'/*ion-inline-end:"C:\CAT_USERDATA\ionic\ionic_tuto\src\pages\home\home.html"*/
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" && _b || Object])
], HomePage);

var _a, _b;
=======
        selector: 'page-home',template:/*ion-inline-start:"F:\chris\cours\ionic\grafikart\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n     Test First Appli\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  The world is your oyster.\n  <p>\n    If you get lost, the <a href="http://ionicframework.com/docs/v2">docs</a> will be your guide.\n  </p>\n\n\n  <!-- Boutons -->\n  <button ion-button color="light" clear (tap)="alertAction()">Boutton Console</button>\n  <button ion-button clear (tap)="showAlert()">Bouton pop up</button>\n  <button ion-button color="secondary" clear>Secondary Clear</button>\n  <button ion-button color="danger" clear>Danger Clear</button>\n  <button ion-button color="dark" clear>Dark Clear</button>\n\n  <!-- Formulaire -->\n  <ion-list>\n    \n      <ion-item>\n        <ion-label floating>Nom</ion-label>\n        <ion-input type="text" [(ngModel)] = "nom"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>Prenom</ion-label>\n        <ion-input type="text" [(ngModel)] = "prenom"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>Age</ion-label>\n        <ion-input type="number" [(ngModel)] = "age"></ion-input>\n      </ion-item>\n    \n      <button id="validateButton" ion-button round (tap)="showDetails()">Valider</button>\n    </ion-list>\n\n\n    <!-- API -->\n    <ion-card *ngFor="let article of news.articles">\n      <img src="{{article.urlToImage}}"/>\n      <ion-card-content>\n        <ion-card-title>\n          {{article.title}}\n          </ion-card-title>\n        <p>\n          {{article.description}}\n        </p>\n      </ion-card-content>\n    </ion-card>\n\n</ion-content>\n'/*ion-inline-end:"F:\chris\cours\ionic\grafikart\src\pages\home\home.html"*/
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__services_newsapi_service__["a" /* NewsApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_newsapi_service__["a" /* NewsApiService */]) === "function" && _c || Object])
], HomePage);

var _a, _b, _c;
>>>>>>> 1e0b4fbe1b40beff1838dedd51f58d9c0d81bad1
//# sourceMappingURL=home.js.map

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DetailsPage = (function () {
    function DetailsPage(navCtrl, alertCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.navParams = navParams;
        this.nom = navParams.get("nom");
        this.prenom = navParams.get("prenom");
        this.age = navParams.get("age");
        console.log(this.nom);
        console.log(this.prenom);
        console.log(this.age);
    }
    return DetailsPage;
}());
DetailsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
<<<<<<< HEAD
        selector: 'page-details',template:/*ion-inline-start:"C:\CAT_USERDATA\ionic\ionic_tuto\src\pages\details\details.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n     Detail Page\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <div *ngIf="prenom && nom && age"  id="panel-info">\n    <p>Bonjour , {{prenom}} {{nom}}, {{age}} ans</p>\n\n    <p>{{(age < 18 ) ? \'Vous etes mineur\' : \'Vous etes majeur\'}}</p>\n  </div>\n\n  <div *ngIf="!prenom || !nom || !age" id="panel-error">\n\n    <p>ERREUR , il manque des infos</p>\n\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"C:\CAT_USERDATA\ionic\ionic_tuto\src\pages\details\details.html"*/
=======
        selector: 'page-details',template:/*ion-inline-start:"F:\chris\cours\ionic\grafikart\src\pages\details\details.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n     Detail Page\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <div *ngIf="prenom && nom && age"  id="panel-info">\n    <p>Bonjour , {{prenom}} {{nom}}, {{age}} ans</p>\n\n    <p>{{(age < 18 ) ? \'Vous etes mineur\' : \'Vous etes majeur\'}}</p>\n  </div>\n\n  <div *ngIf="!prenom || !nom || !age" id="panel-error">\n\n    <p>ERREUR , il manque des infos</p>\n\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"F:\chris\cours\ionic\grafikart\src\pages\details\details.html"*/
>>>>>>> 1e0b4fbe1b40beff1838dedd51f58d9c0d81bad1
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
], DetailsPage);

//# sourceMappingURL=details.js.map

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewsApiService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(193);
<<<<<<< HEAD
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__(266);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(268);
=======
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__(265);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(267);
>>>>>>> 1e0b4fbe1b40beff1838dedd51f58d9c0d81bad1
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/*
* Un exemple d'implmentation d'un service au sein d'angular
*/
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// Core components


// RxJS


var NewsApiService = (function () {
    function NewsApiService(http) {
        this.http = http;
        this.baseUrl = 'https://newsapi.org/v1/';
        this.source = 'hacker-news';
        this.apiKey = '4985d9a4ca424521a6f2c0930007d3e7';
    }
    NewsApiService.prototype.getArticles = function () {
        var url = this.baseUrl + "articles?source=" + this.source + "&sortBy=latest&apiKey=" + this.apiKey;
        return this.http.get(url)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(function (error) { return console.log('Une erreur est survenue ' + error); });
    };
    return NewsApiService;
}());
NewsApiService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
<<<<<<< HEAD
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
], NewsApiService);

=======
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], NewsApiService);

var _a;
>>>>>>> 1e0b4fbe1b40beff1838dedd51f58d9c0d81bad1
//# sourceMappingURL=newsapi.service.js.map

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(216);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 216:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(264);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_details_details__ = __webpack_require__(195);
<<<<<<< HEAD
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_newsapi_newsapi__ = __webpack_require__(269);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_newsapi_service__ = __webpack_require__(196);
=======
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_newsapi_service__ = __webpack_require__(196);
>>>>>>> 1e0b4fbe1b40beff1838dedd51f58d9c0d81bad1
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







// Pages



<<<<<<< HEAD
//Service

=======
>>>>>>> 1e0b4fbe1b40beff1838dedd51f58d9c0d81bad1
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_details_details__["a" /* DetailsPage */],
<<<<<<< HEAD
            __WEBPACK_IMPORTED_MODULE_9__pages_newsapi_newsapi__["a" /* NewsapiPage */],
=======
>>>>>>> 1e0b4fbe1b40beff1838dedd51f58d9c0d81bad1
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */], {}, {
                links: []
            })
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_details_details__["a" /* DetailsPage */],
<<<<<<< HEAD
            __WEBPACK_IMPORTED_MODULE_9__pages_newsapi_newsapi__["a" /* NewsapiPage */],
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_10__services_newsapi_service__["a" /* NewsApiService */],
=======
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_9__services_newsapi_service__["a" /* NewsApiService */],
>>>>>>> 1e0b4fbe1b40beff1838dedd51f58d9c0d81bad1
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 264:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(194);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    return MyApp;
}());
MyApp = __decorate([
<<<<<<< HEAD
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"C:\CAT_USERDATA\ionic\ionic_tuto\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"C:\CAT_USERDATA\ionic\ionic_tuto\src\app\app.html"*/
=======
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"F:\chris\cours\ionic\grafikart\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"F:\chris\cours\ionic\grafikart\src\app\app.html"*/
>>>>>>> 1e0b4fbe1b40beff1838dedd51f58d9c0d81bad1
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

<<<<<<< HEAD
/***/ 265:
=======
/***/ 268:
>>>>>>> 1e0b4fbe1b40beff1838dedd51f58d9c0d81bad1
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewsApiGlobal; });
var NewsApiGlobal = (function () {
    function NewsApiGlobal() {
    }
    return NewsApiGlobal;
}());

//# sourceMappingURL=newsapi-global.model.js.map

<<<<<<< HEAD
/***/ }),

/***/ 269:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewsapiPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_newsapi_global_model__ = __webpack_require__(265);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_newsapi_service__ = __webpack_require__(196);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NewsapiPage = (function () {
    function NewsapiPage(newsApiService) {
        this.newsApiService = newsApiService;
        this.news = new __WEBPACK_IMPORTED_MODULE_1__models_newsapi_global_model__["a" /* NewsApiGlobal */]();
        console.log("Hello World");
        this.getArticles(null);
        console.log("this.news");
    }
    // Chargement des articles
    NewsapiPage.prototype.getArticles = function (refresher) {
        var _this = this;
        this.newsApiService.getArticles()
            .then(function (newsFetched) {
            _this.news = newsFetched;
            console.log(_this.news);
            // Si la variable refresher est null alors on ne fait rien
            (refresher) ? refresher.complete() : null;
            console.log('Données récupérées depuis le serveur !');
        });
    };
    return NewsapiPage;
}());
NewsapiPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-newsapi',template:/*ion-inline-start:"C:\CAT_USERDATA\ionic\ionic_tuto\src\pages\newsapi\newsapi.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n     Test First API\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  The world is your oyster.\n  <p>\n    If you get lost, the <a href="http://ionicframework.com/docs/v2">docs</a> will be your guide.\n  </p>\n\n    <!-- API -->\n    <ion-card *ngFor="let article of news.articles">\n      <img src="{{article.urlToImage}}"/>\n      <ion-card-content>\n        <ion-card-title>\n          {{article.title}}\n          </ion-card-title>\n        <p>\n          {{article.description}}\n        </p>\n      </ion-card-content>\n    </ion-card>\n\n</ion-content>\n'/*ion-inline-end:"C:\CAT_USERDATA\ionic\ionic_tuto\src\pages\newsapi\newsapi.html"*/
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_newsapi_service__["a" /* NewsApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_newsapi_service__["a" /* NewsApiService */]) === "function" && _a || Object])
], NewsapiPage);

var _a;
//# sourceMappingURL=newsapi.js.map

=======
>>>>>>> 1e0b4fbe1b40beff1838dedd51f58d9c0d81bad1
/***/ })

},[197]);
//# sourceMappingURL=main.js.map