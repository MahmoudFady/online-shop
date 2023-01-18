import { CartComponent } from './cart.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from './../shared/shared.module';
import { CartProductComponent } from './cart-product/cart-product.component';
import { NgModule } from '@angular/core';
@NgModule({
  declarations: [CartComponent, CartProductComponent],
  imports: [
    SharedModule,
    RouterModule.forChild([
      {
        path: 'cart',
        pathMatch: 'full',
        component: CartComponent,
      },
    ]),
  ],
})
export class CartModule {}
