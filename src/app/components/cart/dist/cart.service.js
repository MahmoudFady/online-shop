"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CartService = void 0;
var rxjs_1 = require("rxjs");
var core_1 = require("@angular/core");
var CartService = /** @class */ (function () {
    function CartService(http) {
        var _this = this;
        this.http = http;
        this.baseUrl = 'http://localhost:3000/api/cart/';
        this.cart$ = new rxjs_1.Subject();
        this.cartObserver = {
            next: function (response) {
                _this.cart$.next(response.cart);
            },
            error: function (err) { }
        };
    }
    CartService.prototype.getUserCart = function () {
        this.http.get(this.baseUrl).subscribe(this.cartObserver);
    };
    CartService.prototype.getProductInCart = function () {
        return this.cart$;
    };
    CartService.prototype.addProduct = function (id) {
        var url = "" + this.baseUrl + id;
        this.http.post(url, {}).subscribe(this.cartObserver);
    };
    CartService.prototype.removeProduct = function (id) {
        var url = "" + this.baseUrl + id;
        this.http["delete"](url).subscribe(this.cartObserver);
    };
    CartService.prototype.incrPorductQuan = function (id) {
        var url = this.baseUrl + "increaseQuantity/" + id;
        this.http.patch(url, {}).subscribe(this.cartObserver);
    };
    CartService.prototype.decrPorductQuan = function (id) {
        var url = this.baseUrl + "decreaseQuantity/" + id;
        this.http["delete"](url, {}).subscribe(this.cartObserver);
    };
    CartService.prototype.getUpdatedCartListener = function () {
        return this.cart$.asObservable();
    };
    CartService = __decorate([
        core_1.Injectable({ providedIn: 'root' })
    ], CartService);
    return CartService;
}());
exports.CartService = CartService;
