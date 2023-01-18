import { AuthGuardService } from './components/auth/auth-guard.service';
import { CartComponent } from './components/cart/cart.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/shop', pathMatch: 'full' },
  {
    path: 'shop',
    loadChildren: () =>
      import('./components/shop/shop.module').then((m) => m.ShopModule),
  },

  {
    path: 'user',
    canActivate: [AuthGuardService],
    loadChildren: () =>
      import('./components/cart/cart.module').then((m) => m.CartModule),
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('./components/auth/auth.module').then((m) => m.AuthModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
