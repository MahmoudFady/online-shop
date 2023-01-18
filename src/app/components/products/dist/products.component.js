"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ProductsComponent = void 0;
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var ProductsComponent = /** @class */ (function () {
    function ProductsComponent(productService, cartService) {
        this.productService = productService;
        this.cartService = cartService;
        this.cartProducts = [];
        this.limit = 8;
        this.products = [];
        this.loading = false;
    }
    ProductsComponent.prototype.ngOnChanges = function (changes) {
        this.loading = true;
        this.productService.getProductsByQuery(this.query);
    };
    ProductsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.cartService
            .getUpdatedCartListener()
            .pipe(rxjs_1.first(), rxjs_1.map(function (cart) {
            if (!cart)
                return [];
            var products = cart.products;
            var obj = products.map(function (p) {
                return { _id: p.product._id, quantity: p.quantity };
            });
            return obj;
        }))
            .subscribe({
            next: function (cartProducts) {
                _this.cartProducts = cartProducts;
            }
        });
        this.cartService.getUserCart();
        this.loading = true;
        this.productService.getProductsByQuery(this.query);
        this.productService.updatedPoductsListener().subscribe({
            next: function (response) {
                _this.products = response.products;
                _this.total = response.total;
                _this.loading = false;
            },
            error: function (err) {
                _this.loading = false;
            }
        });
    };
    ProductsComponent.prototype.onPageChanges = function ($page) {
        var pageIndex = $page.pageIndex, pageSize = $page.pageSize;
        pageIndex += 1;
        this.loading = true;
        this.productService.getProductsByQuery(this.query, pageSize, pageIndex);
    };
    ProductsComponent.prototype.getProductQuantity = function (id) {
        var index = this.cartProducts.findIndex(function (p) { return p._id == id; });
        var result = index !== -1 ? this.cartProducts[index].quantity : 0;
        return result;
    };
    __decorate([
        core_1.Input()
    ], ProductsComponent.prototype, "query");
    ProductsComponent = __decorate([
        core_1.Component({
            selector: 'app-products',
            templateUrl: './products.component.html',
            styleUrls: ['./products.component.css']
        })
    ], ProductsComponent);
    return ProductsComponent;
}());
exports.ProductsComponent = ProductsComponent;
