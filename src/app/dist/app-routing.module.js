"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppRoutingModule = void 0;
var home_component_1 = require("./components/home/home.component");
var cart_component_1 = require("./components/cart/cart.component");
var signup_component_1 = require("./components/auth/signup/signup.component");
var signin_component_1 = require("./components/auth/signin/signin.component");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var product_details_component_1 = require("./components/products/product-details/product-details.component");
var routes = [
    { path: '', redirectTo: '/shop', pathMatch: 'full' },
    { path: 'shop', component: home_component_1.HomeComponent },
    { path: 'shop/:productId', component: product_details_component_1.ProductDetailsComponent },
    {
        path: 'user',
        children: [
            {
                path: 'cart',
                component: cart_component_1.CartComponent
            },
        ]
    },
    {
        path: 'auth',
        children: [
            {
                path: 'signin',
                component: signin_component_1.SigninComponent
            },
            {
                path: 'signup',
                component: signup_component_1.SignupComponent
            },
        ]
    },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(routes)],
            exports: [router_1.RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
