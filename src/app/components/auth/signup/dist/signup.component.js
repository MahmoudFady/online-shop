"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.SignupComponent = void 0;
var core_1 = require("@angular/core");
var SignupComponent = /** @class */ (function () {
    function SignupComponent(_snackBar, authService) {
        this._snackBar = _snackBar;
        this.authService = authService;
        this.loading = false;
    }
    SignupComponent.prototype.ngOnInit = function () { };
    SignupComponent.prototype.onSignup = function (f) {
        var _this = this;
        if (f.invalid)
            return;
        this.loading = true;
        var _a = f.value, name = _a.name, email = _a.email, phone = _a.phone, address = _a.address, password = _a.password;
        this.authService
            .signup({ name: name, email: email, phone: phone, address: address, password: password })
            .subscribe({
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
            }
        });
    };
    SignupComponent = __decorate([
        core_1.Component({
            selector: 'app-signup',
            templateUrl: './signup.component.html',
            styleUrls: ['../shared-style.css', './signup.component.css']
        })
    ], SignupComponent);
    return SignupComponent;
}());
exports.SignupComponent = SignupComponent;
