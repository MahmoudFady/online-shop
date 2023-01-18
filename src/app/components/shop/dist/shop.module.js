"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ShopModule = void 0;
var product_category_component_1 = require("./../products/product-category/product-category.component");
var product_details_component_1 = require("./../products/product-details/product-details.component");
var product_module_1 = require("./../products/product.module");
var shop_component_1 = require("./shop.component");
var router_1 = require("@angular/router");
var core_1 = require("@angular/core");
var ShopModule = /** @class */ (function () {
    function ShopModule() {
    }
    ShopModule = __decorate([
        core_1.NgModule({
            declarations: [shop_component_1.ShopComponent],
            imports: [
                product_module_1.ProductModule,
                router_1.RouterModule.forChild([
                    {
                        path: '',
                        pathMatch: 'full',
                        component: shop_component_1.ShopComponent
                    },
                    {
                        path: 'category/:category',
                        component: product_category_component_1.ProductCategoryComponent
                    },
                    {
                        path: ':productId',
                        component: product_details_component_1.ProductDetailsComponent
                    },
                ]),
            ]
        })
    ], ShopModule);
    return ShopModule;
}());
exports.ShopModule = ShopModule;
