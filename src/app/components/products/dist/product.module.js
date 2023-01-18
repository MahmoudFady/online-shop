"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ProductModule = void 0;
var product_category_component_1 = require("./product-category/product-category.component");
var similar_products_component_1 = require("./similar-products/similar-products.component");
var product_details_component_1 = require("./product-details/product-details.component");
var product_quan_ctrl_component_1 = require("./single-product/product-quantity-controls/product-quan-ctrl.component");
var single_product_component_1 = require("./single-product/single-product.component");
var products_component_1 = require("./products.component");
var core_1 = require("@angular/core");
var shared_module_1 = require("../shared/shared.module");
var ProductModule = /** @class */ (function () {
    function ProductModule() {
    }
    ProductModule = __decorate([
        core_1.NgModule({
            declarations: [
                products_component_1.ProductsComponent,
                single_product_component_1.SingleProductComponent,
                product_quan_ctrl_component_1.ProductQuantityCtrls,
                product_details_component_1.ProductDetailsComponent,
                similar_products_component_1.SimilarProductsComponent,
                product_category_component_1.ProductCategoryComponent,
            ],
            imports: [shared_module_1.SharedModule],
            exports: [
                shared_module_1.SharedModule,
                products_component_1.ProductsComponent,
                single_product_component_1.SingleProductComponent,
                product_quan_ctrl_component_1.ProductQuantityCtrls,
                similar_products_component_1.SimilarProductsComponent,
            ]
        })
    ], ProductModule);
    return ProductModule;
}());
exports.ProductModule = ProductModule;
