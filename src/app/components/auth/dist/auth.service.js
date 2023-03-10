"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AuthService = void 0;
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var AuthService = /** @class */ (function () {
    function AuthService(http, router) {
        this.http = http;
        this.router = router;
        this.isAuth$ = new rxjs_1.Subject();
        this.url = 'http://localhost:3000/api/user/';
    }
    AuthService.prototype.autoLogout = function () {
        var _this = this;
        var expireDuration = 1 * 24 * 60 * 60 * 1000;
        var savedAuthDate = localStorage.getItem('authDate');
        var authDate = new Date(savedAuthDate).getTime();
        var authExpiredIn = authDate + expireDuration;
        var logoutIn = authExpiredIn - Date.now();
        var timer;
        if (logoutIn > 0) {
            timer = setTimeout(function () {
                _this.logout();
            }, logoutIn);
            return;
        }
        clearTimeout(timer);
        this.logout();
    };
    AuthService.prototype.signin = function (user) {
        return this.http.post(this.url + "signin", user);
    };
    AuthService.prototype.signup = function (user) {
        return this.http.post(this.url + "signup", user);
    };
    AuthService.prototype.setupSuccessAuth = function (token, userId) {
        var authDate = new Date();
        localStorage.setItem('token', token);
        localStorage.setItem('userId', userId);
        localStorage.setItem('authDate', authDate);
        this.router.navigate(['/user/cart']);
        this.isAuth$.next(true);
    };
    AuthService.prototype.logout = function () {
        localStorage.removeItem('token');
        localStorage.removeItem('userId');
        localStorage.removeItem('authDate');
        this.router.navigate(['/auth/signin']);
        this.isAuth$.next(false);
    };
    AuthService.prototype.isAuthSaved = function () {
        var result = ((localStorage.getItem('token') && localStorage.getItem('userId')));
        return result;
    };
    AuthService.prototype.getSavedTokenAndUserId = function () {
        return {
            token: localStorage.getItem('token') || '',
            userId: localStorage.getItem('userId') || ''
        };
    };
    AuthService.prototype.isAuthListener = function () {
        return this.isAuth$.asObservable();
    };
    AuthService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], AuthService);
    return AuthService;
}());
exports.AuthService = AuthService;
