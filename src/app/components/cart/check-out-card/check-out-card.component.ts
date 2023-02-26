import { CartService } from './../cart.service';
import { Component, OnInit, Input } from '@angular/core';
@Component({
  selector: 'app-cart-check-out-card',
  templateUrl: './check-out-card.components.html',
  styleUrls: ['./check-out-card.components.css'],
})
export class CheckOutCardComponent implements OnInit {
  @Input() cartInfo!: {
    totalProducts: number;
    totalQuantity: number;
    totalPrice: number;
    totalPriceAfterDiscount: number;
  };
  constructor(private cartService: CartService) {}
  ngOnInit(): void {}
}
