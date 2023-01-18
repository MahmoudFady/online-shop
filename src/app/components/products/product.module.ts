import { ProductCategoryComponent } from './product-category/product-category.component';
import { SimilarProductsComponent } from './similar-products/similar-products.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductQuantityCtrls } from './single-product/product-quantity-controls/product-quan-ctrl.component';
import { SingleProductComponent } from './single-product/single-product.component';
import { ProductsComponent } from './products.component';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
@NgModule({
  declarations: [
    ProductsComponent,
    SingleProductComponent,
    ProductQuantityCtrls,
    ProductDetailsComponent,
    SimilarProductsComponent,
    ProductCategoryComponent,
  ],
  imports: [SharedModule],
  exports: [
    SharedModule,
    ProductsComponent,
    SingleProductComponent,
    ProductQuantityCtrls,
    SimilarProductsComponent,
  ],
})
export class ProductModule {}
