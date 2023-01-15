"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppModule = void 0;
var material_module_1 = require("./material.module");
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var app_routing_module_1 = require("./app-routing.module");
var app_component_1 = require("./app.component");
var navbar_component_1 = require("./components/navbar/navbar.component");
var signin_component_1 = require("./components/auth/signin/signin.component");
var signup_component_1 = require("./components/auth/signup/signup.component");
var forms_1 = require("@angular/forms");
var animations_1 = require("@angular/platform-browser/animations");
var core_2 = require("@angular/material/core");
var http_1 = require("@angular/common/http");
var snack_bar_1 = require("@angular/material/snack-bar");
var cart_component_1 = require("./components/cart/cart.component");
var cart_product_component_1 = require("./components/cart/cart-product/cart-product.component");
var home_component_1 = require("./components/home/home.component");
var products_component_1 = require("./components/products/products.component");
var single_product_component_1 = require("./components/products/single-product/single-product.component");
var product_details_component_1 = require("./components/products/product-details/product-details.component");
var similar_products_component_1 = require("./components/products/similar-products/similar-products.component");
var text_shorten_pipe_1 = require("./components/shared/text-shorten.pipe");
var auth_interceptor_service_1 = require("./components/auth/auth-interceptor.service");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                navbar_component_1.NavbarComponent,
                signin_component_1.SigninComponent,
                signup_component_1.SignupComponent,
                cart_component_1.CartComponent,
                cart_product_component_1.CartProductComponent,
                home_component_1.HomeComponent,
                products_component_1.ProductsComponent,
                single_product_component_1.SingleProductComponent,
                product_details_component_1.ProductDetailsComponent,
                similar_products_component_1.SimilarProductsComponent,
                text_shorten_pipe_1.TextShortenPipe,
            ],
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                app_routing_module_1.AppRoutingModule,
                animations_1.BrowserAnimationsModule,
                material_module_1.AppMaterialModule,
                http_1.HttpClientModule,
            ],
            providers: [
                { provide: core_2.ErrorStateMatcher, useClass: core_2.ShowOnDirtyErrorStateMatcher },
                { provide: snack_bar_1.MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: { duration: 500 } },
                {
                    provide: http_1.HTTP_INTERCEPTORS,
                    useClass: auth_interceptor_service_1.AuthInterceptorService,
                    multi: true
                },
            ],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
