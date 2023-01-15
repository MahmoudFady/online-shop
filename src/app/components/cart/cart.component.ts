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
  constructor(private cartService: CartService) {}
  ngOnInit() {
    this.cartService.getUpdatedCartListener().subscribe({
      next: (cart) => {
        this.cart = cart;
        console.log(cart);
      },
    });
    this.cartService.getUserCart();
  }
}
