import { CartService } from './../cart/cart.service';
import { AuthService } from './../auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  isAuth = false;
  totalProducts = 0;
  constructor(
    private authService: AuthService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    const { userId, token } = this.authService.getSavedTokenAndUserId();
    this.isAuth = userId && token ? true : false;
    if (this.isAuth) {
      this.cartService.getUserCart();
      this.authService.autoLogout();
    }
    this.cartService
      .getUpdatedCartListener()
      .pipe(
        map((cart) => {
          return cart ? cart.totalProducts : 0;
        })
      )
      .subscribe({
        next: (productsCount) => {
          this.totalProducts = productsCount;
          console.log(this.totalProducts);
        },
      });
    this.authService.isAuthListener().subscribe({
      next: (isAuth) => {
        this.isAuth = isAuth;
        if (isAuth) {
          this.cartService.getUserCart();
          this.authService.autoLogout();
        }
      },
    });
  }
  onLogout() {
    this.authService.logout();
  }
}
