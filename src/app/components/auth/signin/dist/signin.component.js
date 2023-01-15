"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.SigninComponent = void 0;
var core_1 = require("@angular/core");
var SigninComponent = /** @class */ (function () {
    function SigninComponent(_snackBar, authService) {
        this._snackBar = _snackBar;
        this.authService = authService;
        this.loading = false;
    }
    SigninComponent.prototype.ngOnInit = function () { };
    SigninComponent.prototype.onSignin = function (form) {
        var _this = this;
        if (form.invalid)
            return;
        this.loading = true;
        var _a = form.value, email = _a.email, password = _a.password;
        this.authService.signin({ email: email, password: password }).subscribe({
            next: function (response) {
                _this.loading = false;
                var token = response.token, user = response.user;
                if (!token || !user)
                    return;
                _this.authService.setupSuccessAuth(token, user._id);
            },
            error: function (err) {
                _this.loading = false;
                var errMsg = err.error.message;
                _this._snackBar.open(errMsg, '', {
                    panelClass: ['wran-bg']
                });
                if (err.status == 404) {
                    form.controls['email'].reset();
                }
                else if (err.status == 401) {
                    form.controls['password'].reset();
                }
            }
        });
    };
    SigninComponent = __decorate([
        core_1.Component({
            selector: 'app-signin',
            templateUrl: './signin.component.html',
            styleUrls: ['../shared-style.css', './signin.component.css']
        })
    ], SigninComponent);
    return SigninComponent;
}());
exports.SigninComponent = SigninComponent;
