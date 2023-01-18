import { ProductCategoryComponent } from './../products/product-category/product-category.component';
import { ProductDetailsComponent } from './../products/product-details/product-details.component';
import { ProductModule } from './../products/product.module';
import { ShopComponent } from './shop.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
@NgModule({
  declarations: [ShopComponent],
  imports: [
    ProductModule,
    RouterModule.forChild([
      {
        path: '',
        pathMatch: 'full',
        component: ShopComponent,
      },
      {
        path: 'category/:category',
        component:ProductCategoryComponent
      },
      {
        path: ':productId',
        component: ProductDetailsComponent,
      },
    ]),
  ],
})
export class ShopModule {}
