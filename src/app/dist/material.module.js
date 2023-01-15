"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppMaterialModule = void 0;
var core_1 = require("@angular/core");
var button_1 = require("@angular/material/button");
var input_1 = require("@angular/material/input");
var progress_spinner_1 = require("@angular/material/progress-spinner");
var snack_bar_1 = require("@angular/material/snack-bar");
var icon_1 = require("@angular/material/icon");
var paginator_1 = require("@angular/material/paginator");
var badge_1 = require("@angular/material/badge");
var AppMaterialModule = /** @class */ (function () {
    function AppMaterialModule() {
    }
    AppMaterialModule = __decorate([
        core_1.NgModule({
            imports: [
                badge_1.MatBadgeModule,
                paginator_1.MatPaginatorModule,
                snack_bar_1.MatSnackBarModule,
                progress_spinner_1.MatProgressSpinnerModule,
                button_1.MatButtonModule,
                input_1.MatInputModule,
                icon_1.MatIconModule,
            ],
            exports: [
                badge_1.MatBadgeModule,
                paginator_1.MatPaginatorModule,
                snack_bar_1.MatSnackBarModule,
                progress_spinner_1.MatProgressSpinnerModule,
                button_1.MatButtonModule,
                input_1.MatInputModule,
                icon_1.MatIconModule,
            ]
        })
    ], AppMaterialModule);
    return AppMaterialModule;
}());
exports.AppMaterialModule = AppMaterialModule;
