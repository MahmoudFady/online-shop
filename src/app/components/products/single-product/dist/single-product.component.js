"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.SingleProductComponent = void 0;
var core_1 = require("@angular/core");
var SingleProductComponent = /** @class */ (function () {
    function SingleProductComponent(_snackBar) {
        this._snackBar = _snackBar;
    }
    SingleProductComponent.prototype.ngOnInit = function () { };
    SingleProductComponent.prototype.onBuy = function () {
        this._snackBar.open('product add to cart', '', {
            panelClass: ['success-bg']
        });
    };
    SingleProductComponent.prototype.onIncrQuantity = function () {
        this._snackBar.open('one item added', '', {
            panelClass: ['success-bg']
        });
    };
    SingleProductComponent.prototype.onDecrQuantity = function () {
        this._snackBar.open('one item removed', '', {
            panelClass: ['wran-bg']
        });
    };
    SingleProductComponent.prototype.calcPriceAfterDiscount = function () {
        var _a = this.product, price = _a.price, discountPercentage = _a.discountPercentage;
        var result = price - price * (discountPercentage / 100);
        return result.toFixed(1);
    };
    __decorate([
        core_1.Input()
    ], SingleProductComponent.prototype, "product");
    SingleProductComponent = __decorate([
        core_1.Component({
            selector: 'app-single-product',
            templateUrl: './single-product.component.html',
            styleUrls: ['./single-product.component.css']
        })
    ], SingleProductComponent);
    return SingleProductComponent;
}());
exports.SingleProductComponent = SingleProductComponent;
