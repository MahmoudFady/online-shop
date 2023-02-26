import { CartService } from './cart.service';
import { ICart } from './../shared/models/cart.model';
import { Component } from '@angular/core';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  cart!: ICart;
  cartInfo!: {
    totalProducts: number;
    totalQuantity: number;
    totalPrice: number;
    totalPriceAfterDiscount: number;
  };
  constructor(private cartService: CartService) {}
  ngOnInit() {
    this.cartService.getUpdatedCartListener().subscribe({
      next: (cart) => {
        this.cart = cart;
        const {
          totalPrice,
          totalPriceAfterDiscount,
          totalQuantity,
          totalProducts,
        } = cart;
        this.cartInfo = {
          totalPrice,
          totalPriceAfterDiscount,
          totalProducts,
          totalQuantity,
        };
      },
    });
    this.cartService.getUserCart();
  }
}
