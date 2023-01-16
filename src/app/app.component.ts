import { AuthService } from './components/auth/auth.service';
import { CartService } from './components/cart/cart.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'online-shop';
  constructor(
    private cartService: CartService,
    private authService: AuthService
  ) {}
  ngOnInit(): void {}
}
