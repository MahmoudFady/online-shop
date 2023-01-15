"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ProductDetailsComponent = void 0;
var core_1 = require("@angular/core");
var ProductDetailsComponent = /** @class */ (function () {
    function ProductDetailsComponent(productService, route) {
        this.productService = productService;
        this.route = route;
        this.loading = false;
    }
    ProductDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loading = true;
        this.route.params.subscribe({
            next: function (params) {
                var productId = params['productId'];
                _this.productService.getProductById(productId).subscribe({
                    next: function (response) {
                        _this.loading = false;
                        _this.product = response.product;
                        _this.similarQuery = "category=" + _this.product.category;
                        console.log(_this.similarQuery);
                    }
                });
            }
        });
    };
    ProductDetailsComponent = __decorate([
        core_1.Component({
            selector: 'app-product-details',
            templateUrl: './product-details.component.html',
            styleUrls: ['./product-details.component.css']
        })
    ], ProductDetailsComponent);
    return ProductDetailsComponent;
}());
exports.ProductDetailsComponent = ProductDetailsComponent;
