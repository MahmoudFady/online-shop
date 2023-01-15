"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ProductService = void 0;
var rxjs_1 = require("rxjs");
var core_1 = require("@angular/core");
var ProductService = /** @class */ (function () {
    function ProductService(http) {
        this.http = http;
        this.url = 'http://localhost:3000/api/products/';
        this.productsResponse$ = new rxjs_1.Subject();
    }
    ProductService.prototype.getProductsByQuery = function (query, limit, pageIndex) {
        var _this = this;
        if (limit === void 0) { limit = 8; }
        if (pageIndex === void 0) { pageIndex = 1; }
        var queryParams = "?" + query + "&limit=" + limit + "&pageIndex=" + pageIndex;
        this.http.get("" + this.url + queryParams).subscribe({
            next: function (response) {
                _this.productsResponse$.next(response);
            }
        });
    };
    ProductService.prototype.getProductById = function (id) {
        return this.http.get("" + this.url + id);
    };
    ProductService.prototype.updatedPoductsListener = function () {
        return this.productsResponse$.asObservable();
    };
    ProductService = __decorate([
        core_1.Injectable({ providedIn: 'root' })
    ], ProductService);
    return ProductService;
}());
exports.ProductService = ProductService;
