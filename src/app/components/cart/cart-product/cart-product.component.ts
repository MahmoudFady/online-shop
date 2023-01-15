import { CartService } from './../cart.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart-product',
  templateUrl: './cart-product.component.html',
  styleUrls: ['./cart-product.component.css'],
})
export class CartProductComponent implements OnInit {
  @Input() item!: any;
  constructor(private cartService: CartService) {}
  ngOnInit(): void {}
  onIncrQuantity() {
    this.cartService.incrPorductQuan(this.item.product._id);
  }
  onDecrQuantity() {
    this.cartService.decrPorductQuan(this.item.product._id);
  }
  onRemoveProduct() {
    this.cartService.removeProduct(this.item.product._id);
  }
}
