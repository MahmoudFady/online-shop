import { AuthGuardService } from './components/auth/auth-guard.service';
import { HomeComponent } from './components/home/home.component';
import { CartComponent } from './components/cart/cart.component';
import { SignupComponent } from './components/auth/signup/signup.component';
import { SigninComponent } from './components/auth/signin/signin.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductDetailsComponent } from './components/products/product-details/product-details.component';

const routes: Routes = [
  { path: '', redirectTo: '/shop', pathMatch: 'full' },
  { path: 'shop', component: HomeComponent },
  { path: 'shop/:productId', component: ProductDetailsComponent },
  {
    path: 'user',
    canActivate: [AuthGuardService],
    children: [
      {
        path: 'cart',
        component: CartComponent,
      },
    ],
  },
  {
    path: 'auth',
    children: [
      {
        path: 'signin',
        component: SigninComponent,
      },
      {
        path: 'signup',
        component: SignupComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
