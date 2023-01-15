import { AuthService } from './../auth.service';
import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['../shared-style.css', './signup.component.css'],
})
export class SignupComponent implements OnInit {
  loading = false;
  constructor(
    private _snackBar: MatSnackBar,
    private authService: AuthService
  ) {}
  ngOnInit(): void {}
  onSignup(f: NgForm) {
    if (f.invalid) return;
    this.loading = true;
    const { name, email, phone, address, password } = f.value;
    this.authService
      .signup({ name, email, phone, address, password })
      .subscribe({
        next: (response) => {
          this.loading = false;
          const { token, user } = response;
          if (!token || !user) return;
          this.authService.setupSuccessAuth(token, user._id!);
        },
        error: (err) => {
          this.loading = false;
          const errMsg = err.error.message;
          this._snackBar.open(errMsg, '', {
            panelClass: ['wran-bg'],
          });
        },
      });
  }
}
