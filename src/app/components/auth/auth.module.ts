import { SharedModule } from './../shared/shared.module';
import { RouterModule } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { NgModule } from '@angular/core';
@NgModule({
  declarations: [SigninComponent, SignupComponent],
  imports: [
    SharedModule,
    RouterModule.forChild([
      {
        path: 'signin',
        component: SigninComponent,
      },
      {
        path: 'signup',
        component: SignupComponent,
      },
    ]),
  ],
})
export class AuthModule {}
